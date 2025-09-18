function tampilkanPerulangan(){
    let n = parseInt(document.getElementById("angka").value);
    let hasil = document.getElementById("hasil");
    if (isNaN(n)|| n <= 0) {
        hasil.textContent = "Masukkan angka positif"
        hasil.style.color = "red";
        return;
    }
    // gunakan perulangan for
    let output = "Hasil perulangan dari 1 sampai " + n + ": <br>";
    for (let i = 1; i <= n; i++) {
        output += i + "<br>";
    }
    hasil.innerHTML = output;
    hasil.style.color = "black"
}