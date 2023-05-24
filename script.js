let show = document.querySelector(".willshowen")
let quer = document.querySelector(".moreinfor")
let counter= 0;
quer.addEventListener("click", ()=>{
    counter++
    if(counter%2!==0){
      show.style.display="block";
      
    }
    else{
     show.style.display="none";
    }
    console.log(counter);
   
})