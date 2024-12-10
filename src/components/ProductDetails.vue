<template>
    <div class="container my-5">
      <div class="row">
        <!-- Product Image Gallery -->
        <div class="col-md-5">
          <div class="d-flex flex-column">
            <div>
              <img :src="product.image" class="img-fluid main-image" alt="Product" />
            </div>
            <div class="d-flex mt-3">
              <img
                v-for="(img, index) in product.images"
                :key="index"
                :src="img"
                class="img-thumbnail me-2"
                style="width: 70px; height: 70px; object-fit: cover;"
                alt="Product thumbnail"
              />
            </div>
          </div>
        </div>
        <!-- Product Information -->
        <div class="col-md-7">
          <h2>{{ product.name }}</h2>
          <p class="text-muted mb-1">SKU: {{ product.sku }} | CATEGORY: {{ product.category }}</p>
          <h4 class="text-danger mb-3">${{ product.price }}</h4>
          <p>{{ product.description }}</p>
          <div class="d-flex align-items-center mb-3">
            <button class="btn btn-primary me-2">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
            <button class="btn btn-outline-secondary">
              <i class="bi bi-heart"></i> Add to Wishlist
            </button>
          </div>
          <div>
            <h6>Features</h6>
            <ul>
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "Converse Training Shoes",
          sku: "123456",
          category: "Shoes",
          price: 199.0,
          image: "https://via.placeholder.com/500",
          images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
          ],
          description:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
          features: [
            "High-quality materials",
            "Stylish design",
            "Comfortable fit",
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .main-image {
    max-height: 400px;
    object-fit: contain;
  }
  </style>
  