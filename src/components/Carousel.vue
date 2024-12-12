<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://gprmain.sgp1.cdn.digitaloceanspaces.com/dev-gprojukti/test/2fec7a60f2f543269d15deed294d7343-58f294401b95489091560441fa6e6ae1-Router-website-banner1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://gprmain.sgp1.cdn.digitaloceanspaces.com/dev-gprojukti/test/e660fed137684c4ba3cb71a5ff79560f-Pre-ownedlaptopbanner.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://gprmain.sgp1.cdn.digitaloceanspaces.com/dev-gprojukti/test/7641a5787720464ca91cfc286833bb51-ProtonFeaturePhoneWebBanner(2).jpg" class="d-block w-100" alt="...">
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
    margin-top: 30px; /* Default margin for medium to large screens */
  }

  /* Adjust for tablets and smaller screens */
  @media screen and (max-width: 768px) {
    .carousel {
      margin-top: 60px; /* Reduce margin for tablets */
    }
  }

  /* Adjust for phones */
  @media screen and (max-width: 480px) {
    .carousel {
      margin-top: 65px; /* Minimal margin for small phones */
    }
  }

  </style>
  