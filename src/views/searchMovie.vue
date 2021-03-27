<template>
	<div>
		<h1>searchMovie</h1>
		<div>
			<input
				type="text"
				v-model="query"
				@keyup.enter="fetchData"
				label="영화를 검색하세요."
			/>
			<button @click="fetchData">검색</button>
		</div>
		<div class="movies">
			<movie-list-item
				v-for="movieItem in movieItems"
				:movieItem="movieItem"
				:key="movieItem.link"
			></movie-list-item>
		</div>
	</div>
</template>

<script>
import { fetchMovies } from '@/api/searchMovie';
import MovieListItem from '@/components/MovieListItem.vue';

export default {
	components: {
		MovieListItem,
	},
	data: () => ({
		query: '',
		movieItems: [],
	}),
	methods: {
		async fetchData() {
			const { data } = await fetchMovies(this.query);
			this.movieItems = data.items;
			console.log(data.items);
		},
	},
};
</script>

<style scoped></style>
