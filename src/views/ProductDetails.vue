<template>
    <div class="product-details container">
      <div v-if="loading">
        <SkeletonLoader :count="1" />
      </div>
      <div v-else class="details">
        <div class="image-container">
          <img
            :src="product.image || 'https://via.placeholder.com/300'"
            alt="Product"
            class="product-image"
          />
        </div>
        <div class="info">
          <h2>{{ product.name }}</h2>
          <p class="price">$ {{ product.price.toFixed(2) }}</p>
          <p class="description">{{ product.description }}</p>
          <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SkeletonLoader from "@/components/SkeletonLoader.vue";
  
  export default {
    name: "ProductDetails",
    components: { SkeletonLoader },
    data() {
      return {
        loading: true,
        product: null,
      };
    },
    mounted() {
      // Simulate API call delay
      setTimeout(() => {
        this.fetchProduct();
      }, 1000);
    },
    methods: {
      fetchProduct() {
        // Replace this with an API call using Axios
        const mockProduct = {
          id: this.$route.params.id,
          name: "Product A",
          price: 100,
          description: "This is a detailed description of Product A.",
          image: "https://via.placeholder.com/300",
        };
        this.product = mockProduct;
        this.loading = false;
      },
      addToCart() {
        alert(`${this.product.name} added to cart!`);
      },
    },
  };
  </script>
  
  <style scoped>
  .product-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem;
  }
  .image-container {
    flex: 1;
    text-align: center;
  }
  .product-image {
    max-width: 100%;
    height: auto;
  }
  .info {
    flex: 1;
  }
  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }
  .description {
    margin-top: 1rem;
    font-size: 1rem;
    color: #555;
  }
  @media (max-width: 768px) {
    .product-details {
      flex-direction: column;
      text-align: center;
    }
  }
  </style>
  