<template>
  <div id="app" class="app-container">
    <Header />
    <!-- <BreadCrum/> -->
    <!-- <HeaderNav /> -->
    <router-view />
    <Footer />
    <BottomNav />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HeaderNav from './components/HeaderNav.vue';
import BottomNav from './components/BottomNav.vue';
// import BreadCrum from './components/BreadCrum.vue';

export default {
  components: {
    Header,
    Footer,
    HeaderNav,
    BottomNav,
    // BreadCrum
  },
};
</script>

<style scoped>
.app-container {
  background-color: #f5f8fa; /* Ash color */
  min-height: 100vh; /* Ensures full height */
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  /* padding: 0 15px; */
}

/* Responsive Design for all screen sizes */

/* Mobile Devices (smaller than 576px) */
@media (max-width: 576px) {
  .app-container {
    margin-top: 20px; /* Reduced margin for smaller screens */
  /* Less padding for mobile screens */
  }
}

/* Small to Medium Devices (576px to 768px) */
@media (max-width: 768px) {
  .app-container {
    margin-top: 30px; /* Adjusted margin for tablets */
   /* Appropriate padding for tablets */
  }
}

/* Large Devices (768px to 1200px) */
@media (max-width: 1200px) {
  .app-container {
    margin-top: 40px; /* Adjusted margin for medium screens like large tablets */
/* Padding for larger tablets */
  }
}

/* Extra Large Devices (larger than 1200px) */
@media (min-width: 1200px) {
  .app-container {
    margin-top: 50px; /* Default margin for large screens */
/* Extra padding for larger screens */
  }
}
</style>
