    var slideIndex=1;
    showSlides(slideIndex = 1,"slide");
    function showSlidesNext(){
        slideIndex=1;
        showSlides(slideIndex++,"slide");
        slideIndex=1;
        if(document.getElementById("part2").style.display == "none"){
            swapPerbedaanIlkom();
            document.getElementById('part3').scrollIntoView();
    }
    }
    swapMinatIlkom();

    function swapMinatIlkom(){
        document.getElementById("minat-ilkom-button").classList.remove("hoverBackgroundIlkom");
        document.getElementById("minat").style.backgroundColor="#FFADB7";
        document.getElementById("minat-ilkom-button").style.backgroundColor="#FFADB7";
        document.getElementById("minat-SI-button").style.background="none";
        document.getElementById("minat-SI-button").classList.add("hoverBackgroundSI");
        showSlides(slideIndex = 1,"minat");
    }

    function swapMinatSI(){
        document.getElementById("minat-SI-button").classList.remove("hoverBackgroundSI");
        document.getElementById("minat").style.backgroundColor="#FFCCD2";
        document.getElementById("minat-SI-button").style.backgroundColor="#FFCCD2";
        document.getElementById("minat-ilkom-button").style.background="none";
        document.getElementById("minat-ilkom-button").classList.add("hoverBackgroundIlkom");
        showSlides(slideIndex = 2,"minat");
    }



    function showSlides(n,clas) {
    var i;
    var slides = document.getElementsByClassName(clas);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style="";
    }

    function swapPerbedaanIlkom(){
        document.getElementById("ilkom").classList.remove("hoverBackgroundIlkom");
        document.getElementById("swaped").style.backgroundColor="#FFADB7";
        document.getElementById("ilkom").style.backgroundColor="#FFADB7";
        document.getElementById("SI").style.background="none";
        document.getElementById("SI").classList.add("hoverBackgroundSI");
        showSlides(slideIndex = 1,"swap");
    }

    function swapPerbedaanSI(){
        document.getElementById("SI").classList.remove("hoverBackgroundSI");
        document.getElementById("swaped").style.backgroundColor="#FFCCD2";
        document.getElementById("SI").style.backgroundColor="#FFCCD2";
        document.getElementById("ilkom").style.background="none";
        document.getElementById("ilkom").classList.add("hoverBackgroundIlkom");
        showSlides(slideIndex = 2,"swap");
        
    }
    var media = window.matchMedia("(max-width:900px)");
    changeOrder(media);
    removePicturePart4(media)
    media.addListener(changeOrder);
    media.addListener(removePicturePart4);

    function removePicturePart4(n){
        if(n.matches){
            document.getElementById("gambar-part4").innerHTML="";
        }else{
            document.getElementById("gambar-part4").innerHTML='<img class="text-center img-fluid" src="Asset/200ppi/Asset 1part 4 image.png">';
        }
    }
    function changeOrder(n){
        if(n.matches && window.outerHeight <= 900){
            document.getElementById("switch-swap").classList.add("list-group-horizontal");
        }else{
            document.getElementById("switch-swap").classList.remove("list-group-horizontal");
        }
    }

    window.onscroll = function() {changeColor()};
    var off=true;
    function changeColorButton(){
        if(off){
            document.getElementById("navbar").style.backgroundColor = "#FF5C6F";
            off=false;
        }
        else if(document.documentElement.scrollTop > 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "#FF5C6F";
            off=true;
        }
        else if(document.documentElement.scrollTop < 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "";
            off=true;
        }
    }
    function changeColor() {
        if (document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#FF5C6F";
        } else if (document.documentElement.scrollTop < 50 && off){
        document.getElementById("navbar").style.backgroundColor = "";
        }
        
    }