const content = [{
    title:"Mars Fasilkom",
    text:"Samudra laut ilmu<br>Terhampar di hadapanku<br>Cakrawala bersinar<br>Memanggilku ke sana<br><br>Kan kusebrangi lautan,<br>Tak ku kenal putus asa<br>Dengan daya dan upaya,<br>Untuk ilmu komputer",
    middle:false
},{
    title:"Yel-Yel Fasilkom",
    text:"Fasilkom!<br>Fasilkom, ilmu komputer<br>Fasilkom, satu banding seratus<br>Kami elit, kami kompak, kami anak UI<br>MIPA bukan, Teknik bukan, FE apalagi<br>Kami ini fakultas nomor satu di UI<br>Kami cinta Fasilkom, kami bangga Fasilkom<br>Maju terus, Fa-sil-kom!",
    middle:true
},{
    title:"Yel-Yel Komputer",
    text:"Komputer!<br>Masuknya sulit<br>Fasilkom, sarana komplit<br>Fasilkom, kelasnya elit<br>Fasilkom, ilmu komputer, jaya!<br>To be number one, Fa-sil-kom<br>Viva viva viva Fasilkom!",
    middle:false
}]

let containerPart5 = document.createDocumentFragment();
content.forEach(obj => {
    let title = document.createElement('h2');
    title.style.fontWeight="bold";
    title.innerHTML=obj.title;
    let text = document.createElement('p');
    text.innerHTML=obj.text;
    let objContainer = document.createElement('div');
    objContainer.classList.add("col-md-4","text-center","p-2");
    if(obj.middle){
        objContainer.classList.add("part5-middle");
    }
    objContainer.appendChild(title);
    objContainer.appendChild(text);
    containerPart5.appendChild(objContainer);
})
document.getElementById("part5-cont").appendChild(containerPart5);