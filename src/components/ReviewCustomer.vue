<template>
    <div class="container my-5">
      <h4 class="text-center mb-4">Review Customer</h4>
      <div id="reviewCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(review, index) in reviews"
            :class="{ active: index === 0 }"
            :key="review.name"
          >
            <div class="text-center">
              <blockquote class="blockquote">
                <p class="fs-4">{{ review.quote }}</p>
              </blockquote>
              <div class="d-flex align-items-center justify-content-center">
                <img
                  :src="review.avatar"
                  class="rounded-circle me-3"
                  alt="Avatar"
                  width="50"
                />
                <div>
                  <h6 class="mb-0">{{ review.name }}</h6>
                  <small class="text-muted">{{ review.position }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#reviewCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#reviewCarousel"
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
    name: "ReviewCustomer",
    data() {
      return {
        reviews: [
          {
            name: "Michael Gough",
            position: "CEO at Google",
            quote:
              "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
            avatar: "avatar1.jpg",
          },
          {
            name: "Sara Doe",
            position: "Product Manager at Amazon",
            quote:
              "I love the simplicity and effectiveness of Flowbite. The components are easy to integrate and use for professional projects.",
            avatar: "avatar2.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #007bff;
    border-radius: 50%;
  }
  </style>
  