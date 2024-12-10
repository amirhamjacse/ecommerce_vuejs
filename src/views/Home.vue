<template>
  <div class="home">
    <!-- Slideable Image Banner -->
    <div class="banner container-fluid">
     <div class="carousel-size">
         <Carousel />
       </div>
     </div>

    <TopFeatures />

    <CategoryCarousel/>

    <!-- <ProductCarDs /> -->

    <!-- Category Cards -->
    <!-- <div class="categories container-fluid">
      <h2 class="section-title">Categories</h2>
      <div class="row">
        <ProductCarDs v-for="category in categories" :key="category.id" :category="category" />
      </div>
    </div> -->


   <!-- <div class="container my-4">
    <h2 class="section-title my-4">New Arrived</h2>
    <div class="row"> -->
      <!-- <CarousalProd/> -->
        <!-- v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div> 
    </div>  -->
    <!-- <div class="d-flex justify-content-end mt-4">
        <button class="btn btn-outline-primary btn-lg shadow hover-scale">See All Products</button>
      </div> -->
    <!-- See All Products Button -->
    <!-- <div class="d-flex justify-content-end mt-3">
      <button class="btn btn-primary">See All Products</button>
    </div>
  </div> -->

    <div class="container my-4">
    <!-- <h2 class="section-title my-4">Best Selling Products</h2> -->
    <h2 class="section-title text-start my-4">Deal of the Day</h2>
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <!-- <div class="d-flex justify-content-end mt-4">
        <button class="btn btn-outline-primary btn-lg shadow hover-scale">See All Products</button>
      </div> -->
    <!-- See All Products Button -->
    <div class="d-flex justify-content-end mt-3">
      <button class="btn btn-primary">See All Products</button>
    </div>
  </div>

    
    <!-- <div class="container my-4">
      <h2 class="section-title my-4">Deal of the Day</h2>
      <div class="row">
        <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        />
      </div>
    </div> -->
    
    <div class="container my-4">
      <h2 class="section-title my-4">Best Selling Products</h2>
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="d-flex justify-content-end mt-3">
      <button class="btn btn-primary">See All Products</button>
    </div>
  </div>
  
    <div class="container my-4">
      <h2 class="section-title my-4">Featured Products</h2>
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="d-flex justify-content-end mt-3">
      <button class="btn btn-primary">See All Products</button>
    </div>
  </div>

    <!-- Deal of the Day -->
    <!-- <div class="deal-of-the-day container-fluid">
      <div class="row">
        <ProductCards v-for="deal in dealOfTheDay" :key="deal.id" :product="deal" />
      </div>
    </div> -->

    <!-- Best Selling Products -->
      <!-- <div class="best-selling container">
      <h2 class="section-title">Best Selling Products</h2>
      <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>  -->

    <!-- Featured Products -->
    <!-- <div class="featured-products container-fluid">
      <h2 class="section-title">Featured Products</h2>
      <div class="row">
        <ProductCards v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </div> -->
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import CategoryCard from "@/components/CategoryCard.vue";
import ProductCards from "@/components/ProductCards.vue";
import TopFeatures from "@/components/TopFeatures.vue";
import CategoryCarousel from "@/components/CatagoriesCarousel.vue";
import ProductCard from "@/components/ProductCardsList.vue";
import CarousalProd from "@/components/SlideableCardSection.vue";
// import ProductList from "@/components/ProductList.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Carousel, CategoryCard, ProductCards, TopFeatures, CategoryCarousel, ProductCard, CarousalProd},
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
      products: [],
    };
  },
  mounted() {
    // this.fetchProducts();
    this.products = [
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
        id: 2,
        name: "Bluetooth Mouse",
        category: "Electronics, Office Electronics",
        image: "https://via.placeholder.com/300",
        price: 115.0,
        originalPrice: 129.0,
        rating: 4.2,
        reviews: 2,
      },
    ];
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data;
        console.log(this.products, 'working product fetch')
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart(product) {
      alert(`${product.title} added to cart!`);
      // Implement cart logic here, e.g., using Vuex or an API call.
    },

  }
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

.carousel-size {
  margin-left: auto;
  margin-right: auto;
  padding-left: 280px; /* Adjust as needed */
  padding-right: 280px; /* Adjust as needed */
  max-width: 100%;
  box-sizing: border-box;
}


.product-card, .category-card {
  max-width: 200px;
}

.card-img-top {
  object-fit: cover;
  height: 150px;
}
</style>
