<template>
	<li>
		<ion-icon
			class="checkBtn"
			name="checkmark-done"
			@click="toggleComplete(wishMovie)"
		></ion-icon>
		<span
			:class="{ textCompleted: wishMovie.wishMovie.watched }"
			v-html="wishMovie.wishMovie.item"
		></span>
		<ion-icon
			class="removeBtn"
			name="trash"
			@click="removeMovieWish(wishMovie)"
		></ion-icon>
	</li>
</template>

<script>
export default {
	props: {
		wishMovie: {
			type: Object,
			required: true,
		},
	},
	methods: {
		removeMovieWish(payload) {
			this.$store.commit('removeMovieWish', payload);
		},
		toggleComplete(payload) {
			console.log(payload.wishMovie.item);
			this.$store.commit('toggleComplete', payload);
		},
	},
};
</script>

<style></style>
