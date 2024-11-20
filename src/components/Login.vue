<template>
    <div style="padding-top: 50px;" class="login container my-5">
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="handleLogin" class="mt-4">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
          />
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </div>
        <p class="text-center mt-3">
          Don't have an account? 
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        // Logic to handle login
        console.log(`Email: ${this.email}, Password: ${this.password}`);
        alert("Login successful!"); // Replace with real authentication logic
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  