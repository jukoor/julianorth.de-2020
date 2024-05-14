import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/views/Intro';
import Profil from '@/views/Profil';
import Arbeit from '@/views/Arbeit';
import Kontakt from '@/views/Contact';
import Imprint from '@/views/Imprint';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	linkExactActiveClass: 'is-active',
	routes: [{
			path: '/',
			name: 'Intro',
			component: Intro,
			meta: {
				title: route => {
					return "Julian Orth // intro.";
				}
			}
		},
		{
			path: '/profil',
			name: 'profil.',
			component: Profil,
			meta: {
				title: route => {
					return "Julian Orth // profil.";
				}
			}
		},
		{
			path: '/arbeit',
			name: 'Arbeit',
			component: Arbeit,
			meta: {
				title: route => {
					return "Julian Orth // arbeit.";
				}
			}
		},
		{
			path: '/kontakt',
			name: 'Kontakt',
			component: Kontakt,
			meta: {
				title: route => {
					return "Julian Orth // kontakt.";
				}
			}
		}, {
			path: '/imprint',
			name: 'Imprint',
			component: Imprint,
			meta: {
				title: route => {
					return "Julian Orth // impressum.";
				}
			}
		}
	]
});

const defaultTitle = 'Julian Orth // Frontend Entwickler';
router.afterEach((to, from) => {
	Vue.nextTick(() => {
		document.title = to.meta.title(to) || defaultTitle;
	});
});

export default router;