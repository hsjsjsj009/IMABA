let state = {
    partActive:"old",
    indexActive:0
}

const NewBuilding =[{
    name:"Lantai Dasar",
    img:"../Asset Info Fasilkom/Peta/Gedung Baru/Asset 4.png",
    id:"new-0",
    square:true,
    desc:[
        "A : Pintu Keluar Depan",
        "B : Pintu Keluar Belakang"
    ],
    spcPlace:[
        "Gedung Baru : Newbi (New Building)"
    ]
},{
    name:"Lantai 1",
    img:"../Asset Info Fasilkom/Peta/Gedung Baru/Asset 3.png",
    id:"new-1",
    square:true,
    desc:[
        "A1.01 - A1.03 : Kelas",
        "A1.04 : Lab Komputer"
    ],
    spcPlace:[
        "Balkon : Palkon (Pacil Balkon)"
    ]
},{
    name:"Lantai 2",
    img:"../Asset Info Fasilkom/Peta/Gedung Baru/Asset 5.png",
    id:"new-2",
    square:true,
    desc:[
        "A : Belakang Auditorium",
        "A2.06 - A2.09 : Kelas",
        "A2.01 : Auditorium" 
    ],
    spcPlace:[
        "A : Beldit"
    ]
}]

const OldBuilding = [{
    name:"Denah<br>Gedung",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Bentuk Gedung.png",
    id:"old-0",
    square:true,
    desc:[
        "A : Gedung A (Gedung Belakang)",
        "B : Gedung B (Gedung Tengah)",
        "C : Gedung C (Gedung Depan)",
        "D : Tenda Putih",
        "E : Parkiran Belakang"
    ],
    spcPlace:[
        "Fasilkom : Pacil",
        "1 : Yuli (Kayu Liar)",
        "E : Parbel"
    ]
},{
    name:"Lantai 1<br>Gedung A",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Lantai 1.png",
    id:"old-1",
    square:false,
    desc:[
        "     A      : Lab Babe",
        "1101 - 1109 : Lab Komputer"
    ],
    spcPlace:[
    ]
},{
    name:"Lantai 1<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 12.png",
    id:"old-2",
    square:true,
    desc:[
        "2101 : Aula",
        "2102 : Gudang Aula",
        "A : Perpustakaan Fasilkom"
    ],
    spcPlace:[
        "2102 : Gudal",
        "A : Perpucil (Perpustakaan Pacil)",
        "B : Mebu (Meja)"
    ]
},{
    name:"Lantai 2<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 11.png",
    id:"old-3",
    square:true,
    desc:[
        "A : Cafe Sekre",
        "C : Sekre"
    ],
    spcPlace:[
        "B : Rubem (Ruangan BEM)"
    ]
},{
    name:"Lantai 3<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 7.png",
    id:"old-4",
    square:true,
    desc:[
        "2301-2307 : Kelas"
    ],
    spcPlace:[
    ]
},{
    name:"Lantai 4<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 8.png",
    id:"old-5",
    square:true,
    desc:[
        "2401-2406 : Kelas"
    ],
    spcPlace:[
    ]
},{
    name:"Lantai 5<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 9.png",
    id:"old-6",
    square:true,
    desc:[
        "2501-2503 : Kelas"
    ],
    spcPlace:[
    ]
},{
    name:"Lantai 6<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 14.png",
    id:"old-7",
    square:true,
    desc:[
        "2601 : Lab Komputer",
        "2602-2604 : Kelas"
    ],
    spcPlace:[
    ]
},{
    name:"Lantai 1<br>Gedung C",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 3_1.png",
    id:"old-8",
    square:false,
    desc:[
        "3111-3114 : Kelas",
        "C : Yoshinoya"
    ],
    spcPlace:[
        "A : Kantiv (Kantin TV)",
        "B : BelYos (Belakang Yoshinoya)"
    ]
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
        let text = document.createElement('h4');
        text.classList.add("text-"+allign,"mb-3");
        text.innerHTML = obj;
        olDOM.appendChild(text);
    })
    return olDOM;
}

function changeMap(index){
    let temp1=document.getElementsByClassName("peta");
    let olDOM1 = document.getElementById("map-desc");
    let olDOM2 = document.getElementById("istilah-tempat");
    olDOM1.innerHTML="";
    olDOM2.innerHTML="";
    for(let i = 0;i<temp1.length;i++){
        temp1[i].style.display="none";
    }
    if(state.partActive === "old"){
        document.getElementById("desc-lantai").innerHTML=OldBuilding[index].name;
        olDOM1.appendChild(createDesc(OldBuilding[index].desc,"left"));
        if(OldBuilding[index].spcPlace.length != 0){
            olDOM2.appendChild(createDesc(OldBuilding[index].spcPlace,"left"));
        }else{
            let h4 = document.createElement('h4');
            h4.innerHTML="Tidak Ada";
            h4.classList.add("text-center");
            olDOM2.appendChild(h4);
        }
    }else if(state.partActive == "new"){
        document.getElementById("desc-lantai").innerHTML=NewBuilding[index].name;
        olDOM1.appendChild(createDesc(NewBuilding[index].desc,"left"));
        if(OldBuilding[index].spcPlace.length != 0){
            olDOM2.appendChild(createDesc(NewBuilding[index].spcPlace,"left"));
        }else{
            let h4 = document.createElement('h4');
            h4.innerHTML="Tidak Ada";
            h4.classList.add("text-center");
            olDOM2.appendChild(h4);
        }
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
