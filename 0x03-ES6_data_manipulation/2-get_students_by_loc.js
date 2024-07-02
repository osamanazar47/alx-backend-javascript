export default function getListStudentsByLocation(array, city) {
  if (!Array.isArray(array)) {
    return []; // Return an empty array if arr is not an array
  }

  const result = array.filter((student) => student.location === city);
  return result;
}
