export default function hasValuesFromArray(st, arr) {
  for (const elem of arr) {
    if (!st.has(elem)) return false;
  }
  return true;
}
