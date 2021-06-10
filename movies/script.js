/**
 * cargar datos de una API
 * usarlos dentro de nuestra app
 * llenar unas cards de peliculas
 * mostrar las peliculas
 * recursos
 * https://www.uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924
 * https://fonts.google.com/
 * https://www.eggradients.com/
 * https://coolors.co/
 * https://www.themoviedb.org/
 * 2007e77a2228a85dba321d7d5360a4b0
 */

//1.-globales
const APIURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=2007e77a2228a85dba321d7d5360a4b0&language=en-US&page=1";
const SEARCHMOVIE =
  "https://api.themoviedb.org/3/search/movie?api_key=2007e77a2228a85dba321d7d5360a4b0&query=";
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const main = document.querySelector("#main");
//2.-maquetado
//estilos y clases
//3.-colocacion
//4.-funciones
async function getMovies(url) {
  const response = await fetch(url);
  const respData = await response.json();
  showMovies(respData.results);
}

const showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    //destructurar 0 destructuring
    const { poster_path, title, vote_average, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
     <img src=${IMGPATH + poster_path} alt=${title} />
     <div class="movie-info">
       <h3>${title}</h3>
       <span  class="${getClassByRate(vote_average)}">${vote_average}</span>
     </div>
     <div class="overview">
     <h3>Overview</h3>
     ${overview}
     </div>
     `;

    main.appendChild(movieElement);
  });
};

const getClassByRate = (average) => {
  if (average >= 8) {
    return "green";
  } else if (average >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

getMovies(APIURL);

//5.-listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCHMOVIE + searchTerm);
  }
});
//6.-invocaciones
