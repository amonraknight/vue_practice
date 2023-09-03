
import { createApp } from 'vue'
import App from './App.vue'
// Add pinia as the state management.
import { createPinia } from 'pinia'
// Add Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi
        }
    }
})

const app = createApp(App)

//Use pinia.
app.use(pinia)
app.use(vuetify)
app.mount('#app')