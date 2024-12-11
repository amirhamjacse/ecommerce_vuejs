<!-- <template style="margin-top: 70px;">
    <div  class="container my-5">
      <div class="row">
     
        <div style="margin-top: 70px;" class="col-md-5">
          <div class="d-flex flex-column">
            <div>
              <img :src="product.image" class="img-fluid main-image" alt="Product" />
            </div>
            <div class="d-flex mt-3">
              <img
                v-for="(img, index) in product.images"
                :key="index"
                :src="img"
                class="img-thumbnail me-2"
                style="width: 70px; height: 70px; object-fit: cover;"
                alt="Product thumbnail"
              />
            </div>
          </div>
        </div>
      
        <div style="margin-top: 70px;" class="col-md-7">
          <h2>{{ product.name }}</h2>
          <p class="text-muted mb-1">SKU: {{ product.sku }} | CATEGORY: {{ product.category }}</p>
          <h4 class="text-danger mb-3">${{ product.price }}</h4>
          <p>{{ product.description }}</p>
          <div class="d-flex align-items-center mb-3">
            <button class="btn btn-primary me-2">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
            <button class="btn btn-outline-secondary">
              <i class="bi bi-heart"></i> Add to Wishlist
            </button>
          </div>
          <div>
            <h6>Features</h6>
            <ul>
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "Converse Training Shoes",
          sku: "123456",
          category: "Shoes",
          price: 199.0,
          image: "https://via.placeholder.com/500",
          images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
          ],
          description:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
          features: [
            "High-quality materials",
            "Stylish design",
            "Comfortable fit",
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .main-image {
    max-height: 400px;
    object-fit: contain;
  }
  .top {
    margin-top: 10%;
  }
  </style>
   -->

   <template>
    <div class="container my-5">
      <div class="row">
        <!-- Product Image Gallery -->
        <div class="col-md-5 product-details-section">
          <div class="d-flex flex-column">
            <!-- Main Image -->
            <div>
              <img :src="product.image" class="img-fluid main-image" alt="Product" />
            </div>
            <!-- Thumbnails -->
            <div class="d-flex mt-3">
              <img
                v-for="(img, index) in product.images"
                :key="index"
                :src="img"
                class="img-thumbnail me-2"
                style="width: 70px; height: 70px; object-fit: cover; cursor: pointer;"
                alt="Product thumbnail"
                @click="setMainImage(img)"
              />
            </div>
          </div>
        </div>
        <!-- Product Information -->
        <div class="col-md-7 product-details-section">
          <h2>{{ product.name }}</h2>
          <p class="text-muted mb-1">
            SKU: {{ product.sku }} | CATEGORY: {{ product.category }}
          </p>
          <h4 class="text-danger mb-3">${{ product.price }}</h4>
          <p>{{ product.description }}</p>
          <!-- Quantity and Add to Cart -->
          <div class="d-flex align-items-center mb-3">
            <!-- Quantity Counter -->
            <div class="d-flex align-items-center me-3">
              <button class="btn btn-outline-secondary btn-sm" @click="decreaseQuantity">
                <i class="bi bi-dash"></i>
              </button>
              <input
                type="number"
                v-model="quantity"
                class="form-control text-center mx-2"
                style="width: 60px;"
                min="1"
              />
              <button class="btn btn-outline-secondary btn-sm" @click="increaseQuantity">
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <button class="btn btn-primary me-2" @click="addToCart">
              <i class="bi bi-cart-plus"></i> Add to Cart
            </button>
            <button class="btn btn-outline-secondary">
              <i class="bi bi-heart"></i> Add to Wishlist
            </button>
          </div>
          <!-- Features -->
          <div>
            <h6>Features</h6>
            <ul>
              <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Tabs Section -->
      <div class="mt-5">
        <ul class="nav nav-tabs" id="productTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="additional-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#additional-info"
              type="button"
              role="tab"
              aria-controls="additional-info"
              aria-selected="false"
            >
              Additional Information
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Reviews (0)
            </button>
          </li>
        </ul>
        <div class="tab-content p-3 border" id="productTabsContent">
          <div
            class="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="additional-info"
            role="tabpanel"
            aria-labelledby="additional-info-tab"
          >
            <p>Additional product information here.</p>
          </div>
          <div
            class="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <p>No reviews yet.</p>
          </div>
        </div>
      </div>
  
      <!-- Related Products Section -->
      <div class="mt-5">
        <h4 class="mb-4">Related Products</h4>
        <div class="row">
          <div class="col-md-3" v-for="related in relatedProducts" :key="related.id">
            <div class="card h-100 shadow-sm">
              <img :src="related.image" class="card-img-top" alt="Related Product" />
              <div class="card-body text-center">
                <h6 class="card-title">{{ related.name }}</h6>
                <p class="text-danger">${{ related.price }}</p>
                <button class="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "Black Men's Fashion Watch",
          sku: "123456789",
          category: "Watches",
          price: 121.0,
          image: "https://via.placeholder.com/500",
          images: [
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
          ],
          description:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
          features: [
            "High-quality materials",
            "Elegant design",
            "Water-resistant",
          ],
        },
        relatedProducts: [
          {
            id: 1,
            name: "High Capacity Battery",
            price: 210.0,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 2,
            name: "Obsession Trainers",
            price: 223.0,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "Beyond T-Shirt",
            price: 134.0,
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            name: "Men's Torch",
            price: 199.0,
            image: "https://via.placeholder.com/150",
          },
        ],
        quantity: 1,
      };
    },
    methods: {
      setMainImage(img) {
        this.product.image = img;
      },
      increaseQuantity() {
        this.quantity += 1;
      },
      decreaseQuantity() {
        if (this.quantity > 1) this.quantity -= 1;
      },
      addToCart() {
        alert(`Added ${this.quantity} ${this.product.name}(s) to the cart.`);
      },
    },
  };
  </script>
  
  <style scoped>
  .main-image {
    max-height: 400px;
    object-fit: contain;
  }
  
  .img-thumbnail {
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .img-thumbnail:hover {
    transform: scale(1.1);
  }
  
  .product-details-section {
    margin-top: 50px;
  }
  
  @media (max-width: 768px) {
    .product-details-section {
      margin-top: 30px;
    }
  }
  </style>
  