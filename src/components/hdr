<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div class="container">
        <!-- Left Side Menu Button (always visible on small screens) -->
        <button
          class="menu-btn navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle Menu"
        >
          <i class="bi bi-list"></i>
        </button>

        <!-- Logo (Aligned Left on small screens, centered on large screens) -->
        <a class="navbar-brand ms-0" href="#">E-Shop</a>

        <!-- Categories Dropdown (Visible only on large screens) -->
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

        <!-- Navbar for larger screens -->
        <div class=" navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex align-items-center">
            <!-- Search Box (Visible on both small and large screens) -->
            <li class="nav-item mx-3">
              <form class="d-flex w-100 col-md-4">
                <input
                  class="form-control search-box"
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search"
                />
              </form>
            </li>

            <!-- Cart Link (Visible on both small and large screens) -->
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">
                <i class="bi bi-cart"></i> Cart
              </router-link>
            </li>

            <!-- Login and Signup Links - Visible only on large screens -->
            <li class="nav-item d-none d-lg-block">
              <router-link to="/login" class="nav-link">
                <i class="bi bi-person"></i> Login
              </router-link>
            </li>
            <li class="nav-item d-none d-lg-block">
              <router-link to="/signup" class="nav-link">
                <i class="bi bi-person-plus"></i> Signup
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

          <!-- Category Link with Hoverable Dropdown -->
          <li class="nav-item dropdown hoverable">
            <a class="nav-link dropdown-toggle" href="#" id="sideNavbarDropdown" role="button" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="sideNavbarDropdown">
              <li><router-link to="/category/1" class="dropdown-item" @click="closeMenu">Category 1</router-link></li>
              <li><router-link to="/category/2" class="dropdown-item" @click="closeMenu">Category 2</router-link></li>
              <li><router-link to="/category/3" class="dropdown-item" @click="closeMenu">Category 3</router-link></li>
            </ul>
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
  max-width: 500px;
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

/* Hoverable Dropdown */
.hoverable:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none; /* Hidden by default */
}
/* For mobile responsiveness */
/* For mobile responsiveness */
/* For mobile responsiveness */
@media (max-width: 768px) {
  /* Move logo to the left */
  .navbar .navbar-brand {
    margin-left: 0; /* Align logo to the left on small screens */
    font-size: 1.25rem; /* Adjust logo size for mobile */
  }

  /* Navbar items (Logo, Search, Cart) in a horizontal row */
  .navbar-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align to the left on small screens */
    width: 100%; /* Ensure the navbar takes full width */
    margin-left: 0; /* Remove any extra margin */
  }

  /* Menu button */
  .menu-btn {
    display: block; /* Show the menu button on small screens */
  }

  /* Make the search box smaller on small screens */
  .search-box {
    width: 120px; /* Set a smaller width for the search box on mobile */
    margin-right: 10px; /* Add space between the search box and cart */
    font-size: 0.9rem; /* Reduce font size */
  }

  /* Ensure logo, search, and cart are in a row */
  .navbar-nav > li {
    margin-right: 15px; /* Provide space between items */
  }

  /* Hide Login and Signup on small screens */
  .navbar-nav .nav-link.d-none.d-lg-block {
    display: none;
  }

  /* Adjust cart icon size and alignment */
  .nav-item i.bi-cart {
    font-size: 1.25rem; /* Adjust cart icon size */
  }

  /* Adjust font size for the cart */
  .navbar-nav .nav-link {
    font-size: 0.9rem; /* Adjust font size of links */
  }
}

</style>
