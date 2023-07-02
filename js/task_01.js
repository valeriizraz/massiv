'use strict' 

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const sortArray = (todos, failed) => {

  const todosSort = todos.sort();
  const failedSort = failed.sort();

  for (let i = 0; i < todosSort.length; i ++) {
    console.log(i);
    for (let y = 0; y < failedSort.length; y++) {
      console.log(y);
    }
  }

  if (todosSort[i] !== failedSort[y]) {
    const newTodos = todosSort.pop();  
  }
}

sortArray(allStudents, failedStudents);

