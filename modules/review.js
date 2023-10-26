// 리뷰 기능
class Review {
  constructor(movieId, seq, name, password, review) {
    this.movieId = movieId;
    this.seq = seq;
    this.name = name;
    this.password = password;
    this.review = review;
  }
}

const getReviews = (movieId) => {
  alert("");
};

const saveReview = async () => {
  const newReview = new Review(
    299054,
    1,
    "홍길동",
    "1234",
    "영화 너무 재미있어요!!"
  );

  console.log(newReview);
};

saveReview();

//299054
// 영화id
// order
// name
// pass

// window.localStorage.setItem("test", JSON.stringify(person));
// const testObj = JSON.parse(window.localStorage.getItem("test"));
// console.log(testObj.name);
