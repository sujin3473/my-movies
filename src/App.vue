<template>
	<div class="app">
		<nav-bar />
		<div class="app-contents">
			<router-view />
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
	name: 'App',
	components: {
		NavBar,
	},
};
</script>

<style>
@import './css/common.css';
@import './css/search.css';
@import './css/wishes.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
</style>
