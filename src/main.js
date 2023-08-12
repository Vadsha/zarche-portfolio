import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Aos from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
Aos.init();
app.mount('#app')
