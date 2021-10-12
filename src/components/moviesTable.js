import React from 'react';
import Table from './table';


class MoviesTable extends React.Component {
  columns = [
    { path: '_id', name: 'Id' },
    { path: 'title', name: 'Title' },
    { path: 'genre', name: 'Genre' },
    { path: 'stock', name: 'Stock' },
    { path: 'rate', name: 'Rate' }
  ]
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <Table
        movies={movies}
        onLike={onLike}
        onDelete={onDelete}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;