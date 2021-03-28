<template>
	<li class="d-flex">
		<img :src="movieItem.image" alt="image" />
		<div class="movie-data d-flex flex-column bd-highlight mb-3">
			<span class="add mb-auto p-2" align="right">
				<ion-icon
					v-b-tooltip.hover
					title="add to wish list"
					:name="this.iconName"
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
	}),
	computed: {},
};
</script>

<style></style>
