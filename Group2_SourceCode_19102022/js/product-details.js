//product image nav 
var mainImgVar = document.getElementById("main-img");
function change_img(image){
     mainImgVar.src = image.src;
    }

// Related Items Part
let thumbnails =document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft= document.getElementById("slide-left");

buttonLeft.addEventListener("click",() => {
     slider.scrollLeft -= 125;
});
buttonRight.addEventListener("click",() => {
     slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

     //Auto play
    function autoPlay(){
        if (slider.scroller > (maxScrollLeft -1)){
            slider.scrollLeft -= maxScrollLeft;
        } 
        else{
            slider.scrollLeft += 1;
        }
    }
    let play = setInterval(autoPlay,50);