// let favoriteNum = prompt('Твоё любимое число', );
// alert(`Твоё любимое число ${favoriteNum}`)

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
