export default function getListStudentsByLocation(array, city) {
  const result = array.filter((student) => student.location === city);
  return result;
}
