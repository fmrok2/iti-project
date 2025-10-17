<template>
  <div v-if="product" class="product-details">
    <div class="details-card">
      <img :src="product.image" alt="Product Image" class="product-img" />
      <div class="info">
        <h2>{{ product.title }}</h2>
        <p class="description">{{ product.description }}</p>
        <p class="price">${{ product.price }}</p>
        <button class="btn-add" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/piniastore/cartstore';

export default {
  data() {
    return { product: {} };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    this.product = await res.json();
  },
  methods: {
    addToCart(product) {
      const store = useCartStore();
      store.addToCart(product);
    }
  }
};
</script>

<style scoped>
.product-details {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8faf8;
  height: 100vh;
  padding: 2rem;
}

.details-card {
  background: #fff;
  border-radius: 20px;
  display: flex;
  gap: 2rem;
  max-width: 900px;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.product-img {
  width: 300px;
  height: 300px;
  object-fit: contain;
}

.info h2 {
  color: #2e7d32;
  font-weight: 700;
}

.description {
  color: #555;
  margin: 1rem 0;
  font-size: 1rem;
}

.price {
  font-size: 1.5rem;
  color: #388e3c;
  font-weight: bold;
}

.btn-add {
  background-color: #2e7d32;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-add:hover {
  background-color: #1b5e20;
}
</style>
