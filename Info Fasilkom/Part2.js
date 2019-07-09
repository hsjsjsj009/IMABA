let state = {
    partActive:"old",
    indexActive:0
}

const NewBuilding =[{
    name:"Lantai Dasar",
    img:"../Asset Info Fasilkom/Peta/Gedung Baru/Asset 4.png",
    id:"new-0",
    square:false,
    desc:[
        "Gedung Baru : Newbi (New Building)",
        "A : Pintu Keluar Depan",
        "B : Pintu Keluar Belakang"
    ],
    spcPlace:true
},{
    name:"Lantai 1",
    img:"../Asset Info Fasilkom/Peta/Gedung Baru/Asset 3.png",
    id:"new-1",
    square:true,
    desc:[
        "A1.01 - A1.03 : Kelas",
        "A1.04 : Lab Komputer",
        "Balkon : Palkon (Pacil Balkon)"
    ],
    spcPlace:true
},{
    name:"Lantai 2",
    img:"../Asset Info Fasilkom/Peta/Gedung Baru/Asset 5.png",
    id:"new-2",
    square:true,
    desc:[
        "A : Belakang Auditorium (Beldit)",
        "A2.06 - A2.09 : Kelas",
        "A2.01 : Auditorium"
    ],
    spcPlace:true
}]

const OldBuilding = [{
    name:"Denah<br>Gedung",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Denah Gedung.png",
    id:"old-0",
    square:true,
    desc:[
        "Fasilkom : Pacil",
        "1 : Parkiran Motor",
        "2 : Kantin",
        "3 : Belalai",
        "4 : Yuli (Kayu Liar)",
        "5 : Yoshinoya",
        "6 : Dinding Bata",
        "7 : Tenda Putih",
        "8 : Fotokopi Senyum",
        "9 : Parkiran Mobil (Parbel)"
    ],
    spcPlace:true
},{
    name:"Gedung A",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung A.png",
    id:"old-1",
    square:false,
    desc:[
        "Lantai 1-2 :",
        "Lab. Komputer",
        "Lab. Babe (Lembaga Asisten)",
        "Ruang Staf Kemahasiswaan",
        "Ruangan Dosen",
        "Pos Satpam"
    ],
    spcPlace:false
},{
    name:"Lantai 1<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung B Lt 1.png",
    id:"old-2",
    square:true,
    desc:[
        "2101 : Aula",
        "2102 : Gudang Aula (Gudal)",
        "1 : Quiet Room (di lantai 2 Perpustakaan)",
        "2 : Perpus Atas (Lantai 2 Perpistakaan)",
        "3 : Perpustakaan Fasilkom (Perpucil)",
        "4 : Perpus Bawah",
        "5 : Mebu"
    ],
    spcPlace:true
},{
    name:"Lantai 2<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung B Lt 2.png",
    id:"old-3",
    square:true,
    desc:[
        "1 : Sekretariat Fasilkom",
        "4 : Mushola Laki-laki",
        "2 : Sekre Square",
        "3 : Kafe Sekre",
        "5 : Mushola Perempuan",
        "6 : Ruang BEM"
    ],
    spcPlace:true
},{
    name:"Lantai 3<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung B Lt 3.png",
    id:"old-4",
    square:true,
    desc:[
        "2301-2307 : Ruang Kelas"
    ],
    spcPlace:false
},{
    name:"Lantai 4<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung B Lt 4.png",
    id:"old-5",
    square:true,
    desc:[
        "2401-2406 : Ruang Kelas"
    ],
    spcPlace:false
},{
    name:"Lantai 5<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung B Lt 5.png",
    id:"old-6",
    square:true,
    desc:[
        "2501-2504 : Ruang Kelas"
    ],
    spcPlace:false
},{
    name:"Lantai 6<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung B Lt 6.png",
    id:"old-7",
    square:true,
    desc:[
        "2601 : Lab. Komputer",
        "2602-2604 : Ruang Kelas"
    ],
    spcPlace:false
},{
    name:"Gedung C",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/300ppi/Gedung C.png",
    id:"old-8",
    square:false,
    desc:[
        "Lantai 1 :",
        "3111-3114 : Kelas",
        "1 : Kantin",
        "2 : Kantiv (Kantin TV)",
        "4 : BelYos (Belakang Yoshinoya)",
        "5 : Yoshinoya",
        "<br>",
        "Lantai 2-3 :",
        "Ruang Dosen",
        "Ruang Kelas",
        "Microsoft Innovation Center",
        "Lab. Komputer"
    ],
    spcPlace:true
}]

