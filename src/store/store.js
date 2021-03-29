import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length > 0) {
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
					console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
				}
			}
		}
		return arr;
	},
};

export default new Vuex.Store({
	state: {
		wishMovies: storage.fetch(),
	},
	mutations: {
		addMovieWish(state, title) {
			const obj = { watched: false, item: title };
			localStorage.setItem(title, JSON.stringify(obj));
			state.wishMovies.push(obj);
		},
		toggleComplete(state, movie) {
			state.wishMovies[movie.index].completed = !state.todoItems[movie.index]
				.completed;
			localStorage.removeItem(movie.movieItem.item);
			localStorage.setItem(
				movie.movieItem.item,
				JSON.stringify(movie.movieItem),
			);
		},
	},
});
