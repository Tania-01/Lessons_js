// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squ(a,b) {
    let result=2*(a*b)
    return result
}
r1=squ(15,22)
console.log(r1)

let p=3.14
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circum(a) {
    let result=p*a
    return result
}
r2=circum(23)
console.log(r2)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function f(h,r) {

    let result=2*p*r*(h+r)
    return result
}
r3=f(14,45)
console.log(r3)
// - створити функцію яка приймає масив та виводить кожен його елемент
function printArrayElements(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
const myArray = [1, 2, 3, 4, 5];
printArrayElements(myArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    return document.write(`<p>${text}</p>`)
}
let r4=createParagraph('hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listUL(list) {
    return document.write(`<ul><li>${list}</li><li>${list}</li><li>${list}</li></ul>`)
}
r5=listUL('helo')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListWithItems(itemText, itemCount) {
    document.write('<ul>');

    for (let i = 0; i < itemCount; i++) {
        document.write('<li>' + itemText + '</li>');
    }

    document.write('</ul>');
}

// Приклад використання функції
const text = "Текст елементу списку";
const count = 3;
createListWithItems(text, count);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function printArray(array) {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
       document.write(`<li>${array[i]}</li>`)
    }
    document.write(`<ul>`)
}
const Array = [1, 2, 3, 4,"hello"];
printArray(Array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function printerArry(array) {
    for (const item of array) {
        document.write(`<h6>${item.id}</h6><h4>${item.name}</h4><p>${item.age}</p>`)
    }
}

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},

];
printerArry(users);
// - створити функцію яка повертає найменьше число з масиву
function findMinNumber(array) {

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
const numbers = [8, 3,12,25,7];
const minNumber = findMinNumber(numbers);
console.log("Найменше число:", minNumber);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

const number = [1, 2, 10];
const result = sum(number);
console.log("Сума елементів:", result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {


    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;

}
const originalArray = [11, 22, 33, 44];
const swappedArray = swap(originalArray, 0, 2);
console.log("Масив після обміну:", swappedArray);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate;

    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }

    const exchangedAmount = sumUAH / exchangeRate;
    return exchangedAmount;
}

// Приклад використання функції
const sumUAH = 2000;
const currencyValues = [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }];
const exchangeCurrency = 'USD';
const exchangedAmount = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log("Обмінена сума:", exchangedAmount);
