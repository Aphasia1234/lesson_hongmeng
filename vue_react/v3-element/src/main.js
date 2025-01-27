import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
    ElButton
} from 'element3'
import 'element3/lib/theme-chalk/index.css'// 引入样式
import router from './router'


createApp(App)
  . use(router)
  .use(ElButton)  // UI组件库 开发效率提升了
  .mount('#app')
