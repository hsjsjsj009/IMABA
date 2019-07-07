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

const Data = [{
    id:"bemcs",
    text:"BEM Fasilkom UI",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/1x/BEMCS.png",
    paragraph:"BEM (Badan Eksekutif Mahasiswa) Fasilkom UI adalah badan eksekutif mahasiswa tingkat fakultas yang berada di Fakultas Ilmu Komputer UI. BEM Fasilkom UI. memiliki tugas dan wewenang untuk menjalankan peran eksekutif dalam lingkungan Fasilkom UI. Kegiatan yang diadakan oleh BEM haruslah memenuhi tridharma perguruan tinggi, serta pengimplementasian IT. BEM Fasilkom UI memiliki enam bidang, yaitu bidang relasi, internal, keuangan, kesejahteraan mahasiswa, minat bakat, dan sosial politik, serta satu kontrol internal.",
    sosmed:{
        ig:"bemfasilkomui",
        website:"bem.cs.ui.ac.id",
        fb:"BEM Fasilkom UI",
        line:"@BEMFasilkomUI",
        twitter:"@BEMFasilkomUI"
    },
    active:true
},
{
    id:"dpmcs",
    text:"DPM Fasilkom UI",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/dpm_png.png",
    paragraph:"Dewan Perwakilan Mahasiswa Fasilkom UI merupakan lembaga yang berperan sebagai lembaga legislatif dan memiliki fungsi yudikatif, maka merupakan suatu kewajiban DPM Fasilkom UI untuk melayani IKM Fasilkom UI.",
    sosmed:{
        ig:"dpmfasilkomui",
        twitter:"@DPMFasilkomUI"
    },
    active:false
},
{
    id:"ristek",
    text:"RISTEK",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/1x/RISTEK.png",
    paragraph:"RISTEK adalah organisasi independen di Fakultas Ilmu Komputer, Universitas Indonesia yang bertujuan untuk menumbuhkan minat dan bakat siswa dalam teknologi.<br><br>RISTEK terbagi dalam beberapa Special Interest Group (SIG) yaitu App Development, Data Science, Embedded System, Game Development, NetSOS, UI/UX, dan Web Development.",
    sosmed:{
        line:"@ristekfasilkomui",
        twitter:"@RistekCSUI",
        fb:"Ristek Fasilkom UI"
    },
    active:false
},
{
    id:"sistem",
    text:"SISTEM",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/1x/SISTEM.png",
    paragraph:"SISTEM Fasilkom UI is an organization under Universitas Indonesia’s Computer Science Faculty, specialize in researching all things related to business, information technology, and information system while accommodates students that have an interest in the mentioned fields.<br><br>SISTEM memiliki visi sebagai organisasi yang mewadahi mahasiswa Fasilkom UI yang memiliki minat terhadap hal-hal yang berkaitan dengan sistem informasi, bisnis, dan penerapan teknologi informasi.",
    sosmed:{
        line:"@tfm4120l",
        ig:"sistem_fasilkomui"
    },
    active:false
},
{
    id:"fuki",
    text:"FUKI",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/1x/FUKI.png",
    paragraph:"FUKI (Forum Ukhuwah dan Kajian Islam), adalah Lembaga Dakwah Fakultas yang bertempat di Fasilkom UI. Dengan modal core competence di bidang IT, FUKI mempunyai mimpi besar untuk menyiarkan kekerenan agama Islam ke seluruh dunia! Mimpi besar itu diawali dengan langkah yang cukup besar, menyiarkan Islam ke seluruh elemen Fasilkom.",
    sosmed:{
        website:"fuki.cs.ui.ac.id",
        ig:"fukifasilkom",
        line:"@fukifasilkomui",
        fb:"Fuki Fasilkom UI"
    },
    active:false
},
{
    id:"po",
    text:"PO",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/PO.jpg",
    paragraph:"PO atau Persekutuan Oikumene adalah perkumpulan mahasiswa Kristen Fakultas Ilmu Komputer. PO bersifat terbuka bagi seluruh mahasiswa Fasilkom dari berbagai aliran atau denominasi gereja.",
    sosmed:{
        website:"po.cs.ui.ac.id",
        ig:"pofasilkomui",
        twitter:"@pofasilkomui",
        line:"@rqi6185h"
    },
    active:false
},
{
    id:"kuksa",
    text:"KUKSA",
    class:"py-2",
    logo:"../Asset Info Fasilkom/Logo Kepanitiaan/Logo Kepanitiaan/BO/kuksa-01.png",
    paragraph:"KUKSA atau Keluarga Umat Katolik Sivitas Akademika merupakan perkumpulan mahasiswa Katolik Fakultas Ilmu Komputer.",
    sosmed:{
        ig:"kuksacs"
    },
    active:false
},
]

let menuComp = document.createDocumentFragment();
let infoComp = document.createDocumentFragment();
Data.forEach(element => {
    // Menu Component
        let text = document.createElement('h2');
        text.innerHTML=element.text;
        text.setAttribute('class',element.class);
        text.style.fontSize="22pt";
        let menu = document.createElement('div');
        menu.setAttribute('id',element.id);
        if(element.active){
            menu.setAttribute('class','menu buttonfx slideleft btn-active mx-1');
        }else{
            menu.setAttribute('class','menu buttonfx slideleft mx-1');
        }
        menu.setAttribute('onclick','changeMenu(this)');
        menu.appendChild(text);
        menuComp.appendChild(menu);
    // Info Component
        //image
            let image = document.createElement('img');
            image.src = element.logo;
            image.style.maxHeight="100%";
            image.style.width="100%";
            image.classList.add('img-fluid');
        //text
            let paragraph = document.createElement('p');
            paragraph.innerHTML=element.paragraph;
            let sosmed = document.createElement('p');
            sosmed.classList.add('text-left');
            sosmed.innerHTML+="Akun Sosmed:"
            if(element.sosmed.fb !== undefined){
                sosmed.innerHTML+="<br/>"+"Facebook: " + element.sosmed.fb;
            }
            if(element.sosmed.ig !== undefined){
                sosmed.innerHTML+="<br/>"+"Instagram: "+element.sosmed.ig;
            }
            if(element.sosmed.website !== undefined){
                sosmed.innerHTML+="<br/>"+"Website: "+element.sosmed.website;
            }
            if(element.sosmed.line !== undefined){
                sosmed.innerHTML+="<br/>"+"Line: "+element.sosmed.line;
            }
            if(element.sosmed.twitter !== undefined){
                sosmed.innerHTML+="<br/>"+"Twitter: "+element.sosmed.twitter;
            }
        let info = document.createElement('div');
        info.id=element.id+"-info";
        info.className ="row p-3 m-1 fadein swaped";
        if(element.active){
            info.style="";
        }else{
            info.style.display="none";
        }
        let logoCont = document.createElement('div');
        logoCont.classList.add("col-md-4","m-3","logo");
        logoCont.appendChild(image);
        let paragraphCont = document.createElement('div');
        paragraphCont.classList.add("col-md","m-3","p-3","text");
        paragraphCont.appendChild(paragraph);
        paragraphCont.appendChild(sosmed);
        info.appendChild(logoCont);
        info.appendChild(paragraphCont);
        infoComp.appendChild(info);
});
document.getElementById('menu-part1').appendChild(menuComp);
document.getElementById('bo-container').appendChild(infoComp);

