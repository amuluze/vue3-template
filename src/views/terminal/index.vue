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
      background: 'var(--xterm-bg-color)',
      foreground: 'var(--xterm-fg-color)',
      cursor: 'var(--xterm-cursor-color)',
      selectionBackground: 'var(--xterm-selection-bg-color)',
    },
  })
  term.loadAddon(fitAddon)
  term.open(document.getElementById('terminal')!)
  setTimeout(() => {
    fitAddon.fit()
  }, 50)
  window.addEventListener('resize', fitAddon.fit)
  term.focus()

  term.onData((data) => {
    ws!.send(data)
  })
}

onMounted(() => {
  ws = new CustomReconnectingWebSocket('terminal')
  ws.onopen = () => {
    ping = setInterval(() => {
      ws!.send('ping')
    }, 30000)
  }
  ws.onmessage = (msg) => {
    console.log(msg.data)
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
        <el-card shadow="never">
            <div id="terminal" class="am-console" />
        </el-card>
    </div>
</template>

<style scoped lang="scss">
@include b(console) {
  height: 100%;

  :deep(.xterm-viewport) {
    border-radius: 5px;
  }
}
</style>
