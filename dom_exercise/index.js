let el =  document.querySelector("body");
el.classList.add("container");
let el2 =document.querySelector("button")
el2.classList.add("btn");
let el3 =document.querySelector("input")
el3.classList.add("in")
el2.addEventListener(`click`,function(){
let userName = el3.value;
let p = document.createElement("h2")
let greeting = `Hello ${userName} today is Thursday`;
p.innerText = greeting
document.body.appendChild(p)
})
