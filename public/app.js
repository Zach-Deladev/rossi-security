let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(()=> {


        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add("active");

            }, (idx + 1) * 70)
        });

     

        setTimeout (()=>{
            intro.style.top = "-100vh";
        }, 2300);
 
    })
});

window.onbeforeunload = function () {
    window.scrollTo(0,0);
  };