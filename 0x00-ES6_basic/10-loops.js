export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    // eslint-disable-next-line
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
