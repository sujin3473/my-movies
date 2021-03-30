import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

Vue.use(Vuex);

const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
				}
			}
		}
		return arr;
	},
};

const yesterday = moment()
	.add(-1, 'days')
	.format('YYYY-MM-DD');

export default new Vuex.Store({
	state: {
		wishMovies: storage.fetch(),
		yesterday: yesterday,
	},
	mutations: {
		addMovieWish(state, title) {
			const obj = { watched: false, item: title };
			localStorage.setItem(title, JSON.stringify(obj));
			state.wishMovies.push(obj);
		},
		toggleComplete(state, movie) {
			console.log(state.wishMovies[movie.index].watched);
			state.wishMovies[movie.index].watched = !state.wishMovies[movie.index]
				.watched;
			localStorage.removeItem(movie.wishMovie.item);
			localStorage.setItem(
				movie.wishMovie.item,
				JSON.stringify(movie.wishMovie),
			);
		},
		removeMovieWish(state, movie) {
			localStorage.removeItem(movie.wishMovie.item);
			state.wishMovies.splice(movie.index, 1);
		},
	},
});
