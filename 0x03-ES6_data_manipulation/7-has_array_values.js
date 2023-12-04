export default function hasValuesFromArray(set, array) {
  return array.every((v) => set.has(v));
}
