import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: () => import('@/views/home.vue'),
		},
		{
			path: '/myMovies',
			component: () => import('@/views/myMovies.vue'),
		},
		{
			path: '/searchMovie',
			component: () => import('@/views/searchMovie.vue'),
		},
	],
});
