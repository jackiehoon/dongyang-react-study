import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
    "X-Naver-Client-Secret": "kcNwJta1kV",
  },
});

export const getMovies = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/movie.json",
    params,
  };
  const result = await instance(config);
  return result.data;
};

export const getBooks = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/book.json",
    params,
  };
  const result = await instance(config);
  return result.data;
};
