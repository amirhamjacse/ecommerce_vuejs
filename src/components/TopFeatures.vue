<template>
    <div class="container my-4 shadow-sm p-3 bg-white rounded">
      <div class="row text-center">
        <div class="col-md-3">
          <i class="bi bi-truck fs-1 text-primary"></i>
          <h6 class="mt-2">Free Shipping</h6>
          <p class="text-muted">When ordering over $100</p>
        </div>
        <div class="col-md-3">
          <i class="bi bi-arrow-counterclockwise fs-1 text-primary"></i>
          <h6 class="mt-2">Free Return</h6>
          <p class="text-muted">Get Return within 30 days</p>
        </div>
        <div class="col-md-3">
          <i class="bi bi-shield-lock fs-1 text-primary"></i>
          <h6 class="mt-2">Secure Payment</h6>
          <p class="text-muted">100% Secure Online Payment</p>
        </div>
        <div class="col-md-3">
          <i class="bi bi-award fs-1 text-primary"></i>
          <h6 class="mt-2">Best Quality</h6>
          <p class="text-muted">Original Product Guaranteed</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TopFeatures",
  };
  </script>
  
  <style scoped>
  .shadow-sm {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  