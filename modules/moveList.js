// 메인페이지 영화 리스트 및 검색기능

const getMovies = async () => {
    const result = await getAllMovies();

    console.log(result);

    let cardList = document.querySelector('.movieBox');
    cardList.innerHTML = null;

    let titleList = document.querySelector('result.')

    if (title !== undefined) {
        result = result.filter((obj) => {
            if (obj.title.search(title) !== -1) {
                return true;
            }
        })
    }

    let allMovies = document.querySelector(".movieBox")
    movieObj.forEach(infoMovie => {
        let temp_html =
            `
    <div class="col">
    <div class="card">
        <img src=""https://image.tmdb.org/t/p/w500/${infoMovie.poster_path}"" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${infoMovie.title}</h5>
            <p class="card-text">${infoMovie.overview}</p>
        </div>
    </div>
    </div>
`
        allMovies.insertAdjacentHTML('beforeend', temp_html);
    });
}
getMovies();

