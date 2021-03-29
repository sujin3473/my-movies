<template>
	<div class="contents">
		<h1 class="page-header">I wish to watch...</h1>
		<div class="wishes">
			<transition-group name="list" tag="ul">
				<movie-wish-item
					v-for="wishMovie in this.$store.state.wishMovies"
					:key="wishMovie.item"
					:wishMovie="wishMovie"
				></movie-wish-item>
			</transition-group>
		</div>
	</div>
</template>

<script>
import MovieWishItem from '@/components/MovieWishItem.vue';
export default {
	components: {
		MovieWishItem,
	},
};
</script>
