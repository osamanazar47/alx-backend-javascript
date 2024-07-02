export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const idsSum = students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
    return idsSum;
  }
  return [];
}
