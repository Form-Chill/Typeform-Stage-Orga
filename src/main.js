import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const app = createApp(App);

app.component('Navbar', Navbar);
app.component('Footer', Footer);
app.use(router);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js" 
