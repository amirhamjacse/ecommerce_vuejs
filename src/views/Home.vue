<template>
  <div class="home">
    <!-- Slideable Image Banner -->
    <div class="banner">
      <Carousel />
    </div>

    <!-- Category Cards -->
    <div class="categories container-fluid">
      <h2 class="section-title">Categories</h2>
      <div class="row">
        <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
      </div>
    </div>

    <!-- Deal of the Day -->
    <div class="deal-of-the-day container-fluid">
      <h2 class="section-title">Deal of the Day</h2>
      <div class="row">
        <ProductCards v-for="deal in dealOfTheDay" :key="deal.id" :product="deal" />
      </div>
    </div>

    <!-- Best Selling Products -->
    <div class="best-selling container-fluid">
      <h2 class="section-title">Best Selling Products</h2>
      <div class="row">
        <ProductCards v-for="product in bestSellingProducts" :key="product.id" :product="product" />
      </div>
    </div>

    <!-- Featured Products -->
    <div class="featured-products container-fluid">
      <h2 class="section-title">Featured Products</h2>
      <div class="row">
        <ProductCards v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import CategoryCard from "@/components/CategoryCard.vue";
import ProductCards from "@/components/ProductCards.vue";

export default {
  name: "Home",
  components: { Carousel, CategoryCard, ProductCards },
  data() {
    return {
      loading: true,
      categories: [
        { id: 1, title: "Electronics", image: "https://via.placeholder.com/150" },
        { id: 2, title: "Clothing", image: "https://via.placeholder.com/150" },
        { id: 3, title: "Home Appliances", image: "https://via.placeholder.com/150" },
        { id: 2, title: "Clothing", image: "https://via.placeholder.com/150" },
        { id: 3, title: "Home Appliances", image: "https://via.placeholder.com/150" },
        { id: 2, title: "Clothing", image: "https://via.placeholder.com/150" },
        { id: 3, title: "Home Appliances", image: "https://via.placeholder.com/150" },
        { id: 3, title: "Home Appliances", image: "https://via.placeholder.com/150" },
        // Add more categories
      ],
      dealOfTheDay: [
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },
        { id: 1, title: "Product A", price: 50, image: "https://via.placeholder.com/150" },

      ],
      bestSellingProducts: [
        { id: 2, title: "Product B", price: 70, image: "https://via.placeholder.com/150" },
        { id: 3, title: "Product C", price: 30, image: "https://via.placeholder.com/150" },
        { id: 2, title: "Product B", price: 70, image: "https://via.placeholder.com/150" },
        { id: 3, title: "Product C", price: 30, image: "https://via.placeholder.com/150" },
        { id: 2, title: "Product B", price: 70, image: "https://via.placeholder.com/150" },
        { id: 3, title: "Product C", price: 30, image: "https://via.placeholder.com/150" },
        { id: 2, title: "Product B", price: 70, image: "https://via.placeholder.com/150" },
        { id: 3, title: "Product C", price: 30, image: "https://via.placeholder.com/150" },
        // Add more best selling products
      ],
      featuredProducts: [
        { id: 4, title: "Product D", price: 90, image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product E", price: 40, image: "https://via.placeholder.com/150" },
        { id: 4, title: "Product D", price: 90, image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product E", price: 40, image: "https://via.placeholder.com/150" },
        { id: 4, title: "Product D", price: 90, image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product E", price: 40, image: "https://via.placeholder.com/150" },
        { id: 4, title: "Product D", price: 90, image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product E", price: 40, image: "https://via.placeholder.com/150" },
        { id: 4, title: "Product D", price: 90, image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product E", price: 40, image: "https://via.placeholder.com/150" },
        { id: 4, title: "Product D", price: 90, image: "https://via.placeholder.com/150" },
        { id: 5, title: "Product E", price: 40, image: "https://via.placeholder.com/150" },
        // Add more featured products
      ],
    };
  },
};
</script>

<style scoped>
.banner {
  margin-bottom: 2rem;
}

.categories, .deal-of-the-day, .best-selling, .featured-products {
  margin: 2rem 0;
}

.section-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.row {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.product-card, .category-card {
  max-width: 200px;
}

.card-img-top {
  object-fit: cover;
  height: 150px;
}
</style>
