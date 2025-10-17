<template>
  <div class="cart-page">
    <div class="container py-5">
      <h2 class="text-center mb-5 text-success">🛍️ Your Shopping Cart</h2>

      <div v-if="cart.length === 0" class="empty-cart text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty" width="150" class="mb-3" />
        <p class="text-muted">Your cart is empty. Start shopping now!</p>
      </div>

      <div v-else>
        <div
          v-for="item in cart"
          :key="item.id"
          class="cart-item card shadow-sm p-3 mb-4 rounded-4 border-0"
        >
          <div class="row align-items-center">
            <div class="col-md-2 text-center">
              <img :src="item.image" class="img-fluid rounded-3" alt="Product" />
            </div>
            <div class="col-md-4">
              <h5>{{ item.title }}</h5>
              <p class="text-success fw-semibold">{{ item.price }} USD</p>
            </div>
            <div class="col-md-3 d-flex justify-content-center align-items-center">
              <button class="btn btn-outline-success rounded-circle" @click="decreaseQuantity(item)">−</button>
              <span class="mx-3 fs-5">{{ item.quantity }}</span>
              <button class="btn btn-outline-success rounded-circle" @click="increaseQuantity(item)">+</button>
            </div>
            <div class="col-md-3 text-end">
              <strong>Total:</strong>
              <span class="text-success fw-bold">{{ (item.price * item.quantity).toFixed(2) }} USD</span>
            </div>
          </div>
        </div>

        <div class="cart-summary text-center mt-5">
          <h4 class="fw-bold text-success">Total Price: {{ totalPrice.toFixed(2) }} $</h4>
          <button class="btn btn-success mt-3 px-5 py-2 rounded-3 shadow">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/piniastore/cartstore';

export default {
  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
      cart: cartStore.cart,
      totalPrice: cartStore.totalPrice
    };
  },
  methods: {
    increaseQuantity(item) {
      this.cartStore.increaseQuantity(item);
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) this.cartStore.decreaseQuantity(item);
      else this.cartStore.removeItem(item);
    }
  }
};
</script>

<style scoped>
.cart-page {
  background-color: #f7fdf6;
  min-height: 100vh;
}

.cart-item h5 {
  color: #343a40;
}

.btn-outline-success {
  border-width: 2px;
  transition: all 0.3s ease;
}

.btn-outline-success:hover {
  background-color: #cfe1b9;
  border-color: #9fb980;
}

.cart-summary h4 {
  color: #2e7d32;
}
</style>
