export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return []; // Return an empty array if arr is not an array
  }

  const arrIds = arr.map((student) => student.id);
  return arrIds;
}
