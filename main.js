const password=document.querySelector(".password");
const login=document.querySelector(".login")
 const btn=document.querySelector(".btn");
let button=document.getElementById("myButton");


 
button.addEventListener("click",()=>{
    
        
if (login.value==="JS" && password.value==="document") {
          
           password.value.length="8";
           console.log(password.value)
           login.style.border="3px solid green";
           password.style.border="3px solid green";
           button.disabled=false;
           }else {

           login.style.border="3px solid red";
           password.style.border="3px solid red"; 
           button.disabled=true;    
  }
   
})




