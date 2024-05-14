import Vue from 'vue';
import App from './App.vue';

import store from './store';
import router from './router';

import AOS from 'aos';
import 'aos/dist/aos.css';

require('./assets/css/normalize.css');
require('./assets/css/global.css');
require('canvas-confetti');


Vue.config.productionTip = false;

new Vue({
	store,
	router,
	data: {
		sectionIntroCounter: 0
	},
	created() {
		AOS.init({
			once: true,
			duration: 1000,
			animatedClassName: 'aos-animate'
		});
	},
	render: h => h(App)
}).$mount('#app');