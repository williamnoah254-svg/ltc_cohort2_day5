//$(selector).action()
$("body").css(
{'background-color':'black','color':'white'

})

$("p").css('font-size','30px')
$("#heading-1").css('color','red')
$(".p2").css('color','green')
$(".p2").text("this is a text from jQuerry")
$



// $("img").hide()
// function func1(){
//     $("img").show().slideUp(3000)

function func1(){
     $.post("https://jsonplaceholder.typicode.com/posts",{userId:13,id:101,title:"'hello i am posting text",body:"i am the body text"},function(data){
        console.log(data)
     })


// let firstNmae = $("#heading-1").text()
// console.log(firstNmae)
}