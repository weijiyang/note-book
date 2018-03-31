import Vue from 'vue'
import App from './app.vue'

import './assets/css/test.css'

import './assets/images/bg1.jpg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render : (h)=>h(App)
}).$mount(root)