export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    return Error('Cannot process');
  }
  groceries.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return groceries;
}
