const movies = [
    {
        _id: 1,
        title: 'Terminator',
        genre: 'Action',
        stock: 6,
        rate: 2.5,
        liked: false
    },
    {
        _id: 2,
        title: 'Die Hard',
        genre: 'Action',
        stock: 5,
        rate: 2.5,
        liked: false
    },
    {
        _id: 3,
        title: 'Get Out',
        genre: 'Thriller',
        stock: 8,
        rate: 3.5,
        liked: false
    },
    {
        _id: 4,
        title: 'Trip to Italy',
        genre: 'Comedy',
        stock: 7,
        rate: 3.5,
        liked: false
    },
    {
        _id: 5,
        title: 'Airplane',
        genre: 'Comedy',
        stock: 7,
        rate: 3.5,
        liked: false
    },
    {
        _id: 6,
        title: 'Joker',
        genre: 'Thriller',
        stock: 8,
        rate: 4.5,
        liked: false
    },
    {
        _id: 7,
        title: 'Upgrade',
        genre: 'Fantasy',
        stock: 7,
        rate: 4.6,
        liked: false
    },
    {
        _id: 8,
        title: 'Retaliation',
        genre: 'Science Fiction',
        stock: 6,
        rate: 3.7,
        liked: false
    },
    {
        _id: 9,
        title: 'Iron man 3',
        genre: 'Fantasy',
        stock: 5,
        rate: 4.5,
        liked: false
    },
    {
        _id: 10,
        title: 'Avangers',
        genre: 'Fantasy',
        stock: 7,
        rate: 4.8,
        liked: false
    },
    {
        _id: 11,
        title: 'MidNight',
        genre: 'Romance',
        stock: 9,
        rate: 3.8,
        liked: false
    },
    {
        _id: 12,
        title: 'Rebecca',
        genre: 'Romance',
        stock: 6.7,
        rate: 3.1,
        liked: false
    },
    {
        _id: 13,
        title: 'The tomorrow war',
        genre: 'Science Fiction',
        stock: 5,
        rate: 4.5,
        liked: false
    },
    {
        _id: 14,
        title: 'Mortal Engines',
        genre: 'Fantasy',
        stock: 5,
        rate: 4,
        liked: false
    },
    {
        _id: 15,
        title: 'Forsage 9',
        genre: 'Action',
        stock: 8.7,
        rate: 5,
        liked: false
    },
    {
        _id: 16,
        title: 'Fifty shades Freed',
        genre: 'Romance',
        stock: 12,
        rate: 2,
        liked: false
    },
    {
        _id: 17,
        title: 'Cindrella',
        genre: 'Family',
        stock: 3,
        rate: 1.7,
        liked: false
    },
    {
        _id: 18,
        title: 'Iron man 2',
        genre: 'Fantasy',
        stock: 4.1,
        rate: 3.5,
        liked: false
    },
    {
        _id: 19,
        title: 'Farrytale about love',
        genre: 'Family',
        stock: 9,
        rate: 2.5,
        liked: false
    },
    {
        _id: 20,
        title: 'Oxygen',
        genre: 'Thriller',
        stock: 7,
        rate: 5,
        liked: false
    }
];
// const sort = { title: 'genre', name: 'id' };
// console.log(movies[5][sort.title]);
// const sorted = movies.sort((a, b) => (
//     ('' + a.title).localeCompare(b.title)
// ));

// console.log(sorted);

export function getMovies() {
    return movies;
}

function findLastId(movies) {
    return movies[movies.length - 1]._id;
}

function allGenres(movies) {
    const genres = [];
    for (let index = 0; index < movies.length; index++) {
        let genre = movies[index].genre;
        let count = 0;
        for (let i = 0; i <= genres.length; i++) {
            if (genre === genres[i]) {
                count++;
            }
        }

        if (count === 0) {
            genres.push(genre);
        }
    }
    return genres;
}

export function getLastId() {
    return findLastId(movies);
}

export function getGenres() {
    return allGenres(movies);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};

    movieInDb.title = movie.title;
    movieInDb.genre = movie.genre;
    movieInDb.stock = movie.stock;
    movieInDb.rate = movie.rate;

    if (!movieInDb._id) {
        movieInDb._id = getLastId() + 1;
        movies.push(movieInDb);
    }

    return movieInDb;
}

export function getMovie(id) {
    return (movies.find(m => m._id == id));
}

// console.log(getMovie(3));





