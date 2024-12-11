<template>
  <div class="col">
    <div class="card h-100 border-0 shadow-sm position-relative">
      <!-- Discount Badge -->
      <span
        v-if="product.discount"
        class="badge bg-danger position-absolute top-0 start-0 m-2"
      >
        <!-- {{ product.discount }}% OFF -->
        11% OFF
      </span>

      <!-- Hover Overlay (Positioning buttons at the top) -->
      <div class="card-overlay position-absolute top-0 start-0 w-100 d-flex flex-column align-items-center">
        <button class="btn btn-primary mb-2" @click="goToProductDetails">
          Details
        </button>
        <button class="btn btn-success mb-2" @click="addToCart">Add to Cart</button>
      </div>

      <!-- Product Image -->
      <img
        :src="product.image"
        class="card-img-top img-fluid"
        alt="Product"
      />

      <!-- Product Details -->
      <div class="card-body text-center">
        <p class="text-muted mb-1">{{ product.category }}</p>
        <h6 class="card-title">{{ product.name }}</h6>
        <p class="card-text text-danger">
          ${{ product.price }}
          <span
            class="text-muted text-decoration-line-through"
            v-if="product.originalPrice"
          >
            ${{ product.originalPrice }}
          </span>
        </p>
        <div>
          <span class="text-warning me-1">★</span>{{ product.rating }}
          <small class="text-muted">({{ product.reviews }} reviews)</small>
        </div>
      </div>
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
      // Retrieve cart from localStorage or initialize if empty
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      
      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.id === this.product.id);

      if (existingProduct) {
        // If product exists, increment quantity
        existingProduct.quantity++;
      } else {
        // If product doesn't exist, add it to the cart with quantity 1
        cart.push({
          ...this.product,
          quantity: 1,
        });
      }

      // Update localStorage with the new cart
      localStorage.setItem("cart", JSON.stringify(cart));

      // Optional: Provide feedback to the user
      alert(`${this.product.name} has been added to your cart.`);
    },
    goToProductDetails() {
      // Navigate to product details with the product ID
      this.$router.push({ name: "ProductDetails", params: { id: this.product.id } });
    },

  },
};
</script>

<style scoped>
/* Card Image */
.card-img-top {
  height: 200px; /* Set a fixed height */
  object-fit: cover; /* Ensure the image maintains aspect ratio */
}

/* Overlay Styles */
.card-overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Match the height of the parent */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the buttons horizontally */
  justify-content: flex-start; /* Align buttons at the top */
  padding: 20px; /* Optional padding for spacing */
}

.card:hover .card-overlay {
  opacity: 1;
}

/* Discount Badge */
.badge {
  font-size: 0.75rem;
  padding: 0.4em 0.6em;
}

/* Card Details */
.card-body {
  z-index: 2;
  position: relative;
}

/* Quick View & Add to Cart Buttons */
.card-overlay .btn {
  width: 80%; /* Button width */
  margin-bottom: 10px; /* Add margin between buttons */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .card-img-top {
    height: 150px; /* Reduce image height for smaller screens */
  }

  .card-overlay {
    padding: 10px; /* Adjust padding for smaller screens */
  }

  .card-overlay .btn {
    width: 90%; /* Make buttons wider on smaller screens */
  }
}
</style>
