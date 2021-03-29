<template>
	<li>
		<ion-icon
			class="checkBtn"
			name="checkmark-done"
			@click="this.$store.commit('toggleComplete', { wishMovie, index })"
		></ion-icon>
		<span
			:class="{ textCompleted: wishMovie.watched }"
			v-html="wishMovie.item"
		></span>
		<ion-icon class="removeBtn" name="trash" @click="removeMovie"></ion-icon>
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
		removeMovie() {},
	},
};
</script>

<style></style>
