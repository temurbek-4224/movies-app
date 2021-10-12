import React from 'react';

const ListGroup = ({ genres, onGenreChange, currentGenre }) => {
  return (
    <ul className="list-group">
      {
        genres.map((genre, index) => (
          <li
            className={`list-group-item d-flex justify-content-between align-items-center ${genre === currentGenre ? 'active' : ''}`}
            key={index}
            onClick={() => onGenreChange(genre)}
          >
            {genre}
            {/* <span class="badge badge-primary badge-pill">{itemsCount}</span> */}
          </li>
        ))
      }
    </ul>
  );
}

export default ListGroup;