export function sortMovies(filtered, sortColumn) {
  const sorted = filtered.sort((a, b) => {
    if (sortColumn.order === 'asc') {
      if (typeof (a[sortColumn.path]) === 'string')
        return ('' + a[sortColumn.path]).localeCompare(b[sortColumn.path])

      return a[sortColumn.path] - b[sortColumn.path]
    } else {
      if (typeof (a[sortColumn.path]) === 'string')
        return ('' + b[sortColumn.path]).localeCompare(a[sortColumn.path])

      return b[sortColumn.path] - a[sortColumn.path]
    }
  });

  return sorted;
}