<template>
    <div class="container my-4">
      <h4 class="text-center mb-4">Shop by Brand</h4>
      <div class="d-flex overflow-auto gap-3 justify-content-center py-3">
        <img
          v-for="brand in brands"
          :key="brand.name"
          :src="brand.image"
          :alt="brand.name"
          class="brand-logo"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShopByBrand",
    data() {
      return {
        brands: [
          { name: "Samsung", image: "samsung.jpg" },
          { name: "Acer", image: "acer.jpg" },
          { name: "Asus", image: "asus.jpg" },
          { name: "Razer", image: "razer.jpg" },
          { name: "Xiaomi", image: "xiaomi.jpg" },
          { name: "HP", image: "hp.jpg" },
          { name: "Wave", image: "wave.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .brand-logo {
    width: 100px;
    height: auto;
    transition: transform 0.3s;
    border-radius: 8px;
  }
  .brand-logo:hover {
    transform: scale(1.1);
  }
  </style>
  