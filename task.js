// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }


function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
let a = dec2bin(1234)
let a1 = a.split('').reduce(function(previousValue, item) {
    console.log(item)
    return +item + previousValue
}, 0)
console.log(a1)