let imgComp = document.createDocumentFragment();
OldBuilding.forEach(obj =>{
    let imgDOM = document.createElement('img');
    imgDOM.classList.add("fadein","img-fluid","peta","p-2");
    if(obj.square){
        imgDOM.style="max-height: 80%;max-width: 80%; background-color: rgb(98, 98, 98); border-radius: 10px;";    
    }else{
        imgDOM.style="max-height: 80%;max-width: 50%; background-color: rgb(98, 98, 98); border-radius: 10px;";
    }
    imgDOM.src=obj.img;
    imgDOM.id =obj.id;
    imgDOM.style.display="none";
    imgComp.appendChild(imgDOM);
})
NewBuilding.forEach(obj =>{
    let imgDOM = document.createElement('img');
    imgDOM.classList.add("fadein","img-fluid","peta","p-1","newbi");
    imgDOM.style="max-height: 100%; background-color: rgb(98, 98, 98); border-radius: 10px;";
    imgDOM.src=obj.img;
    imgDOM.id =obj.id;
    imgDOM.style.display="none";
    imgComp.appendChild(imgDOM);
})
document.getElementById("map-image").appendChild(imgComp);

function createDesc(list,allign){
    let olDOM = document.createElement('div');
    olDOM.classList.add("text-center");
    olDOM.style.fontWeight="normal";
    list.forEach(obj => {
        if(obj.includes("Lantai 1") || obj.includes("Lantai 1-2") || obj.includes("Lantai 2-3")){
            let text = document.createElement('h5');
            text.classList.add("text-"+allign,"mb-2");
            text.innerHTML = obj;
            olDOM.appendChild(text);    
        }else{
            let text = document.createElement('h4');
            text.classList.add("text-"+allign,"mb-2");
            text.style.fontSize="16pt";
            text.innerHTML = obj;
            olDOM.appendChild(text);
        }
    })
    return olDOM;
}

function changeMap(index){
    let temp1=document.getElementsByClassName("peta");
    let olDOM1 = document.getElementById("map-desc");
    let descTitle = document.getElementById("desc-title");
    olDOM1.innerHTML="";
    for(let i = 0;i<temp1.length;i++){
        temp1[i].style.display="none";
    }
    if(state.partActive === "old"){
        document.getElementById("desc-lantai").innerHTML=OldBuilding[index].name;
        descTitle.innerHTML="Keterangan"+(OldBuilding[index].spcPlace ? " / Istilah Tempat:" : ":");
        olDOM1.appendChild(createDesc(OldBuilding[index].desc,"left"));

    }else if(state.partActive === "new"){
        document.getElementById("desc-lantai").innerHTML=NewBuilding[index].name;
        descTitle.innerHTML="Keterangan"+(NewBuilding[index].spcPlace ? " / Istilah Tempat:" : ":");
        olDOM1.appendChild(createDesc(NewBuilding[index].desc,"left"));
    }
    document.getElementById(state.partActive+"-"+index.toString()).style.display="";
}

function nextMap(){
    state.indexActive += 1;
    if(state.partActive === "new"){
        var active = NewBuilding;
    }else{
        var active = OldBuilding;
    }
    if(state.indexActive>active.length-1){
        state.indexActive = 0;
    }
    changeMap(state.indexActive);
}

function prevMap(){
    state.indexActive -= 1;
    if(state.partActive === "new"){
        var active = NewBuilding;
    }else{
        var active = OldBuilding;
    }
    if(state.indexActive<0){
        state.indexActive = active.length-1;
    }
    changeMap(state.indexActive);
}

function changeBuilding(obj){
    var temp = document.getElementsByClassName("map-button");
    for(var i = 0;i<temp.length;i++){
        temp[i].classList.remove("btn-active");
    }
    state.partActive = obj.id;
    obj.classList.add("btn-active");
    changeMap(0);
}

changeMap(0);
