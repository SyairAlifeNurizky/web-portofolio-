// ==================================================
// MENU ACTIVE
// ==================================================

// Mengambil semua link yang ada di navbar
const menuLinks = document.querySelectorAll(".navbar a");

// Mengambil semua section pada halaman
const sections = document.querySelectorAll("section");


// Ketika menu diklik
menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Menghapus class active dari semua menu
        menuLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Memberikan class active pada menu yang dipilih
        this.classList.add("active");

    });

});


// ==================================================
// SMOOTH SCROLL
// ==================================================

// Ketika salah satu menu diklik
menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Mencegah perpindahan langsung
        event.preventDefault();

        // Mengambil ID tujuan dari href
        const targetId = this.getAttribute("href");

        // Mengambil section tujuan
        const targetSection = document.querySelector(targetId);

        // Melakukan scroll dengan animasi
        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==================================================
// CHART JS
// ==================================================

// Mengambil elemen canvas untuk grafik
const chart = document.getElementById("myChart");


// Membuat grafik
new Chart(chart, {

    // Jenis grafik
    type: "bar",

    data: {

        // Nama data
        labels: [
            "HTML & CSS",
            "Bootstrap",
            "JavaScript",
            "Mekatronika",
            "Git & GitHub"
        ],

        datasets: [

            {
                label: "Tingkat Penguasaan (%)",

                // Data statis
                data: [80, 75, 60, 85, 70],

                borderWidth: 1
            }

        ]

    },

    options: {

        // Grafik dibuat responsive
        responsive: true,

        // Skala sumbu Y
        scales: {

            y: {

                beginAtZero: true,

                max: 100

            }

        }

    }

});