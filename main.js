let arrOne = ['x', 'y', 'z']
arrOne.splice(1,1)
console.log(arrOne)

// let arrTwo = [
//     ['x', 'z', 'y'],
//     ['a','b', 'n']
// ]
// // console.log(arrTwo)
// console.log(arrTwo[1][2])

// let arrThree = ['q', 'w', 'e']
// arrThree.push('t')
// console.log(arrThree)

// let arrFour = ['u', 'i', 'o']

// arrFour.shift()
// console.log(arrFour)

// let arrFive = ['a', 's', 'f']
// arrFive.pop()
// console.log(arrFive)

// let arrSix = ['h', 'j', 'k']

// arrSix.unshift('x')
// console.log(arrSix)

// let arrSeven = [1, 2, 3]
// let removed = arrSeven.splice(1,1)
// console.log(removed)

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

// let arrThirteen = ['1', 'a', 'g', 'h']
// let arrFourteen = arrThirteen.concat('shock')
// console.log(arrFourteen)

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

//FILTER

let arrEighteen = [
    { name: 'Sasha', age: 16},
    { name: 'Dasha', age: 17},
    { name: 'Masha', age: 18},
    { name: 'Pasha', age: 25},
]
let reuslt = arrEighteen.filter(function(item, index, array){
    return item.age <= 18
})
console.log(reuslt)