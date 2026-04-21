let user = {
    name: "Alex",
    age: 18
}
console.log(user.name);


let user2 = [
    "Alex",
    18
]
console.log(user2[0]);


// МАССИВЫ
let users = []

let users2 = new Array()


let fruits = ["Яблоко", "Апельсин", "Банан"]

fruits[1] = 'груша'
fruits[5] = 'киви'
console.log(fruits);


console.log(fruits.length); // длина массива



let abc = [1, "abc", true, [], {}, Symbol(), 44444n, function a(){}]
console.log(abc);


// МЕТОДЫ pop/push, shift/unshift

let fruits2 = ["Яблоко", "Апельсин", "Банан"]
// pop() удаляет последний элемент (с конца)
console.log(fruits2.pop()); // удаляет последний элемент (с конца)

console.log(fruits2)

// push() добавляет последний элемент (с конца массива)
let fruits3 = ["Яблоко", "Апельсин", "Банан"]
fruits3.push("киви")
console.log(fruits3)


// shift() - удаляет первый элемент массива
let fruits4 = ["Яблоко", "Апельсин", "Банан"]
fruits4.shift()
console.log(fruits4)


// unshift() - добавляет первый элемент массива
let fruits5 = ["Яблоко", "Апельсин", "Банан"]
fruits5.unshift("киви")
console.log(fruits5)


console.log([] == []); // false, потому что ссылки разные 




////  МНОГОМЕРНЫЕ МАССИВЫ

let array = [
    [1,2,3,["abc", true, 55, [6,4,3,2]]],
    [33,2,1],
    [[44,55,66],1,"abc"]
]

console.log(array[2][0][2]);


// length - длин массива (тюею кол-во элементов массива )

let cars = ["Mercedes", "BMW", "AUDI"]
console.log(cars.length);


// toString - преобразование в строку 
let cars2 = ["Mercedes", "BMW", "AUDI"]
console.log(cars2.toString());

console.log(cars2.toString());
