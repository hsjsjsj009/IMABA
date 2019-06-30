let state = {
    partActive:"old",
    indexActive:0
}

const OldBuilding = [{
    name:"Gedung<br>Lama",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Bentuk Gedung.png",
    id:"old-0",
    square:true,
    desc:[
        "A : Gedung A (Gedung Belakang)",
        "B : Gedung B (Gedung Tengah)",
        "C : Gedung C (Gedung Depan)",
        "D : Tenda Putih"
    ],
    spcPlace:[
        "1 : Yuli (Kayu Liar)"
    ]
},{
    name:"Lantai 1<br>Gedung A",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Lantai 1.png",
    id:"old-1",
    square:false,
    desc:[

    ]
},{
    name:"Lantai 1<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 12.png",
    id:"old-2",
    square:true
},{
    name:"Lantai 2<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 11.png",
    id:"old-3",
    square:true
},{
    name:"Lantai 3<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 7.png",
    id:"old-4",
    square:true
},{
    name:"Lantai 4<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 8.png",
    id:"old-5",
    square:true
},{
    name:"Lantai 5<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 9.png",
    id:"old-6",
    square:true
},{
    name:"Lantai 6<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 14.png",
    id:"old-7",
    square:true
},{
    name:"Lantai 1<br>Gedung C",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 3_1.png",
    id:"old-8",
    square:false

}]

let imgComp = document.createDocumentFragment();
OldBuilding.forEach(obj =>{
    let imgDOM = document.createElement('img');
    imgDOM.classList.add("fadein","img-fluid","peta","p-1");
    if(obj.square){
        imgDOM.style="max-height: 80%;max-width: 80%; background-color: #6262627d; border-radius: 10px;";    
    }else{
        imgDOM.style="max-height: 80%;max-width: 50%; background-color: #6262627d; border-radius: 10px;";
    }
    imgDOM.src=obj.img;
    imgDOM.id =obj.id;
    imgDOM.style.display="none";
    imgComp.appendChild(imgDOM);
})
document.getElementById("map-image").appendChild(imgComp);

function createDesc(list){
    let olDOM = document.createElement('ol');
    list.forEach(obj => {
        let text = document.createElement('h4');
        text.classList.add("text-left","mb-3");
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
        olDOM1.appendChild(createDesc(OldBuilding[index].desc));
        olDOM2.appendChild(createDesc(OldBuilding[index].spcPlace));
    }
    document.getElementById(state.partActive+"-"+index.toString()).style.display="";
}

function nextMap(){
    state.indexActive += 1;
    if(state.indexActive>OldBuilding.length-1){
        state.indexActive = 0;
    }
    changeMap(state.indexActive);
}

function prevMap(){
    state.indexActive -= 1;
    if(state.indexActive<0){
        state.indexActive = OldBuilding.length-1;
    }
    changeMap(state.indexActive);
}

changeMap(0);
