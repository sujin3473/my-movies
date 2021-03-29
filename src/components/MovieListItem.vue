<template>
	<li class="d-flex">
		<a :href="movieItem.link">
			<template v-if="movieItem.image !== ''">
				<img :src="movieItem.image" alt="image" />
			</template>
			<template v-else>
				<img src="../../public/altImage.png" />
			</template>
		</a>
		<div class="movie-data d-flex flex-column bd-highlight mb-3">
			<span class="add mb-auto p-2" align="right">
				<ion-icon
					v-b-tooltip.hover
					title="add to wish list"
					:name="this.iconName"
					@click="addMovieWish"
				></ion-icon>
			</span>
			<span align="right" v-html="movieItem.title"></span>
			<span align="right" class="rating">
				평점 {{ movieItem.userRating }}/10
			</span>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		movieItem: {
			title: String,
		},
	},
	data: () => ({
		iconName: 'heart-outline',
		newMovieWish: '',
	}),
	methods: {
		addMovieWish() {
			this.iconName = 'heart';
			this.$store.commit('addMovieWish', this.movieItem.title);
			console.log(this.movieItem.title);
		},
	},
};
</script>

<style></style>
