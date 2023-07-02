'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (name) => {
  let str = 'Mr ';
  for (let i = 0; i < name.length; i++) {
    str += str + name[i];
  }
}

console.log(addPrefix(names));
