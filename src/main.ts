import { createApp } from 'vue';
import App from './App.vue';
import 'flexboxgrid';
import './main.scss';
import './registerServiceWorker';

localStorage.gameScore = JSON.stringify([{ name: '', games: '', score: '' }]);

createApp(App).mount('#app');
