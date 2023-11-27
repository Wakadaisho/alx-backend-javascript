export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flatMap((v) => v);
}
