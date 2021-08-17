import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './styles/index.scss';

const app = createApp(App).use(createPinia()).use(router);

app.mount('#app');
