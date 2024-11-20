<template>
    <div class="product-list container-fluid">
      <h1 class="text-center my-4">All Products</h1>
      <div class="row">
        <!-- Loop through the products and display them in a grid -->
        <div
          v-for="product in products"
          :key="product.id" 
          class="col-12 col-md-6 col-lg-2 mb-4"
        >
          <div class="card product-card">
            <img
              :src="product.image || 'https://via.placeholder.com/150'"
              class="card-img-top"
              alt="Product Image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">${{ product.price.toFixed(2) }}</p>
              <button class="btn btn-primary btn-sm" @click="addToCart(product)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductList",
    data() {
      return {
        products: [
          {
            id: 1,
            title: "Product 1",
            price: 29.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            title: "Product 2",
            price: 49.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            title: "Product 3",
            price: 19.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            title: "Product 4",
            price: 99.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            title: "Product 2",
            price: 49.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            title: "Product 3",
            price: 19.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            title: "Product 4",
            price: 99.99,
            image: "https://via.placeholder.com/150",
          },        {
            id: 2,
            title: "Product 2",
            price: 49.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            title: "Product 3",
            price: 19.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            title: "Product 4",
            price: 99.99,
            image: "https://via.placeholder.com/150",
          },        {
            id: 2,
            title: "Product 2",
            price: 49.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            title: "Product 3",
            price: 19.99,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            title: "Product 4",
            price: 99.99,
            image: "https://via.placeholder.com/150",
          },
          // Add more products as needed
        ],
      };
    },
    methods: {
      addToCart(product) {
        this.$emit("add-to-cart", product); // Emit event to parent component
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  .card-img-top {
    height: 150px;
    object-fit: cover;
  }
  .card-body {
    text-align: center;
  }
  </style>
  