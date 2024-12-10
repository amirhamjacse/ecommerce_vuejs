<template>
    <div class="container my-4">
      <h4 class="text-center mb-4">Deal of the Day</h4>
      <div class="row row-cols-1 row-cols-md-4 g-3">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card h-100 border-0 shadow-sm position-relative">
            <!-- Discount Badge -->
            <span
              v-if="product.discount"
              class="badge bg-danger position-absolute top-0 start-0 m-2"
            >
              {{ product.discount }}% OFF
            </span>
            <!-- Hover Overlay -->
            <div class="card-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
              <button class="btn btn-primary mb-2">Quick View</button>
              <button class="btn btn-success">Add to Cart</button>
            </div>
            <!-- Product Image -->
            <img
              :src="product.image"
              class="card-img-top img-fluid"
              alt="Product"
            />
            <!-- Product Details -->
            <div class="card-body text-center">
              <p class="text-muted mb-1">{{ product.category }}</p>
              <h6 class="card-title">{{ product.name }}</h6>
              <p class="card-text text-danger">
                ${{ product.price }}
                <span
                  class="text-muted text-decoration-line-through"
                  v-if="product.originalPrice"
                >
                  ${{ product.originalPrice }}
                </span>
              </p>
              <div>
                <span class="text-warning me-1">★</span>{{ product.rating }}
                <small class="text-muted">({{ product.reviews }} reviews)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Vans Black All Star Trainer Shoes",
            category: "Shoes",
            image: "https://via.placeholder.com/300",
            price: 98.0,
            originalPrice: 110.0,
            discount: 11,
            rating: 4.0,
            reviews: 1,
          },
          {
            id: 2,
            name: "Bluetooth Mouse",
            category: "Electronics, Office Electronics",
            image: "https://via.placeholder.com/300",
            price: 115.0,
            originalPrice: 129.0,
            rating: 4.2,
            reviews: 2,
          },
          {
            id: 3,
            name: "Cavin Klein Fashion Sheepskin Bag",
            category: "Bags",
            image: "https://via.placeholder.com/300",
            price: 119.0,
            rating: 4.8,
            reviews: 1,
          },
          {
            id: 4,
            name: "Converse Blue Training Shoes",
            category: "Shoes",
            image: "https://via.placeholder.com/300",
            price: 99.0,
            originalPrice: 120.0,
            discount: 18,
            rating: 4.5,
            reviews: 2,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Card Image */
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  /* Overlay Styles */
  .card-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  .card:hover .card-overlay {
    opacity: 1;
  }
  
  /* Discount Badge */
  .badge {
    font-size: 0.75rem;
    padding: 0.4em 0.6em;
  }
  
  /* Card Details */
  .card-body {
    z-index: 2;
    position: relative;
  }
  
  /* Quick View & Add to Cart Buttons */
  .card-overlay .btn {
    width: 80%;
  }
  </style>
  