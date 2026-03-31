
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

// let button = document.getElementById("button");

// button.addEventListener("click",function(){

// let num1 = document.getElementById("num1").value;
// let num2 = document.getElementById("num2").value;

// let results = Number(num1)+Number(num2);
// console.log("your results is:",results);

// let output= document.getElementById("results");
// output.innerText = `your results is: ${results}`
// })

// let marks =70
// if(marks>=70 && marks<=100){
//     console.log("grade = A")
// }
// else if (marks>=60 && marks<70){
//     console.log("grade =B")
// }
// else if (marks>+50 && marks<60){
//     console.log("grade =c")
// }
// else {console.log("you have failed the test")}

// let marks = 59;
// switch(true){
//     case(marks>=70 && marks<=100):
//     console.log
// }


// loop
for(let  i=1;i<21;i++){
    console.log(i)
}

// types  of loop
// wild loop
let counter=20;
while(counter<30){
    counter++;
    console.log("loops are amazing")
}

// do while loop
let x=10
    do{
        console.log("i am happy");
        x++;
    }
    while(x<30)


 // for in loop
     fruits=["apple","banana","mangoes"]
     for(let fruit of fruits)
     {
         console.log(fruits)
     }


    //  function declaration
     function addNumber(a,b){
        // return a+b;
        let sum = a+b;
        console.log(sum)
     }
     addNumber(4,6)

    //  funtion expression
     const subnumbers = function(a,b){
        let sub = a-b;
        console.log(sub)
     }

     subnumbers(60,40)