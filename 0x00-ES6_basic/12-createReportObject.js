export default function createReportObject(employeesList) {
  const report = Object.keys(employeesList).reduce(
    (acc, key) => {
      acc.allEmployees[key] = employeesList[key];
      return acc;
    },
    {
      allEmployees: {},
      getNumberOfDepartments(obj) {
        return Object.keys(obj).length;
      },
    },
  );

  return report;
}
