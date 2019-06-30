let state = {
    partActive:"old",
}

const OldBuilding = [{
    desc:"Gedung Lama",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Bentuk Gedung.png",
    id:"old-0",
    active:true
},{
    desc:"Lantai 1<br>Gedung A",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Lantai 1.png",
    id:"old-1",
    active:false
},{
    desc:"Lantai 1<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 12.png",
    id:"old-2",
    active:false
},{
    desc:"Lantai 2<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 11.png",
    id:"old-3",
    active:false
},{
    desc:"Lantai 3<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 7.png",
    id:"old-4",
    active:false
},{
    desc:"Lantai 4<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 8.png",
    id:"old-5",
    active:false
},{
    desc:"Lantai 5<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 9.png",
    id:"old-6",
    active:false
},{
    desc:"Lantai 6<br>Gedung B",
    img:"../Asset Info Fasilkom/Peta/Gedung Lama/Asset 14.png",
    id:"old-7",
    active:false
}]

let imgComp = document.createDocumentFragment();
Data.forEach(obj =>{
    let imgDOM = document.createElement('img');
    imgDOM.classList.add("fadein","img-fluid","peta","p-1");
    imgDOM.style="height: 80%;width: 80%;";

})