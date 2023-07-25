import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import {router} from './router'
// export default 하지 않은것은 { }를 싸줘야한다.
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')