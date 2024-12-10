<template>
  <div id="app" class="app-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.app-container {
  background-color: #f5f8fa; /* Ash color */ 
  min-height: 100vh; /* Ensures full height */
  display: flex;
  flex-direction: column;
}
</style>
