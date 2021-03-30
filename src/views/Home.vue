<template>
	<div class="contents">
		<h1 class="page-header">Now showing</h1>
		<div class="yesterday">as of {{ $store.state.yesterday }}</div>
		<div class="boxOffice">
			<ul>
				<li v-for="boxOfficeItem in boxOfficeItems" :key="boxOfficeItem.rnum">
					<span class="movieRank">{{ boxOfficeItem.rank }}위</span>
					{{ boxOfficeItem.movieNm }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchBoxOffice } from '@/api/searchMovie';

export default {
	data: () => ({
		boxOfficeItems: [],
		// yesterday: this.$store.state.yesterday,
	}),
	methods: {
		async fetchData() {
			const { data } = await fetchBoxOffice();
			this.boxOfficeItems = data.boxOfficeResult.dailyBoxOfficeList;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style></style>
