const DataBudaya = [
    [
        "5S (Senyum Sapa Salam Sopan Santun)",
        "Di Fasilkom, kita punya budaya 5S yaitu Senyum Salam Sapa Sopan Santun. Nah 5S ini kita terapkan kepada seluruh elemen Fasilkom mulai dari sesama mahasiswa, dosen, pedagang kantin, janitor, sampai elemen lain di Fasilkom agar rasa kekeluargaan antar warga Fasilkom semakin erat."
],
    [
        "Meja Biru",
        "Di gedung Fasilkom lama, ada beberapa meja biru yang tersebar di gedung Fasilkom. Nah setelah makan, kita tinggal menaruh piring dan gelas kotor kita di meja biru tersebut dan nanti elemen kantin akan membersihkannya."
],
    [
        "Tidak Ada Laptop di Kantin",
        "Khusus di kantin Fasilkom, mulai dari jam 11 siang sampai jam 1 siang, dilarang membuka laptop di meja kantin. Nah, tujuannya itu untuk memberikan tempat bagi orang yang mau makan."
],
    [
        "Silent Three",
        "Setiap waktu shalat dzuhur, ashar, dan maghrib tiba, diharapkan untuk menjaga ketenangan dan tidak membuat kegaduhan di sekitar area mushola agar tidak mengganggu orang yang sedang shalat."
    ],
    [
        "Tidak Membajak Lift",
        "Di Fasilkom, kita juga dilarang untuk membajak lift karena akan mengganggu orang lain yang mau naik lift juga, seperti contohnya: jika kamu mau turun ke bawah menggunakan lift, tapi kamu malah menggunakan lift saat lift itu masih naik ke lantai atas."
    ],
    [
        "Dilarang merokok",
        "Seluruh area di Fasilkom tidak memperbolehkan mahasiswa dan elemen Fasilkom untuk merokok baik di kelas, kantin, dan lingkungan sekitar Fasilkom."
    ]
];

let container = document.createDocumentFragment();

DataBudaya.forEach(obj => {
    let col = document.createElement('div');
    col.classList.add("col-md-6","justify-content-center","py-2","px-3");
    let text = document.createElement('p');
    text.style.textAlign="justify";
    text.textContent=obj[1];
    let title = document.createElement('h3');
    title.style.fontWeight="bold";
    title.textContent=obj[0];
    col.appendChild(title);
    col.appendChild(text);
    container.appendChild(col); 
})
document.getElementById("list-budaya").appendChild(container);