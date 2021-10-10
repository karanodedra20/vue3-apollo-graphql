import { createApp } from 'vue';
import App from './App.vue';
import { apolloProvider } from './apollo.provider';

const app = createApp(App);

app.use(apolloProvider);

app.mount('#app');
