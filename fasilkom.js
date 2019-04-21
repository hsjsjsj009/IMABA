window.onscroll = function() {changeColor()};
    var off=true;
    function changeColorButton(){
        if(off){
            document.getElementById("navbar").style.backgroundColor = "#007AD5";
            off=false;
        }
        else if(document.documentElement.scrollTop > 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "#007AD5";
            off=true;
        }
        else if(document.documentElement.scrollTop < 50 && !off){
            document.getElementById("navbar").style.backgroundColor = "";
            off=true;
        }
    }
    function changeColor() {
        if (document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#007AD5";
        } else if (document.documentElement.scrollTop < 50 && off){
        document.getElementById("navbar").style.backgroundColor = "";
        }
        
    }