<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div class="container-fluid">
        <!-- Left Side Menu Button (always visible) -->
        <button
          class="menu-btn navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <i class="bi bi-list"></i>
        </button>

        <a class="navbar-brand" href="#">E-Shop</a>

        <!-- Collapsable Menu for Larger Screens (Centered Search and Right-side Links) -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-3 flex-grow-1">
              <form class="d-flex">
                <input
                  class="form-control search-box"
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search"
                />
              </form>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <i class="bi bi-person"></i> Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">
                <i class="bi bi-person-plus"></i> Signup
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                <i class="bi bi-cart"></i> Cart
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Side Menu (Hidden by Default) -->
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
      isMenuOpen: false, // Controls the side menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/close state
    },
    closeMenu() {
      this.isMenuOpen = false; // Close the menu when a link is clicked
    },
  },
};
</script>

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

.navbar-nav {
  align-items: center;
}

.navbar-nav .nav-link {
  font-size: 1rem;
  color: #555;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

/* Search Box */
.navbar .search-box {
  width: 100%;
  max-width: 500px; /* Adjusted to be larger */
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 1rem;
}

/* Center the search box in the navbar */
.navbar-nav > li {
  flex-grow: 1;
  text-align: center;
}

/* Menu Button */
.menu-btn {
  display: inline-block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
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

/* For mobile responsiveness */
@media (max-width: 768px) {
  .navbar-nav {
    display: none; /* Hide default navbar items on small screens */
  }

  .menu-btn {
    display: block; /* Show menu button on mobile */
  }

  .search-box {
    max-width: 100%; /* Make the search box full width on smaller screens */
  }
}
</style>
