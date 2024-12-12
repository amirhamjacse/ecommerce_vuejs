<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <a class="navbar-brand ms-0" href="/">E-Shop</a>

        <div class="nav-item ms-4 dropdown hoverable d-none d-lg-block">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/category/1" class="dropdown-item" @click="closeMenu">Category 1</router-link></li>
            <li><router-link to="/category/2" class="dropdown-item" @click="closeMenu">Category 2</router-link></li>
            <li><router-link to="/category/3" class="dropdown-item" @click="closeMenu">Category 3</router-link></li>
          </ul>
        </div>

        <div class="nav-item ms-4 dropdown hoverable d-none d-lg-block">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/category/1" class="dropdown-item" @click="closeMenu">Category 1</router-link></li>
            <li><router-link to="/category/2" class="dropdown-item" @click="closeMenu">Category 2</router-link></li>
            <li><router-link to="/category/3" class="dropdown-item" @click="closeMenu">Category 3</router-link></li>
          </ul>
        </div>

        <!-- Search Box -->
        <form class="d-flex search-container">
          <input
            class="form-control search-box"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />
        </form>

        <!-- Login and Signup buttons for large screens -->
       

        <!-- Cart Link -->
        
        <router-link to="/cart" class="nav-link cart-link position-relative">
          <i class="bi bi-cart"></i>
          <!-- Cart Badge -->
          <span v-if="cartCount > 0" class="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {{ cartCount }}
          </span>
          Cart
        </router-link>
        
        <li class="nav-item d-none d-lg-block">
            <router-link to="/login" class="nav-link ms-3">
              <i class="bi bi-person"></i> Login
            </router-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <router-link to="/signup" class="nav-link ms-3">
              <i class="bi bi-person-plus"></i> Signup
            </router-link>
          </li>


        <!-- Menu Button -->
        <button
          class="menu-btn navbar-toggler ms-3"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <i class="bi bi-list"></i>
        </button>
      </div>
    </nav>

    <!-- Side Menu -->
    <div class="side-menu" :class="{ 'active': isMenuOpen }">
      <div class="side-menu-content">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" @click="closeMenu">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" @click="closeMenu">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" @click="closeMenu">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link" @click="closeMenu">Signup</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
      cartCount: 0,
      localCartSnapshot: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.cartCount = cart.length;
    },
  },
  mounted() {
    this.updateCartCount();

    this.localCartSnapshot = JSON.stringify(localStorage.getItem("cart") || []);
    this.pollInterval = setInterval(() => {
      const currentCartSnapshot = JSON.stringify(localStorage.getItem("cart") || []);
      if (this.localCartSnapshot !== currentCartSnapshot) {
        this.localCartSnapshot = currentCartSnapshot;
        this.updateCartCount();
      }
    }, 500);
  },
  beforeUnmount() {
    clearInterval(this.pollInterval);
  },
};
</script>

<!-- <style scoped>
/* Navbar Styling */
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  z-index: 9999;
}

.navbar .navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar .search-container {
  flex-grow: 1;
  margin: 0 15px;
  display: flex;
  justify-content: center;
}

.navbar .search-box {
  width: 100%;
  max-width: 400px;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
}

.navbar .cart-link {
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
}

.navbar .cart-link:hover {
  color: #007bff;
}

.badge {
  font-size: 0.8rem;
  padding: 5px 7px;
  border-radius: 50%;
}

/* Side Menu Styles */
.side-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: 0.3s;
  z-index: 999;
}

.side-menu.active {
  left: 0;
}

.side-menu .side-menu-content {
  padding-top: 100px;
}

.side-menu .nav-link {
  color: #fff;
  padding: 15px;
  text-decoration: none;
}

.side-menu .nav-link:hover {
  background-color: #444;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .navbar .search-container {
    margin: 0;
    flex-grow: unset;
  }

  .navbar .search-box {
    width: 150px;
    font-size: 0.9rem;
  }

  .navbar .d-none.d-lg-flex {
    display: none;
  }

  .navbar .cart-link {
    order: 2;
  }
}
</style> -->


<style scoped>
/* Navbar Styling */
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  z-index: 9999;
}

.navbar .navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar .search-container {
  flex-grow: 1;
  margin: 0 15px;
  display: flex;
  justify-content: center;
}

.navbar .search-box {
  width: 100%;
  max-width: 400px;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
}

.navbar .cart-link {
  font-size: 1rem;
  color: #555;
  display: flex;
  align-items: center;
}

.navbar .cart-link:hover {
  color: #007bff;
}

.side-menu .nav-link:hover {
  background-color: #444;
}

/* Hoverable Dropdown */
.hoverable:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none; /* Hidden by default */
}

.badge {
  font-size: 0.8rem;
  padding: 5px 7px;
  border-radius: 50%;
}

/* Side Menu Styles */
.side-menu {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transition: 0.3s;
  z-index: 999;
}

.side-menu.active {
  left: 0;
}

.side-menu .side-menu-content {
  padding-top: 100px; /* Offset for navbar */
}

.side-menu .nav-link {
  color: #fff;
  padding: 15px;
  text-decoration: none;
}

.side-menu .nav-link:hover {
  background-color: #444;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .navbar .search-container {
    margin: 0;
    flex-grow: unset;
  }

  .navbar .search-box {
    width: 150px;
    font-size: 0.9rem;
  }
}
</style> 
