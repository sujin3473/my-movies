<template>
	<div class="movie">
		<img :src="movieItem.image" />
		<div class="movieData">
			<div class="movieTitle">
				{{ movieItem.title }}
			</div>
			<b-card-text> 평점 {{ movieItem.userRating }}/10 </b-card-text>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		movieItem: {
			title: String,
		},
	},
	computed: {
		movieTitle() {
			return this.movieItem.title;
		},
	},
	methods: {
		removeTags(val) {
			return val.replace(/<\/?[^>]+>/gi, ' ');
		},
	},
};
</script>

<style></style>
