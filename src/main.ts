import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { setupStore } from '@/store/setup'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import '@/styles/index.scss'
// element+ 默认主题
import 'element-plus/dist/index.css'
// element+ 内置黑暗主题
import 'element-plus/theme-chalk/dark/css-vars.css'

import registerDirective from '@/directive'
import i18n from '@/languages'

const app = createApp(App)

// 注册状态管理
setupStore(app)
// 注册指令
app.use(registerDirective)
// 注册路由
app.use(router)
// 注册i18n
app.use(i18n)
app.mount('#app')
