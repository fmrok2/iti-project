import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Landingcomponent from './Landingcomponent.vue'
import router from './routers/indexx'



const pinia = createPinia()
const app=createApp(Landingcomponent);

app.use(router);
app.use(pinia)
app.mount("#app")
