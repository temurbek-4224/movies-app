import React from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';

const TableBody = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <tbody>
      {
        movies.map((movie, index) => (
          <tr key={index}>
            <th scope='row'>{movie._id}</th>
            <td>
              <Link
                to={{
                  pathname: `/movies/${movie._id}`,
                  aboutProps: {
                    id: movie._id,
                    title: movie.title,
                    genre: movie.genre,
                    stock: movie.stock,
                    rate: movie.rate
                  }
                }}
              >
                {movie.title}
              </Link>
            </td>
            <td>{movie.genre}</td>
            <td>{movie.stock}</td>
            <td>{movie.rate}</td>
            <td>
              <Like
                liked={movie.liked}
                onClick={() => onLike(movie)}
              />
            </td>
            <td><button className='btn btn-danger btn-sm' onClick={() => onDelete(movie._id)}>Delete</button></td>
          </tr>
        ))
      }
    </tbody>
  );
}

export default TableBody;