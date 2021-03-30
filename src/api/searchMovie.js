import axios from 'axios';
import moment from 'moment';

const movieURL = '/v1/search/movie.json';
const koficURL =
	' http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

const ID_KEY = 'PaL4pOh2jfW3O90R8Txe';
const SECRET_KEY = 'PqIxcU6VBN';
const koficKey = '57e1c55fb4f6ab09bf6a58fcf8cbfd0e';
const today = moment()
	.add(-1, 'days')
	.format('YYYYMMDD');

function fetchMovies(value) {
	return axios.get(movieURL, {
		headers: {
			'X-Naver-Client-Id': ID_KEY,
			'X-Naver-Client-Secret': SECRET_KEY,
		},
		params: {
			query: value,
			display: 12,
		},
	});
}

function fetchBoxOffice() {
	return axios.get(koficURL, {
		params: {
			key: koficKey,
			targetDt: today,
		},
	});
}

export { fetchMovies, fetchBoxOffice };
