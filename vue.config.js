module.exports = {
	transpileDependencies: ['vuetify'],
	devServer: {
		overlay: false,
		proxy: 'https://openapi.naver.com',
	},
};
