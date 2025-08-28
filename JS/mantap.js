function tombol1(){
    var hasil = confirm("Apakah anda yakin akan ke petanikode?");
    if (hasil) {
        window.location = "https://www.petanikode.com";
    } 
    else {
        document.write("Baiklah, tetap di sini saja ya :v");
    }
    
}

function tombol2(){
    var nama = prompt("Siapa nama kamu?");
    document.write("<p>Helloo "+ nama +" Semangat </p>");
}

function tombol3(){
    alert("BELAJAR YG BENAR WOI!");
}

function tombol4(){
    var umurPengunjung = prompt("Umur kamu berapa?", 0);
    var panggilan = "";
    
    if(umurPengunjung <= 10) panggilan = "Bocah"
    else if(umurPengunjung <= 20) panggilan = "Remaja"
    else if(umurPengunjung <= 30) panggilan = "Dewasa"
    else if(umurPengunjung <= 40) panggilan = "Tua"
    else if(umurPengunjung <= 70) panggilan = "Kakek"
    else if(umurPengunjung > 70) panggilan = "Sepuh"

    document.write("<p>Haloo "+ panggilan +" Semangat Belajar Lah Biar Jago!!!!!!!!!!!!!!</p>")

}

function tombol5(){
    var jawab = prompt("Kamu beruntung! Silakan pilih hadiahmu dengan memasukkan angka 1 sampai 5");
    var hadiah = "";
    
    switch(jawab){
        case "1":
            hadiah = "Tisu";
            break;
        case "2":
            hadiah = "1 Kotak Kopi";
            break;
        case "3":
            hadiah = "Sticker";
            break;
        case "4":
            hadiah = "Minyak Goreng";
            break;
        case "5":
            hadiah = "Uang Rp 50.000";
            break;
        default:
            document.write("<p>Opps! anda salah pilih</p>");
    }
    
    if(hadiah === ""){
        document.write("<p>Kamu gagal mendapat hadiah</p>");
    } else {
        document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
    }
}

function tombol6(){
    var username = prompt("Username:");
    var password = prompt("Password:");
    
    if(username == "Rehan" && password == "777"){
        document.write("<h2>Selamat datang pak bos!</h2>");
    } 
    else if (username !== "Rehan" && password == "777"){
        document.write("<p>Username salah, coba lagi!</p>");
    }
    else if (username == "Rehan" && password !== "777"){
        document.write("<p>Password salah, coba lagi!</p>");
    }
    else if (username !== "Rehan" && password !== "777"){
        document.write("<p>Password dan Username salah, coba lagi!</p>");
    }
}

function tombol7(){
    var pertanyaan = confirm("Apakah kamu berumur di atas 18 tahun?")
    var hasil = pertanyaan ? "Selamat datang" : "Kamu tidak boleh di sini";
    document.write(hasil);
}
function tombol8(){
    var nilai = prompt("input nilai");
    var grade = "";

    switch(true){
        case nilai < 90:
            grade = "A";
            break;
        case nilai < 80:
            grade = "B";
            break;
        case nilai < 70:
            grade = "C";
            break;
        case nilai < 60:
            default:
            grade = "E";
        }
        if(nilai === ""){
            console.log("Kamu gagal lolos");
        } else {
            console.log("Selamat kamu mendapatkan " + nilai);
        }
    }
var a = 5
var b = 1940
var c = a + b
var situsName = "Petani Kode";
var name = "Fadil"
var age = "18"
var visitorCount = 50322; 
var isActive = true;
var url = "https://www.petanikode.com";
var x = 4;
var y = 3;
var hasil = x ^ y;

var haasil = document.getElementById("haasil-output")
haasil.innerHTML = "INI COONTOH getElementById"

//window.alert("Selamat Datang di " + situsName)

console.log("Nama Situs:" + situsName)
console.log("Nama:" + name)
console.log("Umur:" + age)
console.log("Jumlah Pengunnjung:" + visitorCount)
console.log("Status Active:" + isActive)
console.log("Alamat URL: " + url)

document.write("3 + 4 = " + hasil + "<br>")
document.write("Nama Situs:" + situsName + "<br>")
document.write("Nama:" + name + "<br>")
document.write("Umur:" + age + "<br>")
document.write("Alamat URL: " + url + " <br>")
document.write("Indonesia merdeka tahun = " + c + "<br>")

