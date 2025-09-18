function login(){
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value.trim();
    let hasil = document.getElementById("hasil");

    let userBenar = "admin";
    let passBenar = "12345";

    // operator logika AND: username dan password harus benar
    if (username === userBenar && password === passBenar)
    //     {hasil.textContent = "Login berhasil";
    //     hasil.style.color = "green";}
    
    // // operator logika OR: salah satu kosong = gagal login
    // else if(username === "" || password === "") {
    //     hasil.textContent = "Username atau Password tidak boleh kosong";
    //     hasil.style.color = "red";
    // }    

    // // operator logika NOT: jika bukan kombinasi benar = gagal login
    // else if(!(username === userBenar && password === passBenar)) {
    //     hasil.textContent = "Login gagal Username atau Password salah";
    //     hasil.style.color = "red";
    // }
    switch (role) {
        case "admin":
            hasil.textContent = "Login admin berhasil";
            hasil.style.color = "green";
            break
        case "user":
            hasil.textContent = "Login user berhasil";
            hasil.style.color = "blue";
            break
        case "guest":
            hasil.textContent = "Login guest berhasil";
            hasil.style.color = "orange";
            break
        default:
            hasil.textContent = "Role tidak dikenali";
            hasil.style.color = "red";
    }
    else {
        hasil.textContent = "Username atau pasword salah";
        hasil.style.color = "red";}
}
