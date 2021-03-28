<template>
	<div class="contents">
		<h1 class="page-header">Search a movie</h1>
		<b-input-group size="lg" class="input-container">
			<b-form-input
				v-model="query"
				@keyup.enter="fetchData"
				placeholder="영화를 검색하세요."
			>
			</b-form-input>
			<b-input-group-append>
				<b-button>
					<ion-icon name="search"></ion-icon>
				</b-button>
			</b-input-group-append>
		</b-input-group>
		<ul>
			<movie-list-item
				v-for="movieItem in movieItems"
				:movieItem="movieItem"
				:key="movieItem.link"
			></movie-list-item>
		</ul>
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
