//product image nav 
var mainImgVar = document.getElementById("main-img");
function change_img(image){
     mainImgVar.src = image.src;
    }

// Related Items Part
let itemcards1 =document.getElementsByClassName("item-cards-1");
let rislider1 = document.getElementById("related-item-slider-1");
let buttonRight1 = document.getElementById("slide-right-1");
let buttonLeft1= document.getElementById("slide-left-1");

buttonLeft1.addEventListener("click",() => {
    rislider1.scrollLeft -= 125;
});
buttonRight1.addEventListener("click",() => {
    rislider1.scrollLeft += 125;
});

const maxScrollLeft1 = rislider1.scrollWidth - rislider1.clientWidth;

     //Auto play
    function autoPlay1(){
        if (rislider1.scroller > (maxScrollLeft1 -1)){
            rislider1.scrollLeft -= maxScrollLeft1;
        } 
        else{
            rislider1.scrollLeft += 1;
        }
    }
    let play1 = setInterval(autoPlay1,50);

// Related Brands Part
let itemcards2 =document.getElementsByClassName("item-cards-2");
let rislider2 = document.getElementById("related-item-slider-2");
let buttonRight2 = document.getElementById("slide-right-2");
let buttonLeft2= document.getElementById("slide-left-2");

buttonLeft2.addEventListener("click",() => {
    rislider2.scrollLeft -= 125;
});
buttonRight2.addEventListener("click",() => {
    rislider2.scrollLeft += 125;
});

const maxScrollLeft2 = rislider2.scrollWidth - rislider2.clientWidth;

     //Auto play
    function autoPlay2(){
        if (rislider2.scroller > (maxScrollLeft2 -1)){
            rislider2.scrollLeft -= maxScrollLeft2;
        } 
        else{
            rislider2.scrollLeft += 1;
        }
    }
    let play2 = setInterval(autoPlay2,50);


/* Show/Hide Comment */
    const readMoreBtn3 =document.querySelector('.click-read-more-3');
        const text3 = document.querySelector('.person-show-hide-3');
        readMoreBtn3.addEventListener('click',(e)=>{
            text3.classList.toggle('show-more');
            if(readMoreBtn3.innerText === 'More Comments'){
                readMoreBtn3.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn3.innerText = 'More Comments'
            }
        });

    const readMoreBtn6 =document.querySelector('.click-read-more-6');
        const text6 = document.querySelector('.person-show-hide-6');
        readMoreBtn6.addEventListener('click',(e)=>{
            text6.classList.toggle('show-more');
            if(readMoreBtn6.innerText === 'More Comments'){
                readMoreBtn6.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn6.innerText = 'More Comments'
            }
        });

    const readMoreBtn9 =document.querySelector('.click-read-more-9');
        const text9 = document.querySelector('.person-show-hide-9');
        readMoreBtn9.addEventListener('click',(e)=>{
            text9.classList.toggle('show-more');
            if(readMoreBtn9.innerText === 'More Comments'){
                readMoreBtn9.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn9.innerText = 'More Comments'
            }
        });

    const readMoreBtn12 =document.querySelector('.click-read-more-12');
        const text12 = document.querySelector('.person-show-hide-12');
        readMoreBtn12.addEventListener('click',(e)=>{
            text12.classList.toggle('show-more');
            if(readMoreBtn12.innerText === 'More Comments'){
                readMoreBtn12.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn12.innerText = 'More Comments'
            }
        });

    const readMoreBtn15 =document.querySelector('.click-read-more-15');
        const text15 = document.querySelector('.person-show-hide-15');
        readMoreBtn15.addEventListener('click',(e)=>{
            text15.classList.toggle('show-more');
            if(readMoreBtn15.innerText === 'More Comments'){
                readMoreBtn15.innerText = 'Hide Comments';
            }
            else{
                readMoreBtn15.innerText = 'More Comments'
            }
        });

        
