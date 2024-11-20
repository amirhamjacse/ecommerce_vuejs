<template>
    <div class="category-card card">
      <img :src="category.image" class="card-img-top" alt="Category Image" />
      <div class="card-body">
        <h5 class="card-title">{{ category.title }}</h5>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoryCard",
    props: {
      category: Object,
    },
  };
  </script>
  
  <style scoped>
  .category-card {
    max-width: 200px;
    text-align: center;
  }
  .card-img-top {
    height: 150px;
    object-fit: cover;
  }
  </style>
  