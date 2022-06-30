let cart=document.getElementById("body");


console.log(cart);

let number=document.querySelectorAll("#number");

console.log(number);
let numberList=Array.from(number);


let item=document.getElementById("item");
let arrow=document.getElementById("arrow");
let pop=document.getElementById("pop");



let carts=[];
let itemNumber=carts.length;

function getCart(){
        
        cart.addEventListener("click",(e)=>{
        carts.push(cart);
        console.log(carts);
 
        let itemNumber=carts.length;

        item.innerHTML=itemNumber;

                for(let i=0,c=numberList.length; i<c; i++){
                    let itemNumber=carts.length;
                    numberList[0].classList.add("change")
                }

        })


arrow.addEventListener("click",()=>{
    numberList[1].classList.add("change");
    pop.classList.add("show");
   
    for(let i=0;i<=itemNumber;i++){
       
    pop.innerHTML=carts[i].innerHTML;
    }
    console.log(pop.innerHTML);
  
            
 })

 } 
 getCart();




 















    