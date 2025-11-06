// Menunggu DOM (halaman) selesai dimuat
document.addEventListener("DOMContentLoaded", function() {

    // Efek 'scrolled' pada navigasi
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        // Jika scroll vertikal lebih dari 50 piksel
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Menambahkan highlighting pada menu navigasi sesuai section
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-menu li a');

    // === PERBAIKAN DIMULAI DI SINI ===

    // 1. Ambil nilai --nav-height dari CSS
    const navHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--nav-height'); // Hasilnya: " 70px "
    
    // 2. Konversi string "70px" menjadi angka 70
    const navHeight = parseInt(navHeightValue); 

    // === PERBAIKAN SELESAI ===

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            // 3. Gunakan variabel navHeight (angka) dalam perhitungan
            // Bukan lagi `var(--nav-height)`
            if (pageYOffset >= (sectionTop - navHeight - 1)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // Mencegah form kontak melakukan reload (hanya contoh)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah submit form
        
        // Di sini Anda bisa menambahkan logika pengiriman data (misal: via AJAX/Fetch)
        
        alert('Terima kasih! Pesan Anda (seharusnya) telah terkirim.');
        contactForm.reset(); // Mengosongkan form
    });

}); 