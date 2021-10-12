import React from "react";
import { getGenres, saveMovie } from '../MoviesBase';
import Joi from 'joi-browser';
import Form from "../components/common/form";
import { getMovie } from './../MoviesBase';

class MovieForm extends Form {
  state = {
    data: {
      title: '',
      genre: '',
      stock: '',
      rate: ''
    },
    genres: [],
    errors: {}
  }

  schema = {
    _id: Joi.number(),
    title: Joi.string().required().label('Title'),
    genre: Joi.string().required().label('Genre'),
    stock: Joi.number().required().greater(0).less(100).label('Number In Stock'),
    rate: Joi.number().required().greater(0).less(10).label('Daily Rental Rate')
  }

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;

    console.log(movieId);

    if (movieId === 'new') return;

    const movie = getMovie(movieId);
    console.log(movie)

    if (!movie) return this.props.history.replace('/not-found');

    this.setState({ data: this.mapToViewMode(movie) })
  }

  mapToViewMode = (movie) => {
    return ({
      _id: movie._id,
      title: movie.title,
      genre: movie.genre,
      stock: movie.stock,
      rate: movie.rate
    })
  }

  doSubmit() {
    saveMovie(this.state.data);
    console.log('Submitted');

    this.props.history.push('/movies');
  }

  render() {
    return (
      <div className='container'>
        <h1>New Movies Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            {this.renderInput('title', 'Title')}
            {this.renderSelect('genre', 'Genre', this.state.genres)}
            {this.renderInput('stock', 'Number In Stock', 'number')}
            {this.renderInput('rate', 'Daily Rental Rate', 'number')}
            {this.renderButton('Save')}
          </div>
        </form>
      </div>
    );
  }
}

export default MovieForm;