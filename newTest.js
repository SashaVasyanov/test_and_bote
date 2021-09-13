// let a = prompt("Введите число:  ")
// let b = prompt ("Введите число:  ")
// let c = ((+a + +b) * 2)
// alert(c)
// // console.log(с)
let arr = [1,2,3,4]
let reduceArr = arr.reduce(function(previousValue, item, index, array) {
    return item + previousValue
}, 1488)
console.log(reduceArr)

