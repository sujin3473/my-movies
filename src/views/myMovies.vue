<template>
	<div class="contents">
		<h1 class="page-header">I wish to watch...</h1>
		<div class="wishes">
			<ul>
				<li
					v-for="wishMovie in this.$store.state.wishMovies"
					:key="wishMovie.item"
				>
					<span v-html="wishMovie.item"></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>
