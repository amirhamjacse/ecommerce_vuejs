<template>
    <div class="container my-4">
      <h2 class="section-title my-4">New Product</h2>
      <!-- Carousel Container -->
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
  
        <!-- Carousel Inner -->
        <div class="carousel-inner">
          <!-- First Slide -->
          <div class="carousel-item active">
            <div class="row">
              <ProductCard
                v-for="(product, index) in products.slice(0, 4)"
                :key="product.id"
                :product="product"
                class="col-md-3"
              />
            </div>
          </div>
          <!-- Second Slide -->
          <div class="carousel-item">
            <div class="row">
              <ProductCard
                v-for="(product, index) in products.slice(4, 8)"
                :key="product.id"
                :product="product"
                class="col-md-3"
              />
            </div>
          </div>
          <!-- Add more slides as needed -->
        </div>
  
        <!-- Carousel Controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Button to View All Products -->
      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-primary">See All Products</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCarousel",
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-inner {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .carousel-item {
    display: flex;
    flex-wrap: wrap;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  