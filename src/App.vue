<template>
	<v-app>
		<nav-bar />
		<v-content style="background-color: #F8F8FF">
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
import NavBar from '@/components/navBar.vue';

export default {
	name: 'App',
	components: {
		NavBar,
	},
};
</script>

<style scoped></style>
