// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let usersArray = [];


for (let i = 1; i <= 10; i++) {
    let newUser = new User(i, "Ім'я" + i, "Прізвище" + i, "email" + i + "@example.com", "телефон" + i);
    usersArray.push(newUser);
}


console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let filterUser=usersArray.filter(user=>user.id % 2===0)
console.log(filterUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sortUsers=usersArray.sort((a,b)=>a.id-b.id)
console.log(sortUsers)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Клас Client
// Клас Client
class Client {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [];
    }


    addOrder(item) {
        this.order.push(item);
    }
}

const clientsArray = [];


for (let i = 1; i <= 10; i++) {
    const client = new Client(i, "Ім'я" + i, "Прізвище" + i, "email" + i + "@example.com", "телефон" + i);
    for (let j = 1; j <= i; j++) {
        client.addOrder("товар" + j);
    }
    clientsArray.push(client);
}

// Виведемо результат в консоль
console.log(clientsArray);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// зробила в зворотньому порядку
let sortClient=clientsArray.sort((a,b)=>b.order.length-a.order.length)
console.log(sortClient)

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = 'Stefan';


    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };


    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };


    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };


    this.changeYear = function (newValue) {
        this.year = newValue;
    };


    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

const myCar = new Car('Sedan', 'Toyota', 2022, 200, 2.0);
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2023);
myCar.addDriver({ name: 'John', age: 30 });
myCar.info();
console.log(myCar)
//


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

class Cars {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null; // По замовчуванню водій не встановлений
    }


    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }


    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }


    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }


    changeYear(newValue) {
        this.year = newValue;
    }


    addDriver(driver) {
        this.driver = driver;
    }
}


const myCars = new Cars('Sedan', 'Toyota', 2022, 200, 2.0);
myCars.info();
myCars.drive();
myCars.increaseMaxSpeed(20);
myCars.changeYear(2023);
myCars.addDriver({ name: 'John', age: 30 });
console.log(myCars)


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}


const cinderellas = [
    new Cinderella("Попелюшка1", 20, 35),
    new Cinderella("Попелюшка2", 22, 36),
    new Cinderella("Попелюшка3", 25, 37),
    new Cinderella("Попелюшка4", 23, 38),
    new Cinderella("Попелюшка5", 24, 39),
    new Cinderella("Попелюшка6", 21, 35),
    new Cinderella("Попелюшка7", 27, 37),
    new Cinderella("Попелюшка8", 22, 38),
    new Cinderella("Попелюшка9", 26, 40),
    new Cinderella("Попелюшка10", 20, 39),
];


class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }


    findCinderella(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.shoeSize === this.foundShoeSize) {
                return cinderella;
            }
        }
        return null;
    }
}

const prince = new Prince("Принц", 25, 37);


const chosenCinderella = prince.findCinderella(cinderellas);


if (chosenCinderella) {
    console.log(`Принц ${prince.name} знайшов свою Попелюшку ${chosenCinderella.name}`);
} else {
    console.log("Принц не знайшов свою Попелюшку");
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const foundCinderella = cinderellas.find(cinderella => cinderella.shoeSize === prince.foundShoeSize);

if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов свою Попелюшку ${foundCinderella.name}`);
} else {
    console.log("Принц не знайшов свою Попелюшку");
}
