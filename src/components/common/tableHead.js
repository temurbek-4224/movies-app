import React from 'react';

const TableHead = (props) => {
  const { onSort, columns, sortColumn } = props;
  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') return <i class="fas fa-sort-up"></i>

    return <i class="fas fa-sort-down"></i>
  }
  return (
    <thead>
      <tr>
        {
          columns.map(column => (
            <th key={column.path} onClick={() => onSort(column.path)} scope='col' className='clickable'>
              {column.name}
              {renderSortIcon(column)}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}

export default TableHead;