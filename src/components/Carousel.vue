<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://www.shutterstock.com/shutterstock/photos/2427145619/display_1500/stock-vector-abstract-glowing-wave-lines-on-dark-blue-background-dynamic-wave-pattern-modern-flowing-wavy-2427145619.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://www.shutterstock.com/shutterstock/photos/2225822727/display_1500/stock-vector-abstract-glowing-circle-lines-on-dark-blue-background-geometric-stripe-line-art-design-modern-2225822727.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://www.shutterstock.com/shutterstock/photos/2040404696/display_1500/stock-vector-illustration-vector-graphic-of-abstract-background-modern-design-color-2040404696.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
  };
  </script>
  
  <style scoped>
  .carousel {
  margin-top: 70px; /* Adjust this value for top margin */
}
  /* Add any specific styles for carousel */
  </style>
  