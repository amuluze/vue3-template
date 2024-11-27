<script setup lang="ts">
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'

import CustomReconnectingWebSocket from '@/components/Websocket'

let term: Terminal | null = null
let ws: CustomReconnectingWebSocket | null = null
let ping: NodeJS.Timeout
const fitAddon = new FitAddon()

function initTerminal() {
  term = new Terminal({
    convertEol: true,
    fontSize: 14,
    cursorStyle: 'block',
    scrollback: 1000,
    theme: {
      background: '#000',
    },
  })
  term.loadAddon(fitAddon)
  term.open(document.getElementById('terminal')!)
  setTimeout(() => {
    fitAddon.fit()
  }, 50)
  // window.addEventListener('resize', fitAddon.fit)
  term.focus()

  term.onData((data) => {
    console.log('term.onData:', data)
    ws!.send(data)
  })
  // term.onBinary((data) => {
  //   ws!.send(JSON.stringify({ Type: 0, Data: data }))
  // })
  // term.onResize((data) => {
  //   ws!.send(JSON.stringify({ Type: 2, Data: { Cols: data.cols, Rows: data.rows } }))
  // })
}

onMounted(() => {
  ws = new CustomReconnectingWebSocket('ws')
  // ws.onopen = () => {
  //   ping = setInterval(() => {
  //     ws!.send(JSON.stringify({ type: 'ping' }))
  //   }, 30000)
  // }
  ws.onmessage = (msg) => {
    console.log('on message: ', msg.data)
    term!.write(msg.data)
  }
  initTerminal()
})

onUnmounted(() => {
  window.removeEventListener('resize', fitAddon.fit)
  clearInterval(ping)
  term?.dispose()
  if (ws) {
    ws.close()
    ws = null
  }
})
</script>

<template>
    <div class="am-container">
        <el-card>
            <div id="terminal" class="am-console" />
        </el-card>
    </div>
</template>

<style scoped lang="scss">
@include b(container) {
  height: 100%;
  width: 100%;

  .el-card {
    height: 100%;

    :deep(.el-card__body) {
      display: flex;
      flex-direction: column;
      height: 100% !important;
      padding: 0;
    }
  }
}

@include b(console) {
  height: 100%;

  :deep(.terminal) {
    padding: 10px;
  }

  :deep(.xterm-viewport) {
    border-radius: 5px;
  }
}
</style>
