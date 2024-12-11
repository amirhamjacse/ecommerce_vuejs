<!-- <template>
    <div class="container my-4">
      <h4 class="text-center mb-4">Shop by Category</h4>
      <div id="categoryCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(chunk, chunkIndex) in chunkedCategories"
            :class="{ active: chunkIndex === 0 }"
            :key="chunkIndex"
          >
            <div class="row row-cols-2 row-cols-md-3 g-2">
              <div class="col" v-for="item in chunk" :key="item.name">
                <div class="card h-100">
                  <img :src="item.image" class="card-img-top" :alt="item.name" />
                  <div class="card-body">
                    <h6 class="card-title text-center">{{ item.name }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoryCarousel",
    data() {
      return {
        categories: [
          { name: "Mouse", image: "https://via.placeholder.com/150" },
          { name: "Keyboard", image: "https://via.placeholder.com/150" },
          { name: "Headphone", image: "https://via.placeholder.com/150" },
          { name: "Laptop", image: "https://i.imghippo.com/files/QNX6126wmA.jpeg" },
          { name: "Speaker Gaming", image: "https://via.placeholder.com/150" },
        ],

      };
    },
    computed: {
      chunkedCategories() {
        // Break categories into chunks of 3 items each
        const chunkSize = 3;
        return this.categories.reduce((acc, item, index) => {
          const chunkIndex = Math.floor(index / chunkSize);
          if (!acc[chunkIndex]) acc[chunkIndex] = [];
          acc[chunkIndex].push(item);
          return acc;
        }, []);
      },
    },
  };
  </script>
  
  <style scoped>
  .row-cols-2 .col,
  .row-cols-md-3 .col {
    padding: 0.25rem; /* Reduce spacing between columns */
  }
  
  .card {
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    height: 100%; /* Ensure all cards maintain the same height */
  }
  .card:hover {
    transform: scale(1.05);
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #007bff;
    border-radius: 50%;
  }
  </style>
   -->

   <template>
    <div class="container my-4">
      <h4 class="text-center mb-4">Shop by Category</h4>
      <div id="categoryCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(chunk, chunkIndex) in chunkedCategories"
            :class="{ active: chunkIndex === 0 }"
            :key="chunkIndex"
          >
            <div class="row row-cols-2 row-cols-md-3 gx-1 gy-2">
              <!-- Reduced spacing here -->
              <div class="col" v-for="item in chunk" :key="item.name">
                <a :href="`/category/${item.name.toLowerCase()}`" class="card-link">
                  <div class="card h-100">
                    <img
                      :src="item.image"
                      class="card-img-top"
                      :alt="item.name"
                    />
                    <div class="card-body">
                      <h6 class="card-title text-center">{{ item.name }}</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoryCarousel",
    data() {
      return {
        categories: [
          { name: "Smartwatch", image: "https://i.imghippo.com/files/QNX6126wmA.jpeg" },
          { name: "Camera", image: "https://i.imghippo.com/files/mIkr2902YU.jpg" },
          { name: "Laptop", image: "https://i.imghippo.com/files/M5420s.jpg" },
          { name: "Speaker Gaming", image: "https://via.placeholder.com/150" },
          { name: "Speaker Gaming", image: "https://via.placeholder.com/150" },
          { name: "Speaker Gaming", image: "https://via.placeholder.com/150" },
        ],
      };
    },
    computed: {
      chunkedCategories() {
        const chunkSize = 3;
        return this.categories.reduce((acc, item, index) => {
          const chunkIndex = Math.floor(index / chunkSize);
          if (!acc[chunkIndex]) acc[chunkIndex] = [];
          acc[chunkIndex].push(item);
          return acc;
        }, []);
      },
    },
  };
  </script>
  
  <style scoped>
  .row {
    margin: 0; /* Ensure no extra margins */
  }
  
  .row-cols-2 .col,
  .row-cols-md-3 .col {
    padding: 0.2rem; /* Minimized padding between columns */
  }
  
  .card-link {
    text-decoration: none;
  }
  
  .card {
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    height: 100%;
    /* Slightly smaller card width */
    margin: auto; /* Center align smaller cards */
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img-top {
    height: 100px; /* Smaller image size */
    object-fit: cover; /* Ensure consistent image fit */
    border-radius: 4px;
  }
  
  .card-body {
    padding: 0.3rem; /* Reduce padding inside the card */
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #007bff;
    border-radius: 50%;
  }
  </style>
  