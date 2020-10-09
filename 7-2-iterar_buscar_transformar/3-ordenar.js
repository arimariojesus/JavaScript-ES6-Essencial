/*
sort
- Ordena os elementos de um array de acordo com a condição 

exempo:
const students = [
    {
        name: 'John',
        grade: 7
    },
    {
        name: 'Jenny',
        grade: 5
    },
    {
        name: 'Peter',
        grade: 4
    }
];

students.sort((current, next) => current.grade - next.grade);
    (3)[{...}, {...}, {...}]
     0:  {name: 'Peter', grade: 4}
     1:  {name: 'Jenny', grade: 5}
     2:  {name: 'John', grade: 7}

students.sort((current, next) => next.grade - current.grade);
    (3)[{...}, {...}, {...}]
    0:  {name: 'John', grade: 7}
    1:  {name: 'Jenny', grade: 5}
    2:  {name: 'Peter', grade: 4} */

const arr = [1, 3, 2, 5, 4];

arr.sort();
//[1, 2, 3, 4, 5]

/*
reverse
- Inverte os elementos de um array */

const arr = [1, 2, 3, 4, 5];

arr.reverse();
// [5, 4, 3, 2, 1]
