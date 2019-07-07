const DataSlideShow =[{
    text:"Skripsi di Fasilkom tidak menjadi syarat kelulusan loh! Jadi, kamu boleh bikin atau tidak bikin skripsi di semester akhir nanti! Untuk detailnya, kamu akan diberikan penjelasannya nanti setelah masuk!",
    img:"../Asset Info Fasilkom/FunFact-Skripsi.svg"
},{
    text:"Maskot dari Fasilkom itu seekor panda loh! Nah karena kebanyakan anak Fasilkom itu disibukkan dengan tugas-tugas sampai kantong mata mereka hitam karena mereka kurang tidur sehingga mirip dengan seekor panda, maka akhirnya panda dijadikan maskot dari Fasilkom.",
    img:"../Asset/Kanal Informasi/SVG/Kontingen.svg"
},{
    text:"Makanan di kantin Fasilkom itu murah dan bikin kenyang lho! Dompet kamu bakal aman deh kalau makan di kantin Fasilkom. Dan tahukah kamu? Sate Fasilkom salah satu makanan yang harus kamu coba karena enak dan murah, bahkan cukup terkenal juga di kalangan mahasiswa fakultas lain.",
    img:"../Asset Info Fasilkom/FunFact-Kantin.png"
},{
    text:"Hotspot di Fasilkom UI adalah hotspot tercepat yang ada di UI, lho! Kecepatan maksimalnya bisa mencapai 100mbps! Selain itu jaringannya juga tersebar rata di seluruh penjuru gedung Fasilkom. Cocok banget buat kamu yang lagi krisis kuota.",
    img:"../Asset Info Fasilkom/FunFact-Wifi.svg"
},{
    text:"Satu-satunya gedung di UI yang bentuknya bundar hanya Fasilkom lohh! Gedung fasilkom juga terletak di tengah-tengah UI dan letaknya sangat strategis kalo mau kemana-mana.",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Bentuk Gedung.png"
},{
    text:"Kamu pengen nyobain fastfood di UI? Cuma di Fasilkom kamu ngga usah jauh-jauh mau makan enak soalnya di UI yang punya Yoshinoya cuma Fasilkom loh!.",
    img:"../Asset Info Fasilkom/FunFact-Yoshinoya.jpg"
},{
    text:"Fasilkom sangat ketat dengan yang namanya tindakan plagiarisme maupun itu dalam tugas atau sebagainya. Jadi jangan sampai kamu melakukannya ya atau nanti nilai mata kuliah kamu yang bersangkutan menjadi “E”!",
    img:"../Asset Info Fasilkom/FunFact-Plagiat.svg"
}]

let sliderCont = document.createDocumentFragment();
var index = 0;
DataSlideShow.forEach(obj => {
    let image = document.createElement('img');
    image.className="col-lg-4 img-fluid m-2 align-self-center";
    image.src=obj.img;
    let text = document.createElement('p');
    text.className="col-md-6 text-left m-2 align-self-center";
    text.innerHTML=obj.text;
    let slideCont = document.createElement('div');
    slideCont.className="row justify-content-center align-self-center slide py-4 fadein";
    slideCont.appendChild(image);
    slideCont.appendChild(text);
    // if(index == 0){
    //     slideCont.style.display=null;
    // }else{
    //     slideCont.style.display="none";
    // }
    // index++;
    sliderCont.appendChild(slideCont);
})

document.getElementById("slideshow-container").appendChild(sliderCont);

var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var myTimer;

window.addEventListener("load",function(){
    showSlides(slideIndex);
    myTimer = setInterval(function(){
        plusSlides(1)
    },5000);
})

function plusSlides(n){
    clearInterval(myTimer);
    if(n<0){
        showSlides(slideIndex -= 1);
    }else{
        showSlides(slideIndex += 1);
    }
    myTimer=setInterval(function(){
        plusSlides(1);
    },5000);
}

function showSlides(idx){
    if(idx===slides.length){slideIndex = 0}
    if(idx<0){slideIndex=slides.length-1}
    console.log(slideIndex);
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display="none";
    }
    slides[slideIndex].style.display=null;
}