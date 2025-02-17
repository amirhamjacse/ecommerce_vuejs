<template>
  <div style="padding:100px;" class="cart container">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty. Add some products!</p>
    </div>
    <div v-else class="cart-items">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="cart-item row align-items-center"
      >
        <div class="col-12 col-md-3">
          <img
            :src="item.image || 'https://via.placeholder.com/100'"
            alt="Product"
            class="cart-image"
          />
        </div>
        <div class="col-6 col-md-3">
          <p class="product-name">{{ item.name }}</p>
          <p class="product-price"> {{ item.price.toFixed(2) }}৳</p>
        </div>
        <div class="col-6 col-md-4 d-flex justify-content-center align-items-center">
          <div class="quantity-controls d-flex align-items-center">
            <button
              class="btn-circle"
              @click="decreaseQuantity(item.id)"
              :disabled="item.quantity <= 1"
            >
              -
            </button>
            <span class="quantity mx-2">{{ item.quantity }}</span>
            <button
              class="btn-circle"
              @click="increaseQuantity(item.id)"
            >
              +
            </button>
          </div>
          <button class="btn btn-danger m-4" @click="removeFromCart(item.id)">
            Remove
          </button>
        </div>
      </div>

      <div class="cart-total text-end mt-4">
        <h4>Total:  {{ total.toFixed(2) }}৳</h4>
        <button class="btn btn-success" @click="goToCheckout">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      // Initialize cartItems from localStorage or empty array if none exists
      cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    // Update cartItems in localStorage whenever the cart is modified
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    
    increaseQuantity(id) {
      const item = this.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        this.saveCart(); // Save updated cart to localStorage
      }
    },
    
    decreaseQuantity(id) {
      const item = this.cartItems.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        this.saveCart(); // Save updated cart to localStorage
      }
    },
    
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
      this.saveCart(); // Save updated cart to localStorage
    },

    goToCheckout() {
      this.$router.push({ name: "Checkout" });
    },
  },
  watch: {
    // Watch cartItems to save to localStorage on changes
    cartItems: {
      handler() {
        this.saveCart();
      },
      deep: true, // Ensure to watch nested changes (like quantity change)
    },
  },
};
</script>

<style scoped>
/* Your existing styles */
.cart-items {
  margin-top: 1rem;
}
.cart-item {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background: #f9f9f9;
}
.cart-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
}
.product-name {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
}
.product-price {
  color: #007bff;
  font-size: 1rem;
}
.quantity-controls {
  gap: 1rem;
  justify-content: center;
}
.quantity {
  font-size: 1.2rem;
  font-weight: bold;
  width: 2rem;
  text-align: center;
}
.btn-circle {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.btn-circle:hover {
  background-color: #0056b3;
}
.cart-total h4 {
  font-size: 1.5rem;
  font-weight: bold;
}
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    text-align: center;
  }
  .quantity-controls {
    justify-content: center;
  }
}
</style>
