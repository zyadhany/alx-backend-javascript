export default function cleanSet(st, startString) {
  const res = [];

  for (const elem of st.values()) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      const valueSubStr = elem.substring(startString.length);

      if (valueSubStr && valueSubStr !== elem) {
        res.push(valueSubStr);
      }
    }
  }

  return res.join('-');
}
