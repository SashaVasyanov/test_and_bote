 
// let favoriteNum = prompt('Твоё любимое число', );
// alert(`Твоё любимое число ${favoriteNum}`)

// 

// const { sum } = require("lodash");

// let chmaOrNot = confirm('Ты чма?')
// alert(chmaOrNot)

// let str = '5, 9, 2, 1'
// console.log(typeof str)
// let num = Number(str)
// console.log(typeof num)

// let s = false
// console.log(typeof s)

// let s1 = Number(s)
// console.log(s1)

// console.log(16 **(1/2))
// console.log(16 **(1/3))
// console.log(49 **(1/2))
// console.log(81 **(1/2))
// console.log(512 **(1/3))
// let c = Math.sqrt(823)
// let z = Math.cbrt(512)
// console.log(c)
// console.log(z)

// let count = 0
// if (count = 5) count++
// console.log(count)

// let a = '5' > '12'
// console.log(a)

// let year = prompt('Вы анимешник?', '');

// if (year == 'да') {
//     alert( 'Вы чма' );
// }
// else {
//     alert('Вы не чма');
// }

// let accessAllowed;
// let age = prompt('Вы любите аниме?', '');

// if (age == 'да') {
//   accessAllowed = 'молодец';
// } else if (age == 'нет') {
//   accessAllowed = 'лох и дурак';
// } else {
//   accessAllowed = 'ну решай давай'
// }

// alert(accessAllowed);

// let company = prompt('Кто ты по жизни?', '');

// (company == 'шлёпа гигачад') ?
//    alert('красава!') : alert('лох');

// let nameJs = prompt('Название Js?', '');
// if (nameJs == 'javascript') {
//     alert('ебать ты прав')
// } else {
//     alert('ну лох')
// }

// let inNum = prompt('Введите число от 0 до 1', '');
// if (inNum > 0) {
//     alert(1)
// } else if(inNum < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }
// let a = +prompt()
// let b = +prompt()
// let result = alert(a + b)
// (result < 4) ?
// alert('мало') : alert('много')
// // if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let time = 10;
// let weekEnd = false
// let week = true
// if (time > 12 || time < 9 || weekEnd ) {
//     alert('магазин закрыт')
// } else if (time === 10 && week) {
//     alert('ну заходи ёпта')
// }

// let age = +prompt('')
// if (age >= 14 && age <= 90) {
//     alert('правильно')
// } else {
//     alert('васян')
// }

// let age = +prompt('')
// if (!(age >= 14) && age > 90) {
//     alert('правильно')
// } else {
//     alert('васян')
// }

// let par = prompt('Пароль', '')
// if (par === 'Я главный') {
//     alert('Здравствуйте')
// }  else if (par == '' || par == null) {
//     alert( 'Отменено' );
//    }   else {
//     alert('Неверный пароль')
// }

// let a = null
// let b = 100 * null;
// console.log(b)

// let i = 14
// while (i <= 88) {
//     alert(i);
//     i++
// }

// let i = 5
// while (i > 0) {
//     alert(i)
//     i--
// }

// let i = 9
// do {
//     alert(i)
//     i++
// } while(i < 10)

