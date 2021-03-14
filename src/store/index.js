import Vue from 'vue';
import Vuex from 'vuex';
import searchMovie from './modules/searchMovie';
import myMovies from './modules/myMovies';

Vue.use(Vuex);

const apiUrl = '';

export default new Vuex.store({
	modules: {
		searchMovie,
		myMovies,
	},
});
