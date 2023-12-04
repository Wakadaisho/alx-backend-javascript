export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const ab = new ArrayBuffer(length);
  const dv = new DataView(ab);
  dv.setInt8(position, value);
  return dv;
}
