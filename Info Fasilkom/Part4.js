const DataKepanitiaanDPM=[{
    title:"Pemira Fasilkom",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/DPM/Pemira.png",
    text:"Pemira atau Pemilihan Raya IKM Fasilkom UI merupakan sebuah wadah regenerasi kepemimpinan lembaga eksekutif dan legislatif di Fasilkom UI melalui berbagai rangkaian acara. Acara puncak dari Pemira sendiri adalah pemilihan ketua dan wakil ketua BEM dan anggota independen DPM untuk periode selanjutnya."
},{
    title:"PMB (Pembinaan Mahasiswa Baru)",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/DPM/PMB.png",
    text:"PMB adalah rangkaian kegiatan untuk mahasiswa baru dalam rangka memfasilitasi mahasiswa baru untuk beradaptasi, mengenalkan kehidupan kuliah, serta budaya-budaya yang ada di Fasilkom."
}]

const DataKepanitiaanBEM=[{
    title:"Open House Fasilkom (OH Fasilkom)",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/OH.jpg",
    text:"Open House Fasilkom adalah acara tahunan yang diselenggarakan dengan tujuan memberikan publikasi mengenai Fakultas Ilmu Komputer. Melalui acara ini, para siswa sekolah menengah akan dapat mengetahui dan mendapatkan gagasan tentang kehidupan universitas di Fasilkom. Selain itu, peserta Open House juga akan mendapatkan pengetahuan baru tentang bidang kerja teknologi informasi, produk nyata dari teknologi informasi dan kegiatan non-akademik di Fasilkom UI."
},{
    title:"Wisuda Ganjil Fasilkom",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/1x/WISGAN.png",
    text:"Wisuda Ganjil Fakultas Ilmu Komputer adalah acara rutin fakultas yang dilakukan pasca semester ganjil sebagai wujud penghargaan kepada wisudawan dan wisudawati yang telah menyelesaikan studinya"
},{
    title:"Educare",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/1x/EDUCARE.png",
    text:"Educare merupakan sebuah rangkaian kegiatan yang terdiri dari Job dan Scholarship Fair, Seminar dan Talkshow, TOEFL ITP Test, serta Workshop. Educare berfokus untuk mempersiapkan mahasiswa/i di kehidupan pasca kuliah"
},{
    title:"CS League",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/CS League.png",
    text:"Computer Science League atau CS League merupakan kejuaraan futsal terbesar di Fasilkom UI. CS League yang  diadakan oleh Departemen Olahraga dari BEM Fasilkom UI."
},{
    title:"Computers Get Together (CGT)",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/CGT/tesclapper.png",
    text:"Computers Get Together (CGT) merupakan sebuah acara yang diadakan oleh mahasiswa Fakultas Ilmu Komputer Universitas Indonesia yang bertujuan untuk memberikan kebahagiaan kepada seluruh elemen tanpa terkecuali dengan serangkaian acara yang menarik dan tentunya melepas penat seluruh elemen Fasilkom."
},{
    title:"BETIS (Bimbingan Belajar Gratis)",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/1x/Betis.png",
    text:"Bimbingan Belajar Gratis, atau disingkat BETIS adalah sebuah program kerja dari  Pengmas Fasilkom UI yang, seperti namanya, memberikan bimbingan belajar gratis yang dikhususkan untuk murid kelas 3 SMA yang akan melanjutkan ke jenjang perkuliahan. Program  Kerja ini juga dikhususkan untuk kalangan yang kurang mampu."
},{
    title:"COMPFEST",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/COMPFEST/Asset 9.png",
    text:"COMPFEST adalah acara IT tahunan terbesar yang diadakan oleh mahasiswa Fakultas Ilmu Komputer, Universitas Indonesia. Setiap tahunnya, COMPFEST bertujuan untuk memberi dampak bagi masyarakat melalui Academy, Seminar, dan Main Event."
},{
    title:"Wisuda Genap Fasilkom",
    img:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/Panitia/BEM/1x/Wisgen.png",
    text:"Wisuda Genap Fakultas Ilmu Komputer adalah acara rutin fakultas yang dilakukan pasca semester genap sebagai wujud penghargaan kepada wisudawan dan wisudawati yang telah menyelesaikan studinya"
}]

let accordion = document.createDocumentFragment();
let panitiaBEM = document.createElement('div');
panitiaBEM.classList.add("acc-cont","fadein");
panitiaBEM.id="acc-panitia-BEM";
accordion.appendChild(panitiaBEM);
let panitiaDPM = document.createElement('div');
panitiaDPM.classList.add("acc-cont","fadein");
panitiaDPM.style.display="none";
panitiaDPM.id="acc-panitia-DPM";
accordion.appendChild(panitiaDPM);
DataKepanitiaanBEM.forEach(obj => {
    let title = document.createElement('h3');
    title.classList.add("accordion","mx-auto","mb-0");
    title.style="justify-content: center";
    title.innerHTML=obj.title;
    let image = document.createElement('img');
    image.src=obj.img;
    image.classList.add("img-fluid","col-lg-4","align-self-center","p-4");
    let p = document.createElement('p');
    p.classList.add("col-md","text-justify","align-self-center","p-2");
    p.innerHTML=obj.text;
    let cont = document.createElement('div');
    panitiaBEM.appendChild(title);
    cont.classList.add("row","acc-panel","justify-content-center","mx-auto");
    cont.style="width: 85%; transform: translate3d(0,-5px,0); transition: 0.3s all";
    cont.appendChild(image);
    cont.appendChild(p);
    panitiaBEM.appendChild(cont);
})

DataKepanitiaanDPM.forEach(obj => {
    let title = document.createElement('h3');
    title.classList.add("accordion","mx-auto","mb-0");
    title.style="justify-content: center";
    title.innerHTML=obj.title;
    let image = document.createElement('img');
    image.src=obj.img;
    image.classList.add("img-fluid","col-lg-4","align-self-center","p-4");
    let p = document.createElement('p');
    p.classList.add("col-md","text-justify","align-self-center","p-3","mb-4");
    p.innerHTML=obj.text;
    let cont = document.createElement('div');
    panitiaDPM.appendChild(title);
    cont.classList.add("row","acc-panel","justify-content-center","mx-auto");
    cont.style="width: 85%; transform: translate3d(0,-5px,0); transition: 0.3s all";
    cont.appendChild(image);
    cont.appendChild(p);
    panitiaDPM.appendChild(cont);
})

document.getElementById("kepanitiaan-cont").appendChild(accordion);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var expandedPanel = document.querySelector(".acc-active");
    if(expandedPanel && expandedPanel !== this){
        expandedPanel.classList.remove("acc-active");
        var temp = expandedPanel.nextElementSibling;
        temp.style.maxHeight = null;
        temp.classList.remove("pb-5");
    }
    this.classList.toggle("acc-active");
    var panel = this.nextElementSibling;
    panel.classList.toggle("pb-5");
    if(panel.style.maxHeight){
        panel.style.maxHeight=null;
    }else{
        panel.style.maxHeight = panel.scrollHeight + "px"; 
    }
});
}

function changeAcc(obj){
    let temp = document.getElementsByClassName("acc-button");
    let temp2 = document.getElementsByClassName("acc-cont");
    for(var i = 0; i<temp.length;i++){
        temp[i].classList.remove("btn-active");
    }
    for(var i = 0; i<temp2.length;i++){
        temp2[i].style.display="none";
    }
    obj.classList.add("btn-active");
    document.getElementById("acc-"+obj.id).style.display="";
}