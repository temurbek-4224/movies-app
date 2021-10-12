import React, { Component } from 'react';
import { getGenres, getMovies } from '../MoviesBase';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import MoviesTable from './moviesTable';
import { paginate } from './utils/paginate';
import { sortMovies } from './utils/sortMovies';
import { Link } from 'react-router-dom';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortColumn: { path: '_id', order: 'asc', classes: '' },
    currentPage: 1,
    pageSize: 4
  }

  componentDidMount() {
    const genres = ['All Genres', ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (id) => {
    let newArr = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies: newArr })
  }

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  }

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      if (sortColumn.order === 'asc') {
        sortColumn.order = 'desc';
      } else {
        sortColumn.order = 'asc';
      }
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.setState({ sortColumn });
  }

  paginateAllDate = () => {
    const {
      currentPage,
      pageSize,
      genres,
      currentGenre,
      movies: allMovies,
      sortColumn
    } = this.state;

    const filtered =
      currentGenre && currentGenre !== genres[0] ? allMovies.filter(m => m.genre === currentGenre) : allMovies;
    const sorted = sortMovies(filtered, sortColumn);
    const { length: count } = sorted;
    const paginateIndexs = paginate(currentPage, pageSize);
    const movies = sorted.slice(paginateIndexs[0], paginateIndexs[1]);
    const numberOfMovies = sorted.length;

    // ******************Stickers**************//
    let sticker;
    const likedMovies = sorted.filter(movie => movie.liked);
    if (numberOfMovies <= 20 && numberOfMovies >= 6) {
      sticker = '😃';
    } else if (numberOfMovies <= 6 && numberOfMovies >= 3) {
      sticker = '😯';
    } else {
      sticker = '😨';
    }

    return { numberOfMovies, likedLength: likedMovies.length, sticker, count, movies };
  }


  render() {
    const { sortColumn, currentGenre, genres, currentPage, pageSize } = this.state;
    const { numberOfMovies, likedLength, sticker, count, movies } = this.paginateAllDate();

    // Return Part

    return (
      <main className='container'>
        {
          numberOfMovies ?
            <div>
              <h1>There are <span>{numberOfMovies}</span> movies in the DataBase {sticker}</h1>
              <h2>There are <span style={{ color: 'red', fontWeight: 'bold' }}>{likedLength}</span> liked movies in the DataBase 😉</h2>
              <div className='row' style={{ height: '300px', marginTop: '30px' }}>
                <div className='col-3'>
                  <ListGroup
                    genres={genres}
                    onGenreChange={this.handleGenreChange}
                    currentGenre={currentGenre}
                    itemsCount={count}
                  />
                </div>
                <div className='col'>
                  <Link className='btn btn-primary mb-3' to='/movies/new'>New Movie</Link>
                  <MoviesTable
                    movies={movies}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    sortColumn={sortColumn}
                    onSort={this.handleSort}
                    classes={sortColumn.classes}
                  />
                  <Pagination
                    onPageChange={this.handlePageChange}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    itemsCount={count}
                  />
                </div>
              </div>
            </div> : <h1>There are no movies in the DataBase 😩</h1>
        }
      </main>
    );
  }
}

export default Movies;