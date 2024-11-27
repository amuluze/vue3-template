<script setup lang="ts">
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'

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
  window.addEventListener('resize', fitAddon.fit)
  term.focus()

  term.onData((key) => {
    ws!.send(JSON.stringify({ Type: 0, Data: key }))
  })
  term.onBinary((data) => {
    ws!.send(JSON.stringify({ Type: 0, Data: data }))
  })
  term.onResize((data) => {
    ws!.send(JSON.stringify({ Type: 2, Data: { Cols: data.cols, Rows: data.rows } }))
  })
}

onMounted(() => {
  ws = new CustomReconnectingWebSocket('ws')
  ws.onopen = () => {
    ping = setInterval(() => {
      ws!.send(JSON.stringify({ type: 'ping' }))
    }, 30000)
  }
  ws.onmessage = (msg) => {
    console.log(msg.data)
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
    <el-card>
        <div id="terminal" class="console" />
    </el-card>
</template>

<style scoped lang="scss">
.console {
  min-height: calc(100vh - 300px);

  :deep(.terminal) {
    padding: 10px;
  }

  :deep(.xterm-viewport) {
    border-radius: 5px;
  }
}
</style>
