import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './styles/index.scss';

const app = createApp(App).use(createPinia());

app.mount('#app');
