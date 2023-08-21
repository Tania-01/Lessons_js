// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr=['apple','cherry','qwerty','one','two','day']
console.log(arr)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let firstBook= {
    pageCount : 120,
    title :'Harry Potter',
    genre :'adventure'
}
let secondBook= {
    pageCount :120,
    title: 'war and peace',
    genre :'adventure'
}
  let  thirdBook=[
        pageCount=[120],
        title=[''],
        genre=['adventure']
    ]

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let first= {
    pageCount: 120,
    title: 'Harry Potter',
    genre: 'adventure',
    author: {
        name: 'Joan',
        age: 67
    }
}
let second={
    pageCount: 120,
    title:'war and peace',
    genre:'adventure' ,
    author: {
        name:'Stepan',
        age:23
        }

}
let  third={
    pageCount: 120,
        title:'JavaScript for child',
        genre:'scince' ,
        author: {
        name:'Stepan',
            age:45
    }}

    console.log(second.author)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user= [
     {
        name:'Alex',
        username:'Bob2001',
        password:'qwerty'
    },
     {
        name:'Ali',
        username:'Bob2001',
        password:'zxfgsd'
    },
     {
        name:'Bob',
        username:'Bob2001',
        password:'qwejfjhsdy'
    },
     {
        name:'Stefan',
        username:'Bob2001',
        password:'qweljjhfdrty'
    },
     {
        name:'Kamila',
        username:'Bob2001',
        password:'qwkjfdgerty'
    },
     {
        name:'Anna',
        username:'Bob2001',
        password:'qwejdhfrty'
    },
    {
        name:'John',
        username:'Bob2001',
        password:'qwesjgrty'
    },
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при x, що дорівнює 1, 0, -3
let x=1
 if (x=!0){
     console.log('True')
 }else{
     console.log('False')
 }

 let x1=0
if(x1!=0){
    console.log('true')
}else{
    console.log('false')
}
let x2=-3
let r= x2===0?'false': 'true'
console.log(r)

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=prompt('enter time')
if(time<15){
    console.log("1")
}else if(time >=15 && time<=30){
        console.log("2")
    }else if(time>30 && time<=45 ){
            console.log('3')
        }else if(time>45 && time<=59){
                console.log('4')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=prompt('enter the number of day')

if(day>0&&day<=10){
    console.log("I")
}else if(day>11 && day<=21){
        console.log('II')
    }else if(day>=22 && day<=31){
            console.log('III')
        }else{
    console.log('undefind')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday= prompt('enter the day of week')

switch (weekday) {
    case '1':
        console.log('Monday')
        break
    case '2':
        console.log('Tuesday')
        break
    case '3':
        console.log('Wednesday')
        break
    case '4':
        console.log('Thursday')
        break
    case '5':
        console.log('Friday')
        break
    case '6':
        console.log('Saturday')
        break
    case '7':
        console.log('Sunday')
        break
    default:
        console.log('invalid day of week')
        break
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let d=prompt("enter first number")
let b=prompt("enter second number")

 if(d > b){
     console.log(d)
 }else if(d<b){
         console.log(b)
     }else {
         console.log('Числа рівні')
     }



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
let m = false;
m = m || "default";
console.log(m)

// 2 варіант

let value =" ";

if (value === 0) {
    console.log("Значення є 'falsy' через 0");
} else if (value === ' ') {
    console.log("Значення є 'falsy' через пусту стрічку");
}else if (isNaN(value)) {
    console.log("Значення є 'falsy' через NaN");
}else if (value === null) {
    console.log("Значення є 'falsy' через null");
}else if (value === undefined) {
    console.log("Значення є 'falsy' через undefined");
}else if (value === false) {
    console.log("Значення є 'falsy' через false");
}
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>=5){
    console.log('Super')
}else {
    console.log(coursesAndDurationArray[0].monthDuration)
}
if(coursesAndDurationArray[1].monthDuration>=5){
    console.log('Super')
}else {
    console.log(coursesAndDurationArray[1].monthDuration)
}
if(coursesAndDurationArray[2].monthDuration>=5){
    console.log('Super')
}else {
    console.log(coursesAndDurationArray[2].monthDuration)
}
if(coursesAndDurationArray[3].monthDuration>=5){
    console.log('Super')
}else {
    console.log(coursesAndDurationArray[3].monthDuration)
}
if(coursesAndDurationArray[4].monthDuration>=5){
    console.log('Super')
}else {
    console.log(coursesAndDurationArray[4].monthDuration)
}
if(coursesAndDurationArray[5].monthDuration>=5){
    console.log('Super')
}else {
    console.log(coursesAndDurationArray[5].monthDuration)
}
