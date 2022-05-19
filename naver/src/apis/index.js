import axios from "axios";

export const getMovies = async (params) => {
  const config = {
    method: "GET",
    url: "/v1/search/movie.json",
    headers: {
      "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
      "X-Naver-Client-Secret": "kcNwJta1kV",
    },
    params,
  };
  const result = await axios(config);
  return result.data;
};
