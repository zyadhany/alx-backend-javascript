export default function updateUniqueItems(mp) {
  if (!(mp instanceof Map)) {
    throw new Error('Cannot process');
  }

  mp.forEach((val, key) => {
    if (val === 1) {
      mp.set(key, 100);
    }
  });
}
