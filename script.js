const tmdbKey = '3aebf83332b0ad6a4bd1733350b5c249';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async() => {
const genreRequestEndpoint='/genre/movie/list';
const requestParams = `?api_key=${tmdbKey}`;
const urltoFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

try{
  let response = await fetch(urltoFetch);
  if(response.ok){
    let jsonResponse = await response.json();
    const genres = jsonResponse.genres;
    return genres;
  
  }
}
catch(error){
    console.log(error)
}
return jsonResponse;



};

const getMovies = async() => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint='/discover/movie';
  const requestParams =`?api_key=${tmdbKey}&with_genres=${getSelectedGenre}`
  const urlToFetch =`${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

try{
const response = await fetch(urlToFetch);
if(response.ok){
  const jsonResponse= await response.json();
  const movies=jsonResponse.results;
  return movies;
}
}catch(error){
  console.log(error)
}
  


  
};


const getMovieInfo = async(movie) => {
  const movieId = movie.id;
  const movieEndPoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`
  const urlToFetch = `${tmdbBaseUrl}${movieEndPoint}${requestParams}`

  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
  
      const movieInfo = jsonResponse;
      console.log("this is " + movieInfo)
      return movieInfo;
      
    }
  }
  catch(error){
    console.log(error)
  }

};

const getAvailableOTP = async(movie) =>{
   const movieId = movie.id;
   const movieEndPoint =`/movie/${movieId}/watch/providers`;
   const requestParams =`?api_key=${tmdbKey}`;
   const urlToFetch = `${tmdbBaseUrl}${movieEndPoint}${requestParams}`;
   try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
  
      const movieInfo = jsonResponse;
      console.log(movieInfo)
      return movieInfo;
      
    }
  }
  catch(error){
    console.log(error)
  }
}

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async() => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
const movies = await getMovies();
console.log(movies);
const randomMovie = await getRandomMovie(movies);
console.log(randomMovie);
const info = await getMovieInfo(randomMovie);
const otp = await getAvailableOTP(randomMovie);
console.log(otp)
console.log(info);
displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
