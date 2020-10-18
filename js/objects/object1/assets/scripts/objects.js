// const person = {
//     name: "bob",
//     age: 22,
//     hobbies: ["reading", "movies"],
//     greeting: function () {
//         alert("hi");
//     }
// }

// // person.greeting();

// delete person.age;
// person.isAdmin = true;
// console.log(person["name"]);
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];
const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");
    if (movieList.length === 0) {
        movieList.classList.remove("visible");
        return;
    } else {
        movieList.classList.add("visible");
    }
    movieList.innerHTML = "";
    const filterMovie = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
    filterMovie.forEach((movie) => {
        const movieEl = document.createElement("li");
        const { info } = movie;
        // const {getFormattedTitle}=movie;
        let text = movie.getFormattedTitle() + "-";
        for (key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl)
    })
}
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;
    if (extraName.trim() === "" || extraValue.trim() === "") {
        return
    }
    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    movies.push(newMovie);
    console.log("--", movies);
    renderMovies();
}
const movieSearchHandler = () => {
    const filterTitle = document.getElementById("filter-title").value;
    console.log(filterTitle);
    renderMovies(filterTitle);
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", movieSearchHandler);