// for (let i = 12; i > 3; i--) {
//     alert(i)
// }
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value || value > 50) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 8; i <= 64; i++) {
//     if (i % 3 == 2) continue;
//     alert(i);
//   }
// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//       let input = prompt(`Значение на координатах (${i},${j})`, '');

//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)

//       // сделать что-нибудь со значениями...
//     }
//   }

//   alert('Готово!');

// let i = 1;
// while (i++ < 5) alert( i );

// for(let i = 2; i < 10; i++ ){
//     if(i % 2 == 1) continue
//     alert(i)
// }
// let i = 0
// while(i < 3) {
//     alert(`Number ${i}!`)
//     i++
// }

// let i
// do {
//     i = prompt('Введите число больше 100', 0)
// } while (i <= 100 && i) {
//     alert('красава')
// }
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...
//     // console.log('i',i)
//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//     // console.log('j', j)
//   }

//    alert( i ); // простое число
// }

// let n = 10

// cycle: for (; (n >= 2); n--) {

// for (let i = 2; i < n; i++) {
//     console.log('n', n, 'i', i, 'sadsa', n % i)
// if (n % i == 0) continue cycle;
// }

// console.log(n);
// }

// let arg = prompt("Введите число?");
// switch (arg) {
//   case '10':
//   case '11':
//     alert( 'Десять или одинадцать' );
//     break;

//   case '222':
//     alert( 'Двести двадцать два' );
//     break;

//   case 3:
//     alert( 'Никогда не выполнится!' );
//     break;
//   default:
//     alert( 'Неизвестное значение' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
// case 0:
// alert('Вы ввели число 0')
// break;
// case 1:
//     alert('Вы ввели число 1')
//     break;
//     case 2:
//         alert('Вы ввели число 2')
//     break;
//     case 3:
//         alert('Вы ввели число 3')
//     break;
//     }

// let a = 'Egor'
// function zxc() {
//     let z = 'Privet ' + a
//     alert(z)
// }
// zxc()

// function sum(a, b) {
//     return a + b;
//   }

//   let result = sum(5, 14);
//   alert( result )

//   function multiplication(a, b) {
//       return a * b
//   }
//   let mult = multiplication(24, 12)
//   alert(mult)

// function chekAn(an) {
//     if (an === 'Люблю') {
//         return true
//     }
//     else if (an === 'Да') {
//         return true
//     }
//     else {
//         return confirm('А чё те нравится тогда')
//     }
// }
// let an = prompt('Любишь аниме?', 'Да')
// if (chekAn(an)) {
//     alert('Тупа топ')
// } else {
//     alert('lox')
// }

// let n = 21
// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;

//       alert(i);  // простое
//     }
//   }

//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }
//   showPrimes(n)

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   function check(age1){
//       return (age1 > 18) || confirm('Разрешение родителей есть?')
//   }
//   check(age1)
// function plus(a, b) {
//     if (a > b) {
//         return b,
//         alert(b)
//     }
//  else if (a < b) {
//     return a,
//     alert(a)
// }
// }
// plus(99,213)

// function pow(x,n) {
//   return(x ** n)
// }
// alert(pow(5,5))

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function accept() {
//     alert('Принято');
// }
// function noAccept() {
//     alert('Отклонено');
// }
// ask('Вы согласны', accept, noAccept)

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Привет, ты тут?",
//     function() { alert("Он дома"); },
//     function() { alert("Его тут нет") }
//   );

// let a = prompt ('Какой сегодня день?', '')
// let day
// if (a === 'среда' && 'понедельник' && 'вторник') {
//     day = function() {
//         alert('Отличное начало недели!')
//     }
// } else  if (a === 'пятница' && 'суббота' && 'четверг') {
//     day = function() {
//         alert('Отличный конец недели')
//     }
// } else {
//     alert('ошибка')
// }

// day()

// let ask = (question, yes, no) => {
//     (confirm(question)) ?
//     yes = alert('Вы согласны') :
//     no = alert('Вы отказались');
// }

// ask('Вы согласны?')

// let mult = 2 ** 3;
// switch (mult) {
//   case 4:
//     alert("Вы ввели 2");
//     break;
//   case 27:
//     alert("Вы ввели 3");
//     break;
//   default:
//     alert("Ошибка");
// }
// mult();

// function pow(x, n) {
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//         console.log('это резул', result)
//       result *= x;
//     }
  
//     return result;
//   }

//  console.log(pow(3,6))

// let user2 = {
//   name: 'Alex',
//   age: 15,
//   likeBirds: true,
  
// };

// for(let key in user2) {
//   alert(key);
//   alert(user2[key])
// }
// let key = prompt('Узнать о пользователе:', 'name')
// alert(user[key])

// function makeUser(name, age, phone) {
//   return{
//     name: name,
//     age: age,
//     phone: phone,
// } }
// let user = makeUser('Sasha', 25, 'apple');
// alert(user.age)
// alert(user.name)
// alert(user.phone)
// alert('dota' in makeUser)



// let user = {};
// user.name = 'Pete';
// user.surname = 'Smith';
// user.name = 'Vasya';
// delete user.name;


//  let obj = {
//   //  firstKey: 1212,
//   //  secondKey:'Ded',
//  } 
// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
   
//     return false;
    
//   }  
//   return true;
  
// }
// console.log(isEmpty(obj))
// isEmpty()

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0
// for (let key in salaries) {
//   sum += salaries[key]
// }
// console.log(sum)

// let menu = {
//   name: 200,
//   age: 300,
//   title: "My menu"
// }
// function m(obj) { 
//   for (let prop in obj) {
//     console.log(prop)
//     if (typeof obj[prop] === 'number') {
//     obj[prop] *= 2;
//     }
//   } 
// }
// m(menu)
// console.log(menu)
// let menu2 = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu2)
// console.log(menu2)

// ANCHOR МЕТОД копирования объекта в отдельную переменную 

// let users = {
//   name: 'Egor', 
//   age: 15,
//   city: 'Moscow',
//   favoriteDish: 'chips',
// }
// let cloneUsers = {};

// for(let key in users) {
//   cloneUsers[key] = users[key];
// }
// console.log(cloneUsers)

// ANCHOR МЕТОД Object.assign 

// let a = {day: 'friday'};
// let b = {week: 'five'};
// let e = {weekend: 'not'}

// let z = Object.assign(a, b, e)
// console.log(z)

// let jmuser = {
//   name: 'Serg',
//   age: 214,
//   isFool: true,
// }

// let cloneSrg = ({}, jmuser)
// console.log (cloneSrg) 

// ANCHOR ГЛУБОКОЕ КОПИРОВАНИЕ, МЕТОД _.cloneDeep(object)
// var _ = require('lodash')
// let object1 = {
//   name: 'Vasya',
//   size: {
//   width: 150,
//   height: 250, 
//   }
// }

// let object2 = _.cloneDeep(object1)
// console.log(object2)



//ANCHOR МЕТОД ОБЪЕКТА THIS
// let vasya = {
//   name: 'Vasya',
//   age: 27,
//   sex: 'male',
//   isCostumer: true,

//   sayHello() {
//     alert(this.name)
//   }
// }
// vasya.sayHello()

// let vadimus = {name: 'Amogus'}
// let amogus = {name: 'Vadimus'}

// function sayAmogus() {
//   alert(this.name)
// }

// vadimus.f = sayAmogus;
// amogus.f = sayAmogus;

// vadimus.f();
// amogus.f();

//ANCHOR КАЛЬКУЛЯТОР
// let calculator = { 
//   firstNumber: 0,
//   secondNumber: 0,
//   read() {
//   this.firstNumber = +prompt('Введите число', '')
//   this.secondNumber = +prompt('Введите второе число', '')
//   },
//   sum() {
//     return (this.firstNumber + this.secondNumber)
//   },
//   mul() {
//     return (this.firstNumber * this.secondNumber)
//   }
// };

// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())


// let ladder = {
//   step: 0,
//   up() {
//    this.step++;
//    return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// console.log(ladder)

// console.log(ladder.up().up().down())

//ANCHOR ФУНКЦИЯ КОНСТРУКТОР,THIS и return в ней

// function SmallUser() {

//   this.name = "Вася";

//   return; // <-- возвращает this
// }
// let smale = new SmallUser()




// function Accamulator(startingValue) {
// this.value = startingValue;
// this.read = function() {
//   this.value += +prompt('Добавьте число', 0);
// };
// }

// let accum = new Accamulator(1)
// accum.read()
// accum.read()
// alert(accum.value)

//ANCHOR МЕТОД ?. - ОПЦИОНАЛЬНАЯ ЦЕПОЧКА

// let bro = {
//   name: 'Dva',
//   age: 3,
//   address: 'Pushkina',
// }
// let key = 'name';
// let key2 = 'age';
// let key3 = 'address';

//   alert(bro?.[key])
//   alert(bro?.[key2])

//ANCHOR SYMBOL

// let a = Symbol('id')
// alert(a.toString())
// alert(a.description)

// let id = Symbol('id')
// let user = {
//   name: 'dva',
//   [id]: 54,
// }
// alert('Вот это да ' + user[id])

//ANCHOR ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ В ПРИМИТИВЫ 
// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// // демонстрация результатов преобразований:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500


////////////////
// let sum = 0.2 + 0.4
// console.log(+sum.toFixed(1))

// let z = +prompt('Введите число', 5)
// let z1 = +prompt('Число', 2 )

// let sum = z + z1

// alert(sum)
// let a1 = function() {
//  if(z === Number)
//  return (z + z1)
// }

// alert(a1)
// console.log(a1)
// function readNumber() {
//   let num

//   do {
//     num = prompt('Введите число', 0)
//   } while (!isFinite(num));
//   if(num === null || num === '') return null
//   return +num;
// }
// alert(`Число: ${readNumber()}`)


// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert( random(4, 123) );
// alert( random(1, 5) );
// alert( random(1, 5) );


// function randomInteger(min, max) {
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max - min);
//   return Math.floor(rand);
// }

// alert( randomInteger(2, 15) );


///ANCHOR STRING И МЕТОДЫ СТРОКИ

// let str = 'доппельгангер'
// console.log(str.slice(-6, -2))


// function uPper(str) {
//   if (!str) return str;
  
//   return str[0].toUpperCase() + str.slice(1);

// }
// console.log(uPper('вася'))

// function spam(str1) {
//   if (str === 'viagra' || 'xxx' || 'Viagra' || 'XXX')
//   return false
//   else true
// }
// console.log(spam('Viagra xxx'))



// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// function truncate(str2, maxlength) {
//   return (str2.length > maxlength) ?
//     str2.slice(0, maxlength - 1) + '…' : str2;
// }
// let a = 'lorem impesad sadsad sdfdfsde sadsad etgkkg sad sadsad vvfdrtght sadwqdqd cdcacsasedwqeqgsdgsdgdwqdqwdsad'
// console.log(a.length)
// console.log(truncate(a, 24))


//ANCHOR МАССИВЫ 
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// alert( matrix[1][1] ); // 5, центральный элемент

// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

    
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum +=  number;
//     console.log(number)
//   }
//   return sum;
// }

// alert(sumInput());



// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // для каждого элемента массива
//     partialSum += item; // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }

//   return maxSum;
// }
// console.log(getMaxSubSum([1,2,4,7,2,-24,52,215,5,-123]))

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"},
//   {id: 4, name: "Егор"},
//   {id: 5, name: "Паша"},
// ];

// let user = users.find(item => item.id == 5);

// console.log(user.name); // Вася


// let obj = [
//   {num: 1, gold: 'yes', numerus: 'many'},
//   {num: 2, gold: 'no', numerus: 1234},
// ]


// let ob = obj.find(item => item.num === 2)
// console.log(ob.numerus)

// function camelize(str) {
//   return str 
//   .split('-')
//   .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//   // //? - if (index == 0) {
//   //   return word (если индекс равен нулю возвращает всё слово)
//   // // } else {
//   //   return word[0].toUpperCase() + word.slice(1) (если индекс не равен нулю, то возвращает слово, где первая буква становится
//   // заглавной )
//   // }
//   .join('')
// }
// console.log(camelize('i-live-in-the-dream'))
// function filterRange(arr, a, b){
// return arr.filter(item => item >= a && item <= b)
// }
// let arr1 = [2,4,1,3,5,8]
// let newArr = filterRange(arr1, 2, 4)
// console.log(newArr)


// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // удалить, если за пределами интервала
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
                                              
// }

// let arr = [5, 3, 8, 1, 0, 2, 4];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log( arr );

// function rze(arr, a, b) {
//   for (let i = 0; i < arr.length; i++){
//   let value = arr[i]
//   if (value < a || value > b) {
//     arr.splice(i, 1);
//     i--
//   }
// }
// }
// let arr2 = [1, 41, 12, 56, 10, 51, 2, 4, 3, 6, 4]
// rze(arr2, 2, 100)
// console.log(arr2)


// let arr3 = [5, 2, 1, -10, 8];
// //Для первой a 
// // 5 - 2 = 1; 2 - 1 = 1; 1 -(-10) = 1; -10 - 8 = 1
// //
// // Для первой b 
// // 2 - 5 = -1; 1 - 2= -1; -10 - 1= -1; 8 - (-10) = 1

// arr3.sort((a, b) => a - b);  

// console.log( arr3 );


// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr4 = ["HTML", "JavaScript", "CSS", "Misha_chmo_and_gay"];

// let sorted = copySorted(arr4);

// console.log( sorted );
// // console.log( arr4 );


// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// powerCalc.addMethod("&&", (a, b) => a * 2 * b + 1)
// let result = powerCalc.calculate("2 ** 3");
// let res = powerCalc.calculate('2 && 4')
// console.log(res)
// console.log( result ); // 8

// let vasya = { name: "Вася", surname: "Пупкин", id: 2 };
// let petya = { name: "Петя", surname: "Иванов", id: 14 };
// let masha = { name: "Маша", surname: "Петрова", id: 1 };

// let users = [ vasya, petya, masha ];

// let usersMapped = function(arr) {
// arr.sort((a, b) => a.id - b.id)
// }
// let usersMapped1 = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log(usersMapped1)

// usersMapped(users)
// console.log(users[0].name)
// console.log(users[1].name)
// console.log(users[2].name)

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// shuffle(arr);
// console.log(arr);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// function getAverAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length
// }
// console.log(getAverAge(arr))

// function unique(arr) {
//   let cmult = [];

//   for (let grt of arr) {
//     if (!cmult.includes(grt)) {
//       cmult.push(grt);
//     }
//   }

//   return cmult;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O", ":-O", "Baza", "baza", "Baza", "baza"
// ];

// console.log(unique(strings))


// ANCHOR МЕТОДЫ map, set 

// function unique(arr){
//   return Array.from(new Set(arr))
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(values))



// function aclean(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }

//   return Object.values(obj);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );

// let map = new Map();

// map.set("name","John");
// map.set("son", "His")
// console.log(map)
// let keys = Array.from(map.keys());
// let values = Array.from(map.values())
// values.push("12")
// console.log(keys)
// keys.push("age");
// console.log(values)
// // console.log(keys)


//ANCHOR Методы Object.keys(obj), Object.values(obj), Object.entries(obj)

let user = {
  name: "John",
  age: 15,
  sex: 'male',
}
for (let key of Object.keys(user)) {
  console.log(key)
}
for (let entrie of Object.entries(user)) {
  console.log(entrie)
}
for (let value of Object.values(user)) {
  console.log(value)
}

let sales = {
  auto: 12,
  bus: 10,
  airplane: 11,
}
let doubleSales = Object.fromEntries(
  Object.entries(sales).map(([key, value]) => [key, value * 2])
)
console.log(doubleSales.auto)
console.log(doubleSales)


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalar() {
 let sum = 0
 for (let salary of Object.values(salaries)) {
   sum += salary
 }
 return sum
}
console.log(sumSalar(salaries))

function count(obj) {
  return Object.keys(obj).length
}
console.log(count(user))