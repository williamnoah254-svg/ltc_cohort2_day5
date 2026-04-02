let fruits = ["apple","mangoes","pinaple"];
console.log(fruits[0])

fruits[1] = "avocado";
console.log(fruits)

fruits.push("banana")
console.log(fruits)

fruits.unshift("pears")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

// looping through arrows
fruits.forEach((fruit) => {
    console.log(fruit)
})

let numbers = [1,2,3,4,5,6,7,8,9,10];
let squareNumbers = numbers.map((numbers) =>{
    return Number *2;
})
console.log(squareNumbers)
let evenNumbers = numbers.filter((Number) => {
    return Number%2===0;

})
console.log(evenNumbers)
