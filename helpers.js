// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const movieRelease = document.getElementById('release-date');
    const statusR = document.getElementById('release-status')
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
    movieRelease.innerHTML = '';
    statusR.innerHTML='';

}

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    clearCurrentMovie();
    showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');
  
    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};
const createAverageVote = (averageVote) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'vote_average');
    titleHeader.innerHTML = averageVote;
  
    return titleHeader;
};
const createRunTime = (runtime) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'runtime');
    titleHeader.innerHTML = runtime;
  
    return titleHeader;
};
const createStatus = (status) => {
    const titleHeader = document.createElement('h3');
    titleHeader.setAttribute('id', 'status');
    titleHeader.innerHTML = status;
  
    return titleHeader;
};

const createMovieRelease = (releasedate) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'release-date');
    titleHeader.innerHTML = releasedate;
  
    return titleHeader;
};



// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;
  
    return overviewParagraph;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const statusRelease = document.getElementById('release-status');
   
    const releaseDate = document.getElementById('release-date');
    
   
    const averageVote = document.getElementById('average-vote');
    averageVote.innerHTML = "Average Vote: "

    const runTime = document.getElementById('runtime')
    runTime.innerHTML = "Runtime: "

  
    // Create HTML content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);
    const status = createStatus(movieInfo.status);
    const release = createMovieRelease(movieInfo.release_date);
    const aveVote = createAverageVote(movieInfo.vote_average);
    const runTimeMin = createRunTime(movieInfo.runtime);
    // Append title, poster, and overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);
    statusRelease.appendChild(status);
    releaseDate.appendChild(release);
    averageVote.appendChild(aveVote);
    runTime.appendChild(runTimeMin);
    
    
  
    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
};