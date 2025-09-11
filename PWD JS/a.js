document.writeln("<CENTER>")
document.writeln("<HR WIDTH=600 COLOR=Black>")
document.writeln("<H1>UNIVERSITAS</H1>")
document.writeln("<H2>FAKULTAS</H2>")
document.writeln("<H3>JURUSAN</H3>")
document.writeln("<HR WIDTH=600 COLOR=Black>")
document.writeln("</CENTER>")
//
document.writeln("<PRE>")
document.writeln("<h1>Operasi Aritmatik</h1>")
var A = "100";
var B = "200";
var C = 300;
var D = 400;
var E = A + B;
document.writeln('"100" + "200" = ' + E);
E = B + C;
document.writeln('"200" + 200 =     ' + E);
E = C + D;
document.writeln('300 + 400 = ' + E);
document.writeln("<PRE>");
//
function jumlah(){
    var bil1 = parseFloat(document.fform.bilangan1.value);
    if (isNaN (bil1)) 
        bill = 0.0;

    var bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN (bil2))
        bil1 = 0.0;

    var hasil = bil1 + bil2;
    alert ("Hasil Penjumlahan = " + hasil)
}
function tekan(){
    var namastr   = (document.fform.nama.value);
    var alamatstr = (document.fform.alamat.value);
    document.fform.onama.value   = namastr;
    document.fform.oalamat.value = alamatstr;
}