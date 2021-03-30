<template>
	<div class="contents">
		<h1 class="page-header">I want to search...</h1>
		<b-input-group size="lg" class="input-container">
			<b-form-input
				v-model="query"
				@keyup.enter="fetchData"
				placeholder="영화를 검색하세요."
			>
			</b-form-input>
			<b-input-group-append>
				<b-button>
					<ion-icon name="search" class="search-icon"></ion-icon>
				</b-button>
			</b-input-group-append>
		</b-input-group>
		<loading-spinner v-if="isLoading"></loading-spinner>
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
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
	components: {
		MovieListItem,
		LoadingSpinner,
	},
	data: () => ({
		isLoading: false,
		query: '',
		movieItems: [],
	}),
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchMovies(this.query);
			this.isLoading = false;

			this.movieItems = data.items;
		},
	},
};
</script>

<style scoped></style>
