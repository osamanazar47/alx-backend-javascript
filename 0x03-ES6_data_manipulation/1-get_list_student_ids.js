let arr = [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
];
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return []; // Return an empty array if arr is not an array
  }

  const arrIds = arr.map(student => student.id);
  return arrIds;
}
