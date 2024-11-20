<template>
    <footer class="footer bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <!-- About Us Section -->
          <div class="col-md-3">
            <h5 class="footer-title">About Us</h5>
            <p class="footer-text">
              We are a leading eCommerce platform providing a variety of products at affordable prices. Shop with us for the best deals and quality products.
            </p>
          </div>
          
          <!-- Quick Links Section -->
          <div class="col-md-3">
            <h5 class="footer-title">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Home</a></li>
              <li><a href="#" class="text-white">Shop</a></li>
              <li><a href="#" class="text-white">About</a></li>
              <li><a href="#" class="text-white">Contact Us</a></li>
              <li><a href="#" class="text-white">Privacy Policy</a></li>
              <li><a href="#" class="text-white">Terms of Service</a></li>
            </ul>
          </div>
  
          <!-- Contact Info Section -->
          <div class="col-md-3">
            <h5 class="footer-title">Contact Information</h5>
            <ul class="list-unstyled">
              <li><i class="bi bi-geo-alt"></i> 1234 Market Street, City, Country</li>
              <li><i class="bi bi-phone"></i> +123 456 7890</li>
              <li><i class="bi bi-envelope"></i> support@store.com</li>
            </ul>
          </div>
  
          <!-- Newsletter Section -->
          <div class="col-md-3">
            <h5 class="footer-title">Subscribe to Our Newsletter</h5>
            <p class="footer-text">Stay updated with our latest products and offers. Subscribe to our newsletter!</p>
            <form @submit.prevent="subscribeNewsletter">
              <div class="input-group">
                <input type="email" class="form-control" placeholder="Enter your email" v-model="email" required />
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
  
        <!-- Social Media Links -->
        <div class="social-links text-center mt-4">
          <a href="#" class="text-white mx-3">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="text-white mx-3">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" class="text-white mx-3">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="text-white mx-3">
            <i class="bi bi-youtube"></i>
          </a>
        </div>
  
        <!-- Footer Bottom -->
        <div class="footer-bottom text-center mt-4">
          <p class="footer-text">&copy; 2024 Your Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data() {
      return {
        email: ""
      };
    },
    methods: {
      subscribeNewsletter() {
        alert(`Subscribed with email: ${this.email}`);
        this.email = ""; // Clear the email field after subscription
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #222;
    color: #fff;
  }
  
  .footer-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .footer-text {
    font-size: 0.875rem;
  }
  
  .list-unstyled li {
    margin-bottom: 0.5rem;
  }
  
  .list-unstyled a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
  }
  
  .list-unstyled a:hover {
    color: #ffc107;
  }
  
  .social-links i {
    font-size: 1.5rem;
  }
  
  .social-links a {
    color: #fff;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: #ffc107;
  }
  
  .footer-bottom {
    font-size: 0.75rem;
    margin-top: 2rem;
  }
  
  .input-group {
    max-width: 400px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  