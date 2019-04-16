var clicked = false;
function changeMap(n){
    var child = n.children;
    if(!clicked){
        showSlides(slideIndex++,"swap");
        slideIndex=1
        showSlides(slideIndex++,"swap-text");
        clicked=true;
    }else{
        showSlides(slideIndex=1,"swap");
        showSlides(slideIndex = 1,"swap-text");
        clicked=false;
    }
}


var slideIndex = 1;

showSlides(1,"swap");
showSlides(1,"swap-text");
function showSlides(n,clas) {
    var i;
    var slides = document.getElementsByClassName(clas);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display="block";
    }
    window.onscroll = function() {changeColor()};
    var off=true;
    function changeColorButton(){
        if(off){
            document.getElementById("navbar").style.backgroundColor = "#FFA300";
            off=false;
        }
        else if(document.documentElement.scrollTop > 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "#FFA300";
            off=true;
        }
        else if(document.documentElement.scrollTop < 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "";
            off=true;
        }
    }
    function changeColor() {
        if (document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#FFA300";
        } else if (document.documentElement.scrollTop < 50 && off){
        document.getElementById("navbar").style.backgroundColor = "";
        }
        
    }