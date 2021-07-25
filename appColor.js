const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn =document.getElementById("btn");
var color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber=getRandomNumber();

    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
    color.style.backgroundColor=hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}