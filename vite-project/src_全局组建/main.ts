import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from  './components/Card.vue'
import Tree from  './components/Tree.vue'

createApp(App).component('Card', Card).component('Tree', Tree).mount('#app')
