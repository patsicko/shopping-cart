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
               
                console.log(e.target.getAttribute("data-id"));
                let currentCart=e.target.getAttribute("data-id");

                let check=carts.filter(item=>item==currentCart);

              
                if(check.length===0){
                        carts.push(currentCart);
                }
                
                console.log(check.length);


                // let check=carts.filter(function(item){
                //        return item===currentCart

                // })
 
                let itemNumber=carts.length;

                item.innerHTML=itemNumber;

        })


   


        

} 
 getCart();


 arrow.addEventListener("click",()=>{
        activeStep++;
         numberList[activeStep].classList.add("change");

         for(let i=0;i<carts.length;i++){

                if(i==2){
                const image=document.createElement("img");
                image.src="cart.png";
        
                 cart.innerHTML="";
                 cart.appendChild(image);}
                 else{
                        console.log(carts[i]);
                 }
                //  console.log(carts[i]);
         }
       
 
        //  body.innerHTML=pop.innerHTML;
 
      
 
 
        //  console.log(pop.innerHTML);
   
             
     })

 















    