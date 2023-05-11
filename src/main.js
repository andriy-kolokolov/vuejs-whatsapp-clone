import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function toggleColorScheme() {
    const body = document.body;
    body.classList.toggle("light-scheme");
    body.classList.toggle("dark-scheme");
}