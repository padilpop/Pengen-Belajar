// --- DATA AWAL ---
let identitasMahasiswa = {
  nama: "Fahdil Raihandi",
  nim: "H1101241035",
  fakultas: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
  prodi: "Sistem Informasi",
  angkatan: "2024",
  email: "h1101241035@student.untan.ac.id"
};
const riwayatStudi = {
  "Semester 1": [{
    kode: "IKSI-110",
    nama: "Aljabar Linear",
    sks: 3,
    nilai: "A"
  }, {
    kode: "IKSI-140",
    nama: "Pemrograman Komputer",
    sks: 4,
    nilai: "A"
  }, {
    kode: "IKSI-160",
    nama: "Manajemen dan Organisasi",
    sks: 3,
    nilai: "B"
  }, {
    kode: "IKSI-161",
    nama: "Manajemen Proses Bisnis",
    sks: 4,
    nilai: "A"
  }, {
    kode: "IKSI-170",
    nama: "Pengantar Teknologi dan Sistem Informasi",
    sks: 4,
    nilai: "B"
  }, {
    kode: "MKWU4X",
    nama: "Bahasa Indonesia",
    sks: 3,
    nilai: "A"
  }],
  "Semester 2": [{
    kode: "IKSI-211",
    nama: "Statistika dan Probabilitas",
    sks: 3,
    nilai: "A"
  }, {
    kode: "IKSI-242",
    nama: "Algoritma dan Struktur Data",
    sks: 3,
    nilai: "A-"
  }, {
    kode: "IKSI-243",
    nama: "Praktikum Algoritma dan Struktur Data",
    sks: 2,
    nilai: "A"
  }, {
    kode: "IKSI-250",
    nama: "Desain dan Manajemen Jaringan",
    sks: 3,
    nilai: "B+"
  }, {
    kode: "IKSI-262",
    nama: "Manajemen Hubungan Pelanggan",
    sks: 3,
    nilai: "A"
  }, {
    kode: "IKSI-280",
    nama: "Perancangan UI/UX",
    sks: 4,
    nilai: "A"
  }],
  "Semester 3": [{
    kode: "MKWK3",
    nama: "Kewarganegaraan",
    sks: 2,
    nilai: "A"
  }, {
    kode: "SI-3014",
    nama: "Pemrograman Web Dasar",
    sks: 2,
    nilai: "B"
  }, {
    kode: "SI-3015",
    nama: "Praktikum Pemrograman Web Dasar",
    sks: 1,
    nilai: "B"
  }, {
    kode: "SI-3016",
    nama: "Manajemen Rantai Pasok",
    sks: 3,
    nilai: "B"
  }, {
    kode: "SI-3017",
    nama: "Manajemen Proyek SI",
    sks: 2,
    nilai: "A"
  }, {
    kode: "SI-3018",
    nama: "Rekayasa Perangkat Lunak",
    sks: 3,
    nilai: "A"
  }, {
    kode: "SI-3019",
    nama: "Basis Data",
    sks: 3,
    nilai: "B"
  }]
};
const initialCourses = [{
  kode: "MKWK3",
  nama: "Kewarganegaraan",
  sks: 2,
  deskripsi: "Pembahasan mengenai identitas nasional, hak dan kewajiban warga negara, serta sistem ketatanegaraan Indonesia."
}, {
  kode: "SI-3014",
  nama: "Pemrograman Web Dasar",
  sks: 3,
  deskripsi: "Pengenalan fundamental pengembangan web, meliputi HTML untuk struktur, CSS untuk styling, dan JavaScript untuk interaktivitas dasar."
}, {
  kode: "SI-3015",
  nama: "Praktikum Pemrograman Web Dasar",
  sks: 2,
  deskripsi: "Sesi praktik untuk mengimplementasikan konsep HTML, CSS, dan JavaScript dalam membangun proyek-proyek web sederhana."
}, {
  kode: "SI-3016",
  nama: "Manajemen Rantai Pasok",
  sks: 3,
  deskripsi: "Studi tentang pengelolaan aliran barang, data, dan keuangan dari pemasok hingga ke konsumen akhir secara efisien."
}, {
  kode: "SI-3017",
  nama: "Manajemen Proyek SI",
  sks: 3,
  deskripsi: "Mempelajari metodologi dalam merencanakan, mengeksekusi, dan mengontrol proyek sistem informasi agar selesai tepat waktu dan anggaran."
}, {
  kode: "SI-3018",
  nama: "Rekayasa Perangkat Lunak",
  sks: 3,
  deskripsi: "Penerapan prinsip-prinsip rekayasa untuk desain, pengembangan, pengujian, dan pemeliharaan perangkat lunak secara sistematis."
}, {
  kode: "SI-3019",
  nama: "Basis Data",
  sks: 3,
  deskripsi: "Pengenalan konsep sistem basis data, perancangan model data relasional, dan penggunaan Structured Query Language (SQL)."
}];
let courses = [...initialCourses];

