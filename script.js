let page = 1
const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const BASE_API=
  `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`;
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(BASE_API);

// const pagination = document.querySelector("pagination");
// const paginationBtn1 = document.querySelector("pagination_btn1");
// const paginationBtn2 = document.querySelector("pagination_btn2");

const previous = document.querySelector('.pagination_btn1')
const next = document.querySelector('.pagination_btn2')


previous.addEventListener('click', (e)=>{
  e.preventDefault();

  const apihUrl = `${BASE_API}${page}`;
  if (page<=5 && page>1) {
    page--
    getMovies(apihUrl);
    console.log(page)
    console.log(apihUrl)
  }
})

next.addEventListener('click', (e)=>{
  e.preventDefault();

  const apihUrl = `${BASE_API}${page}`;
  if (page<5 && page>=1) {
    page++
    getMovies(apihUrl);
    console.log(page)
    console.log(apihUrl)
  }
})

console.log(page)

getMovies(BASE_API)

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote > 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  // Очищаем предыдущие фильмы
  document.querySelector(".movies").innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <div class="movie__cover-inner">
        <img
          src="${movie.posterUrlPreview}"
          class="movie__cover"
          alt="${movie.nameRu}"
        />
        <div class="movie__cover--darkened"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(
          (genre) => ` ${genre.genre}`
        )}</div>
        ${
          movie.rating &&
          `
        <div class="movie__average movie__average--${getClassByRate(
          movie.rating
        )}">${movie.rating}</div>
        `
        }
      </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".search_input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSearchUrl);

    search.value = "";
  }
});
