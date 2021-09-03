// let arrOne = ['x', 'y', 'z']
// arrOne.splice(1,1)
// console.log(arrOne)

// let arrTwo = [
//     ['x', 'z', 'y'],
//     ['a','b', 'n']
// ]
// // console.log(arrTwo)
// console.log(arrTwo[1][2])

// ANCHOR ДОБАВЛЕНИЕ ЭЛЕМЕНТА В КОНЕЦ МАССИВА
// let arrThree = ['q', 'w', 'e']
// arrThree.push('t')
// console.log(arrThree)

// let arrFour = ['u', 'i', 'o']

// ANCHOR УДАЛЕНИЕ ПРЕВОГО ЭЛЕМЕНТА МАССИВА И ПОСТАНОВКА ВТОРОГО НА ЕГО МЕСТО
// arrFour.shift()
// console.log(arrFour)

// ANCHOR УДАЛЕНИЕ ПОСЛЕДНЕГО ЭЛЕМЕНТА 
// let arrFive = ['a', 's', 'f']
// arrFive.pop()
// console.log(arrFive)

// let arrSix = ['h', 'j', 'k']

// ANCHOR ДОБАВЛЕНИЕ ЭЛЕМЕНТА В НАЧАЛО МАССИВА СДВИГАЯ ВСЁ ОСТАЛЬНОЕ 
// arrSix.unshift('x')
// console.log(arrSix)

// ANCHOR ПРОСМОТР УДАЛЁННОГО ЭЛЕМЕНТА ИЗ МАССИВА
// let arrSeven = [1, 2, 3]
// let removed = arrSeven.splice(1,1)
// console.log(removed)

// ANCHOR ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ В МАССИВ
// let arrEight = ['Егор', 'Егор', 'Вася', 'Коля']
// arrEight.splice(0,2, 'Саша', 'Петя')
// console.log(arrEight)

// let arrNine = ['deda', 'vesta', 'cma', 'debil']
// arrNine.splice(-2,1)
// console.log(arrNine)

// let arrTen = ['gor', 'tor', 'vor', 'sor', 'spor']
// let arrEleven = arrTen.slice(1,2)
// console.log(arrEleven)

// let arrTen1 = ['1', '2', '3', '5', '6', '7']
// let arrTwelve = arrTen1.slice()
// console.log(arrTwelve)

// ANCHOR КОПИРОВАНИЕ МАССИВА И ДОБАВЛЕНИЕ В НЕГО ЭЛЕМЕНТА
// let arrThirteen = ['1', 'a', 'g', 'h']
// let arrFourteen = arrThirteen.concat('shock')
// console.log(arrFourteen)


// ANCHOR ПОИСК В МАССИВЕ
// let arrFiveteen = ['sa', 'va', 'da', 'troi']
// // console.log(arrFiveteen.indexOf('sa'))
// console.log(arrFiveteen.indexOf('da', 3))
// console.log(arrFiveteen.includes('da', 3))

// let arrSixteen = [
//     {name: 'Vasya', age: 14},
//     {name: 'Deda', age: 54},
//     {name: 'Sekunda', age: 99}
// ]
// // // // let result = arrSixteen.find(function(item, index, array){
// // // //     return item.age === 99
// // // // })
// let result = arrSixteen.find(item => item.age === 14)
// console.log(result)

// let resultTwo = arrSixteen.findIndex(item => item.name === 'Sekunda')
// console.log(resultTwo)

// ANCHOR FILTER ФИЛЬТРАЦИЯ

// let arrEighteen = [
//     { name: 'Sasha', age: 16},
//     { name: 'Dasha', age: 17},
//     { name: 'Masha', age: 18},
//     { name: 'Pasha', age: 25},
// ]
// let reuslt = arrEighteen.filter(function(item, index, array){
//     return item.age <= 18
// })
// console.log(reuslt)

// ANCHOR ДОБАВЛЕНИЕ ЭЛЕМЕНТА В МАССИВ
// let arrTwo = [
//     ['x', 'z', 'y'],
//     ['a','b', 'n'],
//     ['s'],
// ]
// arrTwo[3] = '123'
// console.log(arrTwo)
// console.log(arrTwo.length)

// console.log(arrTwo[1][2])

// ANCHOR СОРТИРОВКА
// let arrOne1 = ['гба', 'чва', 'бг', 'арп']
// console.log(arrOne1.sort())

