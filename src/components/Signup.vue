<template>
    <div style="padding-top: 50px;" class="signup container my-5">
      <h2 class="text-center">Sign Up</h2>
      <form @submit.prevent="handleSignup" class="mt-4">
        <div class="mb-3">
          <label for="name" class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="name"
            required
          />
        </div>
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
          <button type="submit" class="btn btn-success w-100">Sign Up</button>
        </div>
        <p class="text-center mt-3">
          Already have an account? 
          <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Signup",
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      handleSignup() {
        // Logic to handle signup
        console.log(`Name: ${this.name}, Email: ${this.email}, Password: ${this.password}`);
        alert("Signup successful!"); // Replace with real signup logic
      },
    },
  };
  </script>
  
  <style scoped>
  .signup {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  