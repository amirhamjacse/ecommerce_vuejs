<template>
    <div class="container my-5">
      <h4 class="text-center mb-4">Latest Product List</h4>
      <div class="row g-3">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="card product-card h-100">
            <img
              :src="product.image || 'no-image.png'"
              class="card-img-top"
              :alt="product.name"
            />
            <div class="card-body">
              <h6 class="card-title text-truncate">{{ product.name }}</h6>
              <p class="card-text mb-1">{{ product.brand }}</p>
              <p class="card-text fw-bold">Rp. {{ product.price }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <button
                  v-if="product.available"
                  class="btn btn-primary btn-sm rounded-circle"
                >
                  <i class="bi bi-cart"></i>
                </button>
                <span
                  v-else
                  class="badge bg-danger text-white small"
                >
                  Out of stock
                </span>
              </div>
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
            name: "Jess Botsford",
            brand: "HP",
            price: 143,
            image: "laptop.jpg",
            available: true,
          },
          {
            name: "Prof. Deonte Corkery",
            brand: "Acer",
            price: 530,
            image: null,
            available: false,
          },
          {
            name: "Ambrose Jaskolski V",
            brand: "Asus",
            price: 183,
            image: null,
            available: true,
          },
          {
            name: "Dr. Barney Spencer",
            brand: "Acer",
            price: 871,
            image: null,
            available: true,
          },
          {
            name: "Brenna Krajcik Sr.",
            brand: "Samsung",
            price: 310,
            image: null,
            available: true,
          },
          {
            name: "Dr. Cory Schinner Sr.",
            brand: "Acer",
            price: 201,
            image: null,
            available: true,
          },
          {
            name: "Freddy Fadel",
            brand: "Samsung",
            price: 201,
            image: null,
            available: true,
          },
          {
            name: "Hallie Parisian II",
            brand: "Asus",
            price: 137,
            image: null,
            available: true,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  .product-card:hover {
    transform: translateY(-5px);
  }
  .card-img-top {
    height: 150px;
    object-fit: cover;
  }
  .card-title {
    font-size: 14px;
  }
  .card-text {
    font-size: 12px;
  }
  </style>
  