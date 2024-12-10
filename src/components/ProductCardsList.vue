<template>
    <div class="col">
      <div class="card h-100 border-0 shadow-sm position-relative">
        <!-- Discount Badge -->
        <span
          v-if="product.discount"
          class="badge bg-danger position-absolute top-0 start-0 m-2"
        >
          <!-- {{ product.discount }}% OFF -->
          11% OFF
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
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
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
  