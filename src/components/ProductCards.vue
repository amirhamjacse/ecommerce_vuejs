<template>
    <div class="card product-card">
      <img
        :src="product.image || 'https://via.placeholder.com/150'"
        class="card-img-top"
        alt="Product Image"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">${{ product.price.toFixed(2) }}</p>
        <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
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
    methods: {
      addToCart() {
        alert(`${this.product.name} added to cart!`);
        // In the future, dispatch an action to Vuex or call an API here.
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
  