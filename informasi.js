function changeMenu(n){
    var temp = document.getElementsByClassName("menu");
    var temp1=document.getElementsByClassName("swaped");
    for(var i = 0;i<temp.length;i++){
        temp[i].classList.remove("btn-active");
    }
    for(var i = 0;i<temp1.length;i++){
        temp1[i].style.display="none";
    }
    n.classList.add("btn-active");
    document.getElementById(n.id+"-info").style="";
}

window.onscroll = function() {changeColor()};
    var off=true;
    function changeColorButton(){
        if(off){
            document.getElementById("navbar").style.backgroundColor = "#39BC6E";
            off=false;
        }
        else if(document.documentElement.scrollTop > 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "#39BC6E";
            off=true;
        }
        else if(document.documentElement.scrollTop < 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "";
            off=true;
        }
    }
    function changeColor() {
        if (document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#39BC6E";
        } else if (document.documentElement.scrollTop < 50 && off){
        document.getElementById("navbar").style.backgroundColor = "";
        }
        
    }