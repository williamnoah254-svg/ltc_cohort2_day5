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


// // Object
// let artist = {
//     artistName: "james",
//     age:30,
//     song:"the night is still young"
// }
// console.log(artist.artistName)
// artist["artistName"] = "Mary";
// console.log(artist)
// // console.log(Object.keys(artist))
// Object.keys(artist).forEach(keys => console.log(keys))
// Object.values(artist).forEach(values => console.log(values))
// console.log(Object.entries(artist))

// for (const[key,value] of Object.entries(artist))
// {
//     console.log(`key ${key} value : ${value}`)
// }

// asynchronous javascript & api
// setTimeout(function,delayTime.ms)
// console.log("task 1 completed")

// setTimeout(()=>console.log("task 2 completed"),300)

// console.log("task 3 completed")
// console.log("task 4 completed")

// const myPromise = new Promise((resolve,reject)=>{
//     let succes = true;
//     if(succes){
//         resolve("The task was successifull")
//     }
//     else{
//         reject("somthing went wrong")
//     }
// })
// myPromise.then((result)=>console.log(result)).
// catch((error)=>console.log(error))

// // async/await
// async function getData() {
//     const output = await myPromise
//     console.log(output)
// }
// getData()


// MY NOTES
// https://hoppscotch.io/
// https://jsonplaceholder.typicode.com/
// status code

// Fetch API
// console.log(fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(Response => console.log(Response.json())))

// fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(resp => resp.json()).then((data) => {
//     document.body.innerText= JSON.stringify(data)
// })

//    fetch(`https://jsonplaceholder.typicode.com/posts/1`).then(resp => resp.json()).then((data) => {
   
//    const{userId,id,title,body} = data
//    console.log(title,body) = data
// })

async function getData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await resp.json()
    const{userId,id,title,body} = data
    
    let heading =document.createElement("h1")
    heading.innerText = data["title"]
    document.body.appendChild(heading)
    // console.log(data)
    
}
getData()