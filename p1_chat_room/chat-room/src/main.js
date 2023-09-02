
import { createApp } from 'vue'
import App from './App.vue'
// Add pinia as the state management.
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

//Use pinia.
app.use(pinia)
app.mount('#app')