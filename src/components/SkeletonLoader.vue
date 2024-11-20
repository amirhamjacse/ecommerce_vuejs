<template>
  <div class="skeleton-loader">
    <div v-for="n in count" :key="n" class="skeleton-card">
      <div class="skeleton-image"></div>
      <div class="skeleton-title"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-button"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: {
    count: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.skeleton-loader {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.skeleton-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  position: relative;
  animation: pulse 2s infinite ease-in-out;
}

.skeleton-image {
  width: 100%;
  height: 180px;
  background-color: #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #e0e0e0 25%, #d4d4d4 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

.skeleton-title,
.skeleton-text,
.skeleton-button {
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-title {
  width: 80%;
  height: 20px;
}

.skeleton-text {
  width: 60%;
  height: 16px;
}

.skeleton-button {
  width: 70%;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 4px;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
