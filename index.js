let cart=document.getElementById("body");
// let number=document.getElementById("number");
let number=document.querySelectorAll("#number");

console.log(number);
let numberList=Array.from(number);
console.log(numberList);

let item=document.getElementById("item");
let arrow=document.getElementById("arrow");

console.log(cart);

let carts=[];
let itemNumber=carts.length;

function getCart(){
cart.addEventListener("click",(e)=>{
carts.push(cart);
console.log(carts);
console.log(carts.length);
let itemNumber=carts.length;
console.log(itemNumber);
item.innerHTML=itemNumber;

for(let i=0,c=numberList.length; i<c; i++){
    let itemNumber=carts.length;
    numberList[0].classList.add("change");
}


})

 } 
 getCart();


    arrow.addEventListener("click",(e)=>{
        numberList[1].classList.add("change");
       
     })

    