
// console.log("hello world");
// let secondName= "Noah";
// firstName="Mary";
// const pi =3.142;
// let isRaining = true;
// let myAge = null;
// let thirdName;

// let fruits =["banana","apple","avocado"]
// let album ={"artistName":"Benson Boone","albumName":"Tears","yearsofpublish":2014}

// // arithmetic operators (+,-,/,*,%,**)
// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// // comparison/relational operators(>,<,>=,<=,==,===)
// // logical oparators(&&,||,!)

// console.log(typeof(secondName));
// console.log(typeof(fruits));
// console.log(typeof(album));
// console.log(typeof(thirdName));
// console.log(typeof(myAge));
// console.log(typeof(isRaining));

let button = document.getElementById("button");

button.addEventListener("click",function(){

let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

let results = Number(num1)+Number(num2);
console.log("your results is:",results);

let output= document.getElementById("results");
output.innerText = `your results is: ${results}`
})