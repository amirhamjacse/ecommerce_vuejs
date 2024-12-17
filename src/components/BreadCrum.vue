<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="margin-top: 10px;">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <router-link v-if="crumb.link" :to="crumb.link">{{ crumb.name }}</router-link>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  computed: {
    breadcrumbs() {
      const route = useRoute();
      const matched = route.matched;

      return matched.map((routeItem) => {
        // Each route has a breadcrumb defined, fallback to route name
        const breadcrumb = routeItem.meta.breadcrumb || routeItem.name;

        return {
          name: breadcrumb,
          link: routeItem.path !== '/' ? routeItem.path : null,
        };
      });
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  background-color: #f5f8fa;
}

.breadcrumb-item a {
  color: #007bff;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: #6c757d;
}
</style>
