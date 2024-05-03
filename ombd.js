const apiKey = 'db60752b'

const searchBtn = document.querySelector('#searchBtn');
const input = document.querySelector('#input');
const film = document.querySelector('.film');
const main = document.querySelector('.main');

async function movie(url) {
    try{
        const response = await fetch(url)
        const data = await response.json()
        movieInfo(data); // movieInfo fonksiyonunu çağırın
    } catch(err){
        console.log(err);
    }
}

function act() {
    const mov = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input.value}`;
    movie(mov);
}

searchBtn.addEventListener('click', act); // 

function movieInfo(data) {
    // Mövcud məlumatları silir
    film.innerHTML = '';
    // Məlumatları HTML səhifəsinə əlavə etmək üçün
    data.Search.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>Year: ${movie.Year}</p>
            <p>Type: ${movie.Type}</p>
            <img src="${movie.Poster}" alt="${movie.Title}">
        `;
        film.appendChild(movieDiv);
    });
}