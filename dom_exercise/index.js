// let el =  document.querySelector("body");
// el.classList.add("container");
// let el2 =document.querySelector("button")
// el2.classList.add("btn");
// let el3 =document.querySelector("input")
// el3.classList.add("in")
// el2.addEventListener(`click`,function(){
// let userName = el3.value;
// let p = document.createElement("h2")
// let greeting = `Hello ${userName} today is Thursday`;
// p.innerText = greeting
// document.body.appendChild(p)
// })


// Object
let artist = {
    artistName: "james",
    age:30,
    song:"the night is still young"
}
console.log(artist.artistName)
artist["artistName"] = "Mary";
console.log(artist)
// console.log(Object.keys(artist))
Object.keys(artist).forEach(keys => console.log(keys))
Object.values(artist).forEach(values => console.log(values))
console.log(Object.entries(artist))

for (const[key,value] of Object.entries(artist))
{
    console.log(`key ${key} value : ${value}`)
}

