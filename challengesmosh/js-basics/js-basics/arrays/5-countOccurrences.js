
const numbers = [1, 2, 3, 4]; 





function countOccurrences(array, searchElement) {

  if (!Array.isArray(array)) {
    throw new Error('value is not an array.')
  }

  if (array.length === 0) {
    throw new Error('Please put a valid array value');
  }



  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0)
};

try {
  countOccurrences(null,4)
} catch (e) {
  alert(e.message);
}
