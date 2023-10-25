// 메인페이지 영화 리스트 및 검색기능
import { getTodayMovies } from "./data.js";

const getMovies = async () => {
  const result = await getTodayMovies();

  console.log(result);
};

getMovies();
