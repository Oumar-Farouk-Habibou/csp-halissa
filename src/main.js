import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives'
import './style.css'

createApp(App).use(directives).mount('#app')
