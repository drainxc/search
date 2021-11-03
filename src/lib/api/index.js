import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: 'KakaoAK {REST_API_KEY}',
  },
});

export const bookSearch = (params) => {
    return Kakao.get('/v3/search/book', { params })
}
