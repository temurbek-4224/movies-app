import React from 'react';
import PropTypes from 'prop-types';

const createArr = (num) => {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
}

function Pagination(props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const numberOfPage = Math.ceil(itemsCount / pageSize);

  if (numberOfPage === 1) return null;

  const pages = createArr(numberOfPage);
  const classes = "page-item";

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {
          pages.map((page, index) => (
            <li className={page === currentPage ? classes + ' active' : classes} key={index}><a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
