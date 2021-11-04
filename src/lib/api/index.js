import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: "KakaoAK 68151afc527e2fe603000910f1c865d0"
  }
});

export const bookSearch = params => {
  return Kakao.get("/v3/search/book", { params });
};