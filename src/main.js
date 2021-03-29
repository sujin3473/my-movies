import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/store';
import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.use(BootstrapVue);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
