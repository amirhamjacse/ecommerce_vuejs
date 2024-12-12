<template>
  <div class="product-list container">
    <h1>All Products</h1>
    <div class="row">
      <!-- Left Sidebar for Filters -->
      <div class="col-md-3 mb-4">
        <div class="filters">
          <!-- Search Filter -->
          <div class="filter-group mb-3">
            <input
              type="text"
              class="form-control"
              v-model="searchQuery"
              placeholder="Search products"
              @input="filterProducts"
            />
          </div>

          <!-- Category Filter -->
          <div class="filter-group mb-3">
            <label for="category">Category</label>
            <select
              class="form-control"
              id="category"
              v-model="selectedCategory"
              @change="filterProducts"
            >
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Price Range Filter -->
          <div class="filter-group mb-3">
            <label for="priceRange">Price Range</label>
            <div class="d-flex justify-content-between">
              <!-- Price input fields with fixed width above the slider -->
              <input
                type="number"
                id="minPrice"
                class="form-control"
                v-model="minPrice"
                @input="filterProducts"
                placeholder="Min"
                step="1"
                disabled
                style="width: 100px;"
              />
              <span>-</span>
              <input
                type="number"
                id="maxPrice"
                class="form-control"
                v-model="maxPrice"
                @input="filterProducts"
                placeholder="Max"
                step="1"
                disabled
                style="width: 100px;"
              />
            </div>
          </div>

          <!-- Price Range Slider -->
          <div class="filter-group mb-3">
            <label for="rangeSlider">Price Range ({{ minPrice }} - {{ maxPrice }})</label>
            <input
              type="range"
              class="form-control-range"
              v-model="sliderValue"
              :min="0"
              :max="maxRange"
              @input="syncRangeValues"
              style="width: 100%;"
            />
            <div class="d-flex justify-content-between">
              <span>Start: {{ minPrice }}</span>
              <span>End: {{ maxPrice }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Product List -->
      <div class="col-md-9">
        <!-- Sort By Dropdown (Top Right) -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="sort-by">
            <select
              class="form-control"
              v-model="sortBy"
              @change="sortProducts"
              aria-label="Sort By"
            >
              <option value="default">Sort By</option>
              <option value="priceAsc">Price (Low to High)</option>
              <option value="priceDesc">Price (High to Low)</option>
              <option value="nameAsc">Name (A to Z)</option>
              <option value="nameDesc">Name (Z to A)</option>
            </select>
          </div>
        </div>

        <div v-if="loading">
          <SkeletonLoader :count="6" />
        </div>
        <div v-else class="products row">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="col-6 col-md-3 col-lg-3 mb-4"
          >
            <ProductCard :product="product" @add-to-cart="addToCart" />
          </div>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination d-flex justify-content-center mt-4">
          <button
            class="btn btn-primary"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            Previous
          </button>
          <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            class="btn btn-primary"
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "@/components/ProductCards.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";

export default {
  name: "ProductList",
  components: { ProductCard, SkeletonLoader },
  data() {
    return {
      products: [],
      loading: true,
      searchQuery: "",
      minPrice: 0,
      maxPrice: 1000,
      selectedCategory: "",
      sliderValue: 0, // Will hold slider value
      maxRange: 1000, // Maximum price for slider
      filteredProducts: [],
      categories: [],
      sortBy: "default",
      currentPage: 1, // The current page for pagination
      productsPerPage: 20, // Number of products per page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.productsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.filteredProducts.slice(start, end);
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;

        this.categories = [
          ...new Set(this.products.map((product) => product.category)),
        ];

        this.filteredProducts = this.products;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    filterProducts() {
      let filtered = this.products;

      // Search Filter
      if (this.searchQuery) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Price Range Filter
      if (this.minPrice || this.maxPrice) {
        filtered = filtered.filter(
          (product) =>
            product.price >= this.minPrice && product.price <= this.maxPrice
        );
      }

      // Category Filter
      if (this.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.category === this.selectedCategory
        );
      }

      this.filteredProducts = filtered;
      this.sortProducts(); // Apply sorting after filtering
    },
    syncRangeValues() {
      // Update minPrice and maxPrice based on the slider value
      this.minPrice = this.sliderValue;
      this.maxPrice = this.sliderValue + 100; // example range increment of 100

      this.filterProducts(); // Re-filter products based on the updated price range
    },
    sortProducts() {
      if (this.sortBy === "priceAsc") {
        this.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === "priceDesc") {
        this.filteredProducts.sort((a, b) => b.price - a.price);
      } else if (this.sortBy === "nameAsc") {
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.sortBy === "nameDesc") {
        this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style scoped>
.product-list {
  margin-top: 2rem;
}

.filters {
  position: sticky;
  top: 20px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
}

.filter-group {
  margin-bottom: 1rem;
}

.filter-group label {
  font-weight: bold;
}

.products {
  display: flex;
  flex-wrap: wrap;
  /* gap: 1px; */
}

.product-card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  height: 350px; /* Set a fixed height for product cards */
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
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

/* Sorting */
.sort-by {
  width: 200px;
}

.pagination button {
  margin: 0 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .product-list {
    margin-left: 10px;
    margin-right: 10px;
  }
  .filters {
    margin-bottom: 15px;
  }
}
</style>
