import { createApp } from 'vue';
import App from './App.vue';
import saySome from './components/ale';
import { message, message2 } from './components/data';

saySome(message);
saySome(message2);
createApp(App).mount('#app');
