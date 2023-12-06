/// <reference path="subjects/Subject.ts"/>
/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/Java.ts"/>
/// <reference path="subjects/React.ts"/>

const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

const teacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 }

cpp.setTeacher = teacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher = teacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher = teacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

exports = { cpp, java, react, teacher }