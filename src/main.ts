import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store/setup'
import 'virtual:svg-icons-register'
// element默认主题
import 'element-plus/dist/index.css'
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/index.scss'
import registerDirective from '@/directive'

const app = createApp(App)
// 注册状态管理
setupStore(app)
// 注册指令
app.use(registerDirective)
app.use(router).mount('#app') // 注册路由