// --- VARIABEL GLOBAL & SELEKTOR DOM ---
const courseContainer = document.getElementById("course-container");
const detailView = document.getElementById("detail-view");
const detailTitle = document.getElementById("detail-title");
const detailInfo = document.getElementById("detail-info");
const detailDesc = document.getElementById("detail-desc");
const addCourseForm = document.getElementById('add-course-form');
const identitasContainer = document.getElementById('identitas-container');
const editIdentitasBtn = document.getElementById('editIdentitasBtn');
const semesterContainer = document.getElementById('semester-accordion-container');
let chartsInitialized = false;

// --- FUNGSI-FUNGSI RENDER (TAMPILAN) ---
function renderCourse(course) {
  const item = document.createElement("div");
  item.className = "course-item";
  item.innerHTML = `<div class="course-title">${course.nama}</div><div class="course-info">Kode: ${course.kode} | SKS: ${course.sks}</div>`;
  item.addEventListener("click", () => {
    detailTitle.textContent = course.nama;
    detailInfo.textContent = `Kode: ${course.kode} | SKS: ${course.sks}`;
    detailDesc.textContent = course.deskripsi;
    detailView.style.display = "block";
    detailView.scrollIntoView({
      behavior: "smooth"
    });
  });
  courseContainer.appendChild(item);
}

function renderAllCourses() {
  courseContainer.innerHTML = '';
  courses.forEach(renderCourse);
  updateDashboard();
}

function renderIdentitasView() {
  identitasContainer.innerHTML = `
    <div class="profile-field"><span class="profile-label">Nama:</span><span class="profile-value">${identitasMahasiswa.nama}</span></div>
    <div class="profile-field"><span class="profile-label">NIM:</span><span class="profile-value">${identitasMahasiswa.nim}</span></div>
    <div class="profile-field"><span class="profile-label">Fakultas:</span><span class="profile-value">${identitasMahasiswa.fakultas}</span></div>
    <div class="profile-field"><span class="profile-label">Prodi:</span><span class="profile-value">${identitasMahasiswa.prodi}</span></div>
    <div class="profile-field"><span class="profile-label">Angkatan:</span><span class="profile-value">${identitasMahasiswa.angkatan}</span></div>
    <div class="profile-field"><span class="profile-label">Email:</span><span class="profile-value">${identitasMahasiswa.email}</span></div>`;
}

function renderIdentitasEdit() {
  identitasContainer.innerHTML = `
    <div class="profile-field"><label class="profile-label">Nama:</label><input type="text" id="edit-nama" class="profile-input" value="${identitasMahasiswa.nama}"></div>
    <div class="profile-field"><label class="profile-label">NIM:</label><input type="text" id="edit-nim" class="profile-input" value="${identitasMahasiswa.nim}"></div>
    <div class="profile-field"><label class="profile-label">Fakultas:</label><input type="text" id="edit-fakultas" class="profile-input" value="${identitasMahasiswa.fakultas}"></div>
    <div class="profile-field"><label class="profile-label">Prodi:</label><input type="text" id="edit-prodi" class="profile-input" value="${identitasMahasiswa.prodi}"></div>
    <div class="profile-field"><label class="profile-label">Angkatan:</label><input type="text" id="edit-angkatan" class="profile-input" value="${identitasMahasiswa.angkatan}"></div>
    <div class="profile-field"><label class="profile-label">Email:</label><input type="email" id="edit-email" class="profile-input" value="${identitasMahasiswa.email}"></div>`;
}

function renderRiwayatStudi() {
  semesterContainer.innerHTML = '';
  const konversiNilai = {
    "A": 4.0,
    "A-": 3.75,
    "B+": 3.5,
    "B": 3.0,
    "B-": 2.75,
    "C+": 2.5,
    "C": 2.0
  };
  for (const semester in riwayatStudi) {
    const matkul = riwayatStudi[semester];
    let totalSks = 0;
    let totalBobot = 0;
    let tableRows = '';
    matkul.forEach(mk => {
      const bobot = konversiNilai[mk.nilai] || 0;
      totalSks += mk.sks;
      totalBobot += mk.sks * bobot;
      tableRows += `<tr><td>${mk.kode}</td><td>${mk.nama}</td><td>${mk.sks}</td><td>${mk.nilai}</td></tr>`;
    });
    const ipSemester = totalSks > 0 ? (totalBobot / totalSks).toFixed(2) : "0.00";
    const semesterElement = document.createElement('div');
    semesterElement.innerHTML = `
      <button class="semester-header">${semester} <span>&#9660;</span></button>
      <div class="semester-content">
        <table class="custom-table">
          <thead><tr><th>Kode</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
        <div class="semester-summary">Total SKS: ${totalSks} | IP Semester: ${ipSemester}</div>
      </div>`;
    semesterContainer.appendChild(semesterElement);
  }
}

