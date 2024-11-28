// Get the carousel element
const carousel = new bootstrap.Carousel(
  document.getElementById("imageCarousel")
);

// Get all dot elements
const dots = document.querySelectorAll(".dot");

// Add click event listeners to each dot
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Update the carousel to the selected slide
    carousel.to(index);

    // Update active class for dots
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

// Update the dot's active class when the carousel slides
document
  .getElementById("imageCarousel")
  .addEventListener("slid.bs.carousel", (event) => {
    dots.forEach((d) => d.classList.remove("active"));
    dots[event.to].classList.add("active");
  });

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleIndicators");
  const dots = document.querySelectorAll(".dot");

  // Fungsi untuk mengatur dot yang aktif
  function updateActiveDot(index) {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Event listener saat carousel berubah slide
  carousel.addEventListener("slide.bs.carousel", function (event) {
    updateActiveDot(event.to); // 'to' memberikan index slide tujuan
  });

  // Event listener untuk klik pada dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      const carouselInstance = bootstrap.Carousel.getInstance(carousel);
      carouselInstance.to(index); // Pindah ke slide yang sesuai
    });
  });
});

// slide

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop", // Slider akan melingkar
    perPage: 3, // Tampilkan 3 slide sekaligus
    gap: "1rem", // Jarak antar slide
    autoplay: true, // Slider berjalan otomatis
    height: "200px", // Sesuai dengan tinggi yang Anda tentukan
    arrows: false,
  }).mount();
});
