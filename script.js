// Tombol "Lihat Berita"
const button = document.querySelector("button");

button.addEventListener("click", function () {
    document.querySelector(".container").scrollIntoView({
        behavior: "smooth"
    });
});

// Efek sederhana saat kartu berita diklik
const newsCards = document.querySelectorAll(".news-card");

newsCards.forEach(function (card) {
    card.addEventListener("click", function () {
        alert("Berita GGNesia Game akan segera tersedia!");
    });
});
