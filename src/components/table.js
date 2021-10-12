import React from "react";
import TableHead from "./common/tableHead";
import TableBody from "./common/tableBody";

const Table = ({ columns, onSort, sortColumn, movies, onLike, onDelete }) => {
  return (
    <table className='table table-hover table-dark'>
      <TableHead
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
      <TableBody
        movies={movies}
        onLike={onLike}
        onDelete={onDelete}
      />
    </table>
  )
}

export default Table;