import './assets/main.css'
import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import UserCard from './element/UserCard.vue'

const UserCardElement = defineCustomElement(UserCard)

if (!customElements.get('user-card')) {
  customElements.define('user-card', UserCardElement)
}

createApp(App).mount('#app')
