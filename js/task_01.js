'use strict' 

// массив, который содержит все значения
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

// массив значений, которые необходимо удалить
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

// сделать набор для хранения значений из failedStudents
const namesToDeleteSet = new Set(failedStudents);

// использовать метод filter()
// фильтровать только те элементы
// которые не нужно удалять из массива
const newArr = allStudents.filter((name) => {
  // вернуть те элементы, которых нет в nameToDeleteSet
  return !namesToDeleteSet.has(name);
});

console.log(newArr); // ["Lily", "Jessica"]

