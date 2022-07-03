let cart=document.getElementById("body");
let body=document.getElementById("bd");
let container=document.getElementById("container");
let cont=document.getElementById("cont");

console.log(cart);

let number=document.querySelectorAll("#number");

console.log(number);
let numberList=Array.from(number);


let item=document.getElementById("item");
let arrow=document.getElementById("arrow");
let pop=document.getElementById("pop");

let carts=[];
let itemNumber=carts.length;

let activeStep=0;
numberList[activeStep].classList.add("change");


function getCart(){
        
        cart.addEventListener("click",(e)=>{
               

                let src=e.target.getAttribute("src");
                let currentCartId=e.target.getAttribute("data-id");

                let check=carts.filter(item=>item==currentCartId);

                function Image(id,src){
                        this.id=id;
                        this.src=src;
                }
               
                let itemObject=new Image(currentCartId,src);
              
                if(check.length===0){
                        carts.push(itemObject);
                }
                
              for(let item in itemObject){
                console.log(`${item}:${itemObject[item]}`);
              }

              console.log(carts);

                
                let itemNumber=carts.length;

                item.innerHTML=itemNumber;

        })       

} 
 getCart();

 arrow.addEventListener("click",()=>{
        activeStep++;
         numberList[activeStep].classList.add("change");


         cart.innerHTML="";
         
         for(let i=0;i<carts.length;i++){
              let source=carts[i].src;

               cart.innerHTML+=`<img  height="200px" width="200px" src=${source}>`;

               
             console.log(cart.innerHTML);
         }
 
             
     })

 















    