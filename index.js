let cart=document.getElementById("body");


console.log(cart);
// console.log(card.innerText);
// let number=document.getElementById("number");
let number=document.querySelectorAll("#number");

console.log(number);
let numberList=Array.from(number);
// console.log(numberList);

let item=document.getElementById("item");
let arrow=document.getElementById("arrow");
let pop=document.getElementById("pop");

// console.log(cart);

let carts=[];
let itemNumber=carts.length;

function getCart(){
        
        cart.addEventListener("click",(e)=>{
        carts.push(cart);
        console.log(carts);
        // console.log(carts.length);
        let itemNumber=carts.length;
        // console.log(itemNumber);
        item.innerHTML=itemNumber;

                for(let i=0,c=numberList.length; i<c; i++){
                    let itemNumber=carts.length;
                    numberList[0].classList.add("change")
                }

        })


arrow.addEventListener("click",()=>{
    numberList[1].classList.add("change");
    for(let i=0;i<=itemNumber;i++){
        pop.innerHTML=carts[i];
        pop.classList.add("show");
    }
    console.log(carts(i))
  
            
 })

 } 
 getCart();




 









//  let clicked=function(){
//     arrow.addEventListener("click",()=>{
//         let x=0;
//         while(clicked){
//             x=x+1;
//             numberList[x].classList.add("change");
            
//         }
//     })
//  }
//  clicked();







    