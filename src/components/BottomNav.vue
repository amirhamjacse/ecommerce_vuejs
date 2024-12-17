<template>
    <!-- Bottom Navigation Bar (Visible only on small screens) -->
    <nav class="bottom-nav d-block d-md-none">
      <div class="nav-container">
        <!-- Offers -->
        <a href="/offers" class="nav-item">
          <i class="bi bi-tags"></i>
          <span>Offers</span>
        </a>
  
        <!-- Laptop Mela -->
        <a href="/laptop-mela" class="nav-item">
          <i class="bi bi-laptop"></i>
          <span>Laptop Mela</span>
        </a>
  
        <!-- PC Builder -->
        <a href="/pc-builder" class="nav-item">
          <i class="bi bi-wrench-adjustable"></i>
          <span>PC Builder</span>
        </a>
  
        <!-- Compare -->
        <a href="/compare" class="nav-item">
          <i class="bi bi-arrow-left-right"></i>
          <span>Compare</span>
        </a>
  
        <!-- Account -->
        <a href="/account" class="nav-item">
          <i class="bi bi-person"></i>
          <span>Account</span>
        </a>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "BottomNav",
  };
  </script>
  
  <style scoped>
  /* Bottom Navigation Styles */
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    border-top: 1px solid #ddd;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .nav-container {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }
  
  .nav-item {
    text-align: center;
    color: #333;
    text-decoration: none;
    font-size: 12px;
  }
  
  .nav-item i {
    font-size: 20px;
    display: block;
    margin-bottom: 4px;
    color: #007bff;
  }
  
  .nav-item:hover {
    color: #007bff;
  }
  </style>
  