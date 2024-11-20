<template>
    <div style="padding:100px;" class="checkout container my-5">
      <h2 class="text-center">Checkout</h2>
      
      <!-- Cart Summary -->
      <div class="cart-summary">
        <h4>Order Summary</h4>
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <p>{{ item.title }} x {{ item.quantity }} - ${{ item.price * item.quantity }}</p>
        </div>
        <hr />
        <p class="fs-4 text-end">Total: ${{ totalAmount }}</p>
      </div>
  
      <!-- Shipping Address Form -->
      <div class="shipping-address mt-4">
        <h4>Shipping Address</h4>
        <form @submit.prevent="submitOrder">
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="name" v-model="address.name" required />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" v-model="address.address" required />
          </div>
          <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" v-model="address.city" required />
          </div>
          <div class="mb-3">
            <label for="postalCode" class="form-label">Postal Code</label>
            <input type="text" class="form-control" id="postalCode" v-model="address.postalCode" required />
          </div>
  
          <!-- Payment Method -->
          <div class="mb-3">
            <label for="payment" class="form-label">Payment Method</label>
            <select class="form-select" id="payment" v-model="paymentMethod" required>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>
  
          <!-- Submit Order Button -->
          <button type="submit" class="btn btn-success w-100">Place Order</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Checkout",
    data() {
      return {
        cartItems: [
          { title: "Product A", price: 50, quantity: 1 },
          { title: "Product B", price: 70, quantity: 2 },
        ],
        address: {
          name: "",
          address: "",
          city: "",
          postalCode: "",
        },
        paymentMethod: "creditCard",
      };
    },
    computed: {
      totalAmount() {
        return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
      },
    },
    methods: {
      submitOrder() {
        // Process the order (e.g., send data to backend, clear cart, etc.)
        alert(`Order placed successfully with total amount: $${this.totalAmount}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .checkout h2 {
    margin-bottom: 2rem;
  }
  
  .cart-summary {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .cart-summary hr {
    border-top: 1px solid #ddd;
  }
  
  .shipping-address form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  button[type="submit"] {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 0.75rem;
    font-size: 1.1rem;
  }
  </style>
  