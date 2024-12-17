<template>
  <div class="container checkout-page py-5">
    <h3>Checkout</h3>
    <!-- Step 1: Customer Information -->
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="card p-4 my-4">
        <div class="col-md-12">
          <h5 class="section-title"><span>1</span> Customer Information</h5>
          <div class="line"></div>
          <label class="form-label">First Name</label>
          <input type="text" class="form-control" placeholder="First Name*" v-model="customer.firstName" />
          <label class="form-label mt-3">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name*" v-model="customer.lastName" />
          <label class="form-label mt-3">Address</label>
          <input type="text" class="form-control" placeholder="Address*" v-model="customer.address" />

          <label class="form-label mt-3">Mobile</label>
          <input type="text" class="form-control" placeholder="Telephone*" v-model="customer.mobile" />

          <label class="form-label mt-3">Email</label>
          <input type="email" class="form-control" placeholder="E-Mail*" v-model="customer.email" />

          <label class="form-label mt-3">City</label>
          <input type="text" class="form-control" placeholder="City*" v-model="customer.city" />

          <label class="form-label mt-3">Zone</label>
          <select class="form-select" v-model="customer.zone">
            <option>Dhaka City</option>
            <option>Chittagong</option>
            <option>Khulna</option>
          </select>

          <label class="form-label mt-3">Comment</label>
          <textarea class="form-control" rows="3" placeholder="Comment" v-model="customer.comment"></textarea>
        </div>
      </div>
      </div>
      
      <!-- Payment Method -->
      <div class="col-md-8">
        <div class="row">
      <div class="col-md-6">
         <div style="height:250px;" class="card p-4 my-4">
        <h5 class="section-title"><span>2</span> Payment Method</h5>
        <div class="line"></div>
        <p>Select a payment method</p>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="cashOnDelivery" value="Cash on Delivery" v-model="payment.method" />
          <label class="form-check-label" for="cashOnDelivery">Cash on Delivery</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="onlinePayment" value="Online Payment" v-model="payment.method" />
          <label class="form-check-label" for="onlinePayment">Online Payment</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="posDelivery" value="POS on Delivery" v-model="payment.method" />
          <label class="form-check-label" for="posDelivery">POS on Delivery</label>
        </div>
      </div>
      </div>

      <!-- Delivery Method -->
      <div class="col-md-6">
        <div style="height:250px;" class="card p-4 my-4">
        <h5 class="section-title"><span>3</span> Delivery Method</h5>
        <div class="line"></div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="homeDelivery" value="Home Delivery" v-model="delivery.method" />
          <label class="form-check-label" for="homeDelivery">Home Delivery - 60৳</label>
        </div>
        <div class="form-check">
          <input type="radio" class="form-check-input" id="storePickup" value="Store Pickup" v-model="delivery.method" />
          <label class="form-check-label" for="storePickup">Store Pickup - 0৳</label>
        </div>
      </div>
    </div>
    </div>

    <div class="col-12">
    <div class="card p-4 mb-4">
      <div class="row">
        <!-- Apply Voucher Section -->
        <div class="col-md-6 d-flex align-items-center">
          <input class="form-control me-2" type="text" placeholder="Enter Voucher Code">
          <div style="width:230px;" class="btn btn-outline-primary">Apply Voucher</div>
        </div>
        
        <!-- Apply Coupon Section -->
        <div class="col-md-6 d-flex align-items-center">
          <input class="form-control me-2" type="text" placeholder="Enter Coupon Code">
          <div style="width:230px;" class="btn btn-outline-primary">Apply Coupon</div>
        </div>
      </div>
    </div>
  </div>

    <div class="col-12">
      <div class="card p-4 my-4">
        <h5 class="section-title"><span>4</span> Order Overview</h5>
        <div class="line"></div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cartItems" :key="index">
              <td>{{ product.name }}</td>
              <td>{{ product.price }}৳ x {{ product.quantity }}</td>
              <td>{{ product.price * product.quantity }}৳</td> <!-- Fixed total calculation -->
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end"><strong>Sub-Total:</strong></td>
              <td>{{ subTotal }}৳</td>
            </tr>
            <tr>
              <td colspan="2" class="text-end"><strong>Home Delivery:</strong></td>
              <td>{{ deliveryFee }}৳</td>
            </tr>
            <tr>
              <td colspan="2" class="text-end"><strong>Total:</strong></td>
              <td class="text-danger">{{ total }}৳</td>
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
      <div class="row">
      <div class="col-12">
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="agreeTerms" v-model="agree" />
          <label class="form-check-label" for="agreeTerms">
            I have read and agree to the
            <a href="#" class="text-danger">Terms and Conditions</a>,
            <a href="#" class="text-danger">Privacy Policy</a>, and
            <a href="#" class="text-danger">Refund and Return Policy</a>.
          </label>
        </div>
        <button class="btn btn-primary w-100" :disabled="!agree" @click="confirmOrder">Confirm Order</button>
      </div>
    </div>
  </div>
  </div>
</div>

    <!-- Step 2: Order Overview (Placed Below Payment Method) -->
 

    <!-- Terms and Confirm -->
    
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      customer: {
        firstName: "",
        lastName: "",
        address: "",
        mobile: "",
        email: "",
      },
      payment: {
        method: "Cash on Delivery",
      },
      delivery: {
        method: "Home Delivery",
      },
      agree: false,
      cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    subTotal() {
      return this.cartItems.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    },
    deliveryFee() {
      return this.delivery.method === "Home Delivery" ? 60 : 0;
    },
    total() {
      return this.subTotal + this.deliveryFee;
    },
  },
  methods: {
    confirmOrder() {
      // Clear the cart in localStorage
      localStorage.removeItem("cart");

      // You can add a success message or navigate to a different page
      alert("Order confirmed! Thank you for your purchase.");
      
      // Reset form data
      this.customer = {
        firstName: "",
        lastName: "",
        address: "",
        mobile: "",
        email: "",
      };
      this.payment.method = "Cash on Delivery";
      this.delivery.method = "Home Delivery";
      this.agree = false;
    },
  },
};
</script>

<style scoped>


.btn-small {
  padding: 10px 20px; /* Adjust padding to your liking */
}


.line {
  border-bottom: 1px solid #ddd;  /* Adds a line */
  margin: 10px 0;  /* Adds some space above and below the line */
}


.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section-title span {
  background-color: #ff6347;
  color: #fff;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  margin-right: 0.5rem;
}

.table tfoot td {
  font-weight: bold;
}

.text-danger {
  color: #e63946 !important;
}
</style>
