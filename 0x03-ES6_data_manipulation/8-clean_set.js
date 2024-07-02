export default function cleanSet(set, startString) {
  const resultArray = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const substr = element.substring(startString.length);
      resultArray.push(substr);
    }
  });
  return resultArray.join('-');
}