// Heart-Icons
    var heartbtnvar1 = document.getElementById('heart-icon-btn-1');
    function heartIconFunct1(){
            if (heartbtnvar1.style.color =="red") {
                heartbtnvar1.style.color = "grey"
                }
            else{
                heartbtnvar1.style.color = "red"
            }
        };

    var heartbtnvar2 = document.getElementById('heart-icon-btn-2');
    function heartIconFunct2(){
            if (heartbtnvar2.style.color =="red") {
                heartbtnvar2.style.color = "grey"
                }
            else{
                heartbtnvar2.style.color = "red"
            }
        };

    var heartbtnvar3 = document.getElementById('heart-icon-btn-3');    
    function heartIconFunct3(){
        if (heartbtnvar3.style.color =="red") {
            heartbtnvar3.style.color = "grey"
            }
        else{
            heartbtnvar3.style.color = "red"
            }
        };

    var heartbtnvar4 = document.getElementById('heart-icon-btn-4');
    function heartIconFunct4(){
            if (heartbtnvar4.style.color =="red") {
                heartbtnvar4.style.color = "grey"
                }
            else{
                heartbtnvar4.style.color = "red"
            }
        };
    
    var heartbtnvar5 = document.getElementById('heart-icon-btn-5');
    function heartIconFunct5(){
            if (heartbtnvar5.style.color =="red") {
                heartbtnvar5.style.color = "grey"
                }
            else{
                heartbtnvar5.style.color = "red"
            }
        };
    
    var heartbtnvar6 = document.getElementById('heart-icon-btn-6');    
    function heartIconFunct6(){
        if (heartbtnvar6.style.color =="red") {
            heartbtnvar6.style.color = "grey"
            }
        else{
            heartbtnvar6.style.color = "red"
            }
        };

    var heartbtnvar7 = document.getElementById('heart-icon-btn-7');
    function heartIconFunct7(){
            if (heartbtnvar7.style.color =="red") {
                heartbtnvar7.style.color = "grey"
                }
            else{
                heartbtnvar7.style.color = "red"
            }
        };

    var heartbtnvar8 = document.getElementById('heart-icon-btn-8');
    function heartIconFunct8(){
            if (heartbtnvar8.style.color =="red") {
                heartbtnvar8.style.color = "grey"
                }
            else{
                heartbtnvar8.style.color = "red"
            }
        };

    var heartbtnvar9 = document.getElementById('heart-icon-btn-9');    
    function heartIconFunct9(){
        if (heartbtnvar9.style.color =="red") {
            heartbtnvar9.style.color = "grey"
            }
        else{
            heartbtnvar9.style.color = "red"
            }
        };

    var heartbtnvar10 = document.getElementById('heart-icon-btn-10');
    function heartIconFunct10(){
            if (heartbtnvar10.style.color =="red") {
                heartbtnvar10.style.color = "grey"
                }
            else{
                heartbtnvar10.style.color = "red"
            }
        };
    
    var heartbtnvar11 = document.getElementById('heart-icon-btn-11');
    function heartIconFunct11(){
            if (heartbtnvar11.style.color =="red") {
                heartbtnvar11.style.color = "grey"
                }
            else{
                heartbtnvar11.style.color = "red"
            }
        };
    
    var heartbtnvar12 = document.getElementById('heart-icon-btn-12');    
    function heartIconFunct12(){
        if (heartbtnvar12.style.color =="red") {
            heartbtnvar12.style.color = "grey"
            }
        else{
            heartbtnvar12.style.color = "red"
            }
        };
    var heartbtnvar13 = document.getElementById('heart-icon-btn-13');
    function heartIconFunct13(){
            if (heartbtnvar13.style.color =="red") {
                heartbtnvar13.style.color = "grey"
                }
            else{
                heartbtnvar13.style.color = "red"
            }
        };
        
    var heartbtnvar14 = document.getElementById('heart-icon-btn-14');
    function heartIconFunct14(){
            if (heartbtnvar14.style.color =="red") {
                heartbtnvar14.style.color = "grey"
                }
            else{
                heartbtnvar14.style.color = "red"
                }
        };
        
    var heartbtnvar15 = document.getElementById('heart-icon-btn-15');    
    function heartIconFunct15(){
        if (heartbtnvar15.style.color =="red") {
            heartbtnvar15.style.color = "grey"
            }
        else{
            heartbtnvar15.style.color = "red"
            }
        };