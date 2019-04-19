var clicked1=false;
var clicked2=false;
function changeMap(n){
    if((n.id == "button1") && !clicked1){
        showSlides(slideIndex++,"swap");
        n.style.backgroundColor = "#FFB738";
        document.getElementsByClassName("button")[1].style.background="none";
        clicked1=true;
        clicked2=false;
    }else if((n.id == "button2") && !clicked2){
        showSlides(slideIndex=1,"swap");
        n.style.backgroundColor = "#FFB738";
        document.getElementsByClassName("button")[0].style.background="none";
        clicked1=false;
        clicked2=true;
    }
}
var slideIndex = 1;

showSlides(1,"swap");
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