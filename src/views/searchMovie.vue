<template>
	<div>
		<h1>searchMovie</h1>
		<v-form align="center">
			<v-row>
				<v-col md="6">
					<v-text-field v-model="query" label="영화를 검색하세요." />
				</v-col>
				<v-col>
					<v-btn @click="fetchData">검색</v-btn>
				</v-col>
			</v-row>
		</v-form>
		<movie-list-item></movie-list-item>
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
		movieList: [],
	}),
	methods: {
		async fetchData() {
			const { data } = await fetchMovies(this.query);
			console.log(data.items);
		},
	},
};
</script>

<style scoped></style>
