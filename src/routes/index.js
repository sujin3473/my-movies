import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/boxOffice',
		},
		{
			path: '/boxOffice',
			component: () => import('@/views/BoxOffice.vue'),
		},
		{
			path: '/myMovies',
			component: () => import('@/views/MyMovies.vue'),
		},
		{
			path: '/searchMovie',
			component: () => import('@/views/SearchMovie.vue'),
		},
	],
});
