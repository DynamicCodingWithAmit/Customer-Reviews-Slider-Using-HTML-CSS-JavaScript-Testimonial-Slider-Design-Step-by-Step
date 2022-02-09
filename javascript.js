let slide = document.getElementById('slide');
let upArrowb = document.getElementById('upArrowb');
let downArrowb = document.getElementById('downArrowb');

var a = 0;
upArrowb.addEventListener('click' , ()=>{
   
    if(a < 0){
        a = a+300;
        slide.style.top=a+"px";

    }

})

downArrowb.addEventListener('click' , ()=>{
   
    if(a > "-900"){
        a = a - 300;
        slide.style.top=a+"px";

    }

})