function renderCharts() {
  if (chartsInitialized) return;
  Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  Chart.defaults.plugins.tooltip.backgroundColor = '#333';
  Chart.defaults.plugins.tooltip.titleFont.size = 14;
  Chart.defaults.plugins.tooltip.bodyFont.size = 12;
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 6;
  const ctxJurusan = document.getElementById('chartJurusan').getContext('2d');
  new Chart(ctxJurusan, {
    type: 'bar',
    data: {
      labels: ['Sistem Informasi', 'Informatika', 'Matematika', 'Fisika', 'Kimia', 'Biologi'],
      datasets: [{
        label: 'Jumlah Mahasiswa',
        data: [120, 95, 80, 70, 65, 60],
        backgroundColor: 'rgba(0, 90, 156, 0.7)',
        borderColor: 'rgba(0, 90, 156, 1)',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  const ctxGender = document.getElementById('chartGender').getContext('2d');
  new Chart(ctxGender, {
    type: 'doughnut',
    data: {
      labels: ['Laki-laki', 'Perempuan'],
      datasets: [{
        data: [180, 210],
        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(75, 192, 192, 0.8)'],
        borderColor: ['#fff'],
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            font: {
              size: 14
            }
          }
        }
      }
    }
  });
  const ctxIPK = document.getElementById('chartIPK').getContext('2d');
  new Chart(ctxIPK, {
    type: 'line',
    data: {
      labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
      datasets: [{
        label: 'Rata-rata IPK',
        data: [3.15, 3.22, 3.30, 3.35, 3.40, 3.45],
        fill: true,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          min: 2.5,
          max: 4
        }
      },
      plugins: {
        legend: {
          position: 'top',
          align: 'end'
        }
      }
    }
  });
  chartsInitialized = true;
}

// --- LOGIKA UTAMA & EVENT LISTENERS ---
function updateDashboard() {
  const totalSks = courses.reduce((sum, course) => sum + (course.sks || 0), 0);
  document.getElementById('total-sks').textContent = totalSks;
  document.getElementById('total-courses').textContent = courses.length;
}
const navLinks = document.querySelectorAll('nav ul li a');
const contentSections = document.querySelectorAll('.content-section');

function switchView(viewId) {
  contentSections.forEach(section => section.style.display = 'none');
  document.getElementById(viewId).style.display = 'block';
  if (viewId === 'grafik-view') {
    renderCharts();
  }
  addCourseForm.style.display = (viewId === 'matakuliah-view') ? 'block' : 'none';
  navLinks.forEach(link => {
    link.classList.remove('nav-active');
    if (link.id === `nav-${viewId.split('-')[0]}`) link.classList.add('nav-active');
  });
}
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchView(link.id.replace('nav-', '') + '-view');
  });
});
document.getElementById("addCourseBtn").addEventListener("click", () => {
  const kode = document.getElementById("kode_mk").value.trim().toUpperCase();
  const nama = document.getElementById("nama_mk").value.trim();
  const sks = parseInt(document.getElementById("sks_mk").value.trim());
  const deskripsi = document.getElementById("deskripsi_mk").value.trim();
  if (kode && nama && sks > 0 && deskripsi) {
    courses.push({
      kode,
      nama,
      sks,
      deskripsi
    });
    renderAllCourses();
    document.getElementById("kode_mk").value = "";
    document.getElementById("nama_mk").value = "";
    document.getElementById("sks_mk").value = "";
    document.getElementById("deskripsi_mk").value = "";
  } else {
    alert("Harap isi semua field dengan benar!");
  }
});
editIdentitasBtn.addEventListener('click', () => {
  const isEditMode = editIdentitasBtn.dataset.mode === 'edit';
  if (isEditMode) {
    identitasMahasiswa.nama = document.getElementById('edit-nama').value;
    identitasMahasiswa.nim = document.getElementById('edit-nim').value;
    identitasMahasiswa.fakultas = document.getElementById('edit-fakultas').value;
    identitasMahasiswa.prodi = document.getElementById('edit-prodi').value;
    identitasMahasiswa.angkatan = document.getElementById('edit-angkatan').value;
    identitasMahasiswa.email = document.getElementById('edit-email').value;
    renderIdentitasView();
    editIdentitasBtn.dataset.mode = 'view';
    editIdentitasBtn.textContent = 'Ubah Data';
    editIdentitasBtn.classList.remove('save-button');
    editIdentitasBtn.classList.add('edit-button');
  } else {
    renderIdentitasEdit();
    editIdentitasBtn.dataset.mode = 'edit';
    editIdentitasBtn.textContent = 'Simpan Perubahan';
    editIdentitasBtn.classList.remove('edit-button');
    editIdentitasBtn.classList.add('save-button');
  }
});
semesterContainer.addEventListener('click', function(e) {
  const header = e.target.closest('.semester-header');
  if (!header) return;
  const content = header.nextElementSibling;
  const arrow = header.querySelector('span');
  const isCurrentlyOpen = content.style.maxHeight;
  document.querySelectorAll('.semester-content').forEach(item => {
    if (item !== content) {
      item.style.maxHeight = null;
      item.previousElementSibling.querySelector('span').innerHTML = '&#9660;';
    }
  });
  if (isCurrentlyOpen) {
    content.style.maxHeight = null;
    arrow.innerHTML = '&#9660;';
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    arrow.innerHTML = '&#9650;';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  renderAllCourses();
  renderIdentitasView();
  renderRiwayatStudi();
  switchView('dashboard-view');
});