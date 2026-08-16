
//Создал объект на основе моих данных.

const person = {
    firstName: "Ulan",
    lastName: "Mendegulov",
    age: 41,
    country: "Кыргызстан",
    city: "Бишкек",
    job: "Frontend Developer",
    email: "mendegulov@mail.ru"
};
console.log(person);

//Создал объект, который будет хранить данные об автомобиле.
//  Добавил дополнительное свойство - owner (person).

const car = {
    brand: "lexus",
    model: "Rx330",
    year: 2003,
    color: "gold",
    transmission: "AT",
    maxSpeed: 240,
};
car.owner = person;
console.log(car);

//Написал функцию которая аргументом будет принимать объект, описанный в пункте №4.

function carMaxSpeed(car) {
    if ('maxSpeed' in car) {
        return;
    } else {
        car.maxSpeed = 240;
    }
}
carMaxSpeed(car)

//Написал функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showPropertyValue(obj, property) {
    console.log(obj[property]);
}
showPropertyValue(car, 'brand');



//Создал массив, который содержит названия продуктов.

const products = ["Молоко", "Хлеб", "Яйца", "Сыр", "Масло"];

//Создал массив, состоящий из объектов


const movies = [
{
    title: "Lord of the Rings",
    director: "Peter Jackson",
    year: 2001
},

{
    title: "Harry Potter",
    director: "Chris Columbus",
    year: 2001
},
{
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999
}
]

movies.push({
title: "Gladiator",
director: "Ridley Scott",
year: 2000
})

console.log(movies);


// С помощью spread оператора объединил эти два массива в один

const movies2 = [
    {
    title: "The Terminator",
    director: "James Cameron",
    year: 1984
},

    {
    title: "Terminator 2: Judgment Day",
    director: "James Cameron",
    year: 1991
}
]
console.log(movies2);

const allMovies = [...movies, ...movies2];
console.log(allMovies);

//  устанавливил true (да, это редкий), нет - false (значит это не редкий)

const updatedMovies = allMovies.map(movie => {
    if (movie.year < 2000) {
        movie.isRare = true;
    } else {
        movie.isRare = false;
    }
    return movie;
});
console.log(updatedMovies);