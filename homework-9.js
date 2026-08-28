
// 1.Создал массив чисел от 1 до 10. Отфильтровл его таким образом, что бы мы получили массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newCutNumbers = numbers.slice (4, 10);
console.log(newCutNumbers);


//3.Создал массив строк, мебели и проверил, есть ли в массиве какая-то определенная сущность.

const furniture = ['chair', 'table', 'sofa', 'bed'];
const hasTable = furniture.includes('table');
console.log(hasTable);


//4.Написал функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") .
//Два вышеуказанных массива с помощью этой функции перевернул.


function reverseNumbers (numbers) {
  return [...numbers].reverse ()
}
console.log(reverseNumbers(numbers));

function furnituresReverse (furniture){
  return [...furniture].reverse ()
}
console.log(furnituresReverse(furniture));

//5.Добавил файл comments.js, в нём создал константу и в него поместил первые 10 объектов массива из ссылки.

//6.Сделал константу экспортируемой.

import { comments } from './comments.js';


//7.Вывел в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const comEnd = comments.filter(comment => comment.email.includes('.com'));
console.log(comEnd);

//8.Перебрал массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const sortedComments = comments.map(comment => {
    if (comment.id <= 5) {
        return { ...comment, postId: 2 };
    } else {
        return { ...comment, postId: 1 };
    }
});
console.log(sortedComments);


//9.Перебрал массив, что бы объекты состояли только из айди и имени

const idName = comments.map(comment => {
    return { id: comment.id, name: comment.name };
});
console.log(idName);

//10.Перебрал массив, добавил объектам свойство isInvalid
// если длина тела сообщения (body) больше 180 символов - true, меньше - false.

const commentsCount = comments.map(comment => {
    if (comment.body.length > 180) {
        return { ...comment, isInvalid: true };
    } else {
        return { ...comment, isInvalid: false };
    }
});
console.log(commentsCount);


//11.Почитал про метод массива reduce. Используя его, вывел массив почт и провернул тоже самое с помощью метода map



const emailsReduce = comments.reduce((accumulator, comment) => {
    accumulator.push(comment.email);
    return accumulator;
}, []);

console.log("Почты через reduce:");
console.log(emailsReduce);

const emailsMap = comments.map(comment => comment.email);

console.log("Почты через map:");
console.log(emailsMap);


//12.Почитал про методы toString(), join() и перебрав массив с задания №11, привел его к строке.


const emailsString = emailsMap.join(', ');
console.log("Почты через join:");
console.log(emailsString);

const emailsToString = emailsMap.toString();
console.log("Почты через toString:");
console.log(emailsToString);