// let matrix = [
//     ['пять', 'играть', 'дота'],
//     ['арбуз', 'чма', 'плётка',],
//     ['герой', 'blank', 'auto'],
// ]
// console.log(matrix.sort())

// let arr2 = [5, 4 , 3, 2 , 1, 6, 22, 99, 14, 88]
// console.log(arr2.sort())

// let arr3 = [12, 14, 56, 2, 3, 4]
// // console.log(arr3.sort())

// // function compareNum(a, b) {
// //     if (a > b) return 1
// //     if (a == b) return 0
// //     if (a < b) return -1
// // }
// // console.log(arr3.sort(compareNum))

// // function compareNum(a, b) {
// //     console.log(`Что же больше? ${a} и ${b}`);
// //     // if (a > b) return 1
// //     // if (a == b) return 0
// //     // if (a < b) return -1
// //     // return a - b
// // }
// // console.log(arr3.sort(compareNum))

// // console.log(arr3.sort((a, b) => a - b))

// console.log(arr3.reverse())

// ANCHOR ПРЕОБРАЗОВАНИЕ МАССИВОВ 
 
// let arr4 = ['эМиссия ', 'цирк', 'пшик', 'база', 'ачо', 'импликация', 'город']

// let result = arr4.map(function(item, index, array){
//     return item[1]
// })
// console.log(result)

// ANCHOR МЕТОД SPLIT

// let str = 'Гори, ясно, день, погода, цвет'

// let arr6 = str.split(',', 4)
// console.log(arr6)

// ANCHOR МЕТОД JOIN

// let arr7 = ['Peta', 'Din', 'arbuz', 'chelka']
// // let str = arr7.join(',')
// // console.log(str)

// //преобразование массива в строку 
// console.log(String(arr7))

// ANCHOR МЕТОД Array.isArray

// const str = 'привет привет привет я играю в бисер'

// const arr8 = ['два', 1, 'pale', 'fire']

// if (Array.isArray(str)) {
//     console.log('Массив на массе')
// } else {
//     console.log('Не массив, не на массе')
// }

// if (Array.isArray(arr8)) {
//     console.log('Массив на массе')
// } else {
//     console.log('Не массив, не на массе')
// }

// ANCHOR ПРЕОБРАЗОВАНИЕ ЭЛЕМЕНТОВ МАССИВА 

// let arr0 = ['ol', 'lo', 'olo', 'lol']

// for (let i = 0; i < arr0.length; i++) {
//     console.log(arr0[i])
// }

// ANCHOR ПЕРЕБОР ЭЛЕМЕНТОВ МАССИВА ЦИКЛ FOR...OF

// let arr12 = ['i', 'you', 'he', 'she', 'they', 'we']

// for (let arr12Item of arr12) {
// console.log(arr12Item)
// }

// ANCHOR ЦИКЛ И МЕТОД FOREACH

//  let arr = ['я', 'живу', 'на', 'улице', 'где', 'растут', 'деревья']

// // arr.forEach(function(item, index, array) {
// //     console.log(`${item} находится на ${index} в этом массиве ${array}`);
// // })

// arr.forEach((item, index, array) => {
//     console.log(`${item} находится на ${index} в этом массиве ${array}`)
// })

// ANCHOR МЕТОДЫ REDUCE И REDUCERIGHT

// let arr = [5, 2, 7, 11, 9, 18, 23]

// let ReduceArr = arr.reduce(function(previousValue, item, index, array) {
//     return item + previousValue
// }, 0)
// console.log(ReduceArr)

// let arr = ['sasha', 'egpo', 'bodr', 'holod', 'golod']
// let reduceArr = arr.reduceRight(function(previousValue, item, index, array) {
//     console.log(previousValue)
//     console.log(item)
//     return `${item}, ${previousValue}`
// })
// console.log(`слова: ${reduceArr} `)

let users = ['Sasha', 'Masha', 'Pasha', 'Vasya']
users.push('Olya')
users.splice(3, 1, 'Elena')
let removed = users.pop()
users.unshift('Vasya', 'Egor')
console.log(users)
console.log(removed)

let arr1 = ['grey', 'pink', 'green']
let green = arr1.splice(2,1)
arr1.push(green)
console.log(arr1)