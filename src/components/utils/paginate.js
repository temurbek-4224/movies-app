export function paginate(currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const arr = new Array(startIndex, endIndex);

  return arr;
}