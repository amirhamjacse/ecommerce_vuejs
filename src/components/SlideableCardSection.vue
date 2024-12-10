<template>
    <div class="container my-4">
      <h2 class="section-title my-4">Best Selling Products</h2>
      <!-- Card Container -->
      <div class="card-slider">
        <div class="card-slider-inner" :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }">
          <div class="card-slide" v-for="(product, index) in products" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
        <!-- Navigation Buttons -->
        <button class="btn btn-primary nav-btn left" @click="prevSlide">&lt;</button>
        <button class="btn btn-primary nav-btn right" @click="nextSlide">&gt;</button>
      </div>
      <!-- Button to View All Products -->
      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-primary">See All Products</button>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCardsList.vue'; // Adjust the import path as necessary
  
  export default {
    name: 'SlideableCardSection',
    components: {
      ProductCard,
    },
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        currentIndex: 0,
        cardWidth: 300, // Width of each card (adjust as necessary)
      };
    },
    methods: {
      nextSlide() {
        if (this.currentIndex < this.products.length - 1) {
          this.currentIndex++;
        }
      },
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .card-slider {
    position: relative;
    display: flex;
    overflow: hidden;
  }
  
  .card-slider-inner {
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .card-slide {
    flex: 0 0 auto;
    width: 300px; /* Width of each card */
    margin-right: 15px; /* Space between cards */
  }
  
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
  }
  
  .nav-btn.left {
    left: 0;
  }
  
  .nav-btn.right {
    right: 0;
  }
  
  .nav-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  </style>
  