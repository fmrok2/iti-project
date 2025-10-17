<template>
  <div class="products-page">
    <div class="row g-0">
      <!-- Sidebar -->
      <div class="col-3 sidebar">
        <h4 class="sidebar-title">Categories</h4>
        <a href="#" @click.prevent="filterByCategory('all')" class="category-link">All</a>
        <a href="#" @click.prevent="filterByCategory('electronics')" class="category-link">Electronics</a>
        <a href="#" @click.prevent="filterByCategory('jewelery')" class="category-link">Jewelery</a>
        <a href="#" @click.prevent="filterByCategory('men\'s clothing')" class="category-link">Men's Clothing</a>
        <a href="#" @click.prevent="filterByCategory('women\'s clothing')" class="category-link">Women's Clothing</a>

        <div class="price-filter">
          <h5>Filter by Price</h5>
          <label for="min-price">Min:</label>
          <input id="min-price" type="number" v-model.number="minPrice" @change="filterProducts" placeholder="0" />
          <label for="max-price">Max:</label>
          <input id="max-price" type="number" v-model.number="maxPrice" @change="filterProducts" placeholder="1000" />
        </div>
      </div>

      <!-- Products Grid -->
      <div class="col-9 p-4">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="product in displayedProducts" :key="product.id">
            <div class="card product-card">
              <div class="product-image">
                <img :src="product.image" alt="Product Image" />
                <div class="overlay">
                  <button @click.stop="goToDetails(product)" class="info-btn">Info</button>
                  <button @click.stop="addToCart(product)" class="add-btn">Add</button>
                </div>
              </div>
              <div class="card-body text-center">
                <h6 class="product-title">{{ product.title.slice(0, 25) }}...</h6>
                <p class="product-price">${{ product.price.toFixed(2) }}</p>
              </div>
            </div>
          </div>

          <div class="col-12 text-center">
            <button v-if="canLoadMore" @click="loadMore" class="btn more-btn">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/piniastore/cartstore';

export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      rowsToShow: 3,
      minPrice: 0,
      maxPrice: 1000,
      selectedCategory: 'all'
    };
  },
  computed: {
    displayedProducts() {
      return this.filteredProducts.slice(0, this.rowsToShow * 3);
    },
    canLoadMore() {
      return this.filteredProducts.length > this.displayedProducts.length;
    }
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      this.products = data;
      this.filteredProducts = data;
    },
    loadMore() {
      this.rowsToShow += 2;
    },
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
    },
    goToDetails(product) {
      this.$router.push(`/product/${product.id}`);
    },
    filterProducts() {
      this.filteredProducts = this.products.filter(p => {
        const inRange = p.price >= this.minPrice && p.price <= this.maxPrice;
        const matchCategory = this.selectedCategory === 'all' || p.category === this.selectedCategory;
        return inRange && matchCategory;
      });
    },
    filterByCategory(category) {
      this.selectedCategory = category;
      this.filterProducts();
    }
  }
};
</script>

<style scoped>
.products-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f8faf8;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
}

.sidebar {
  background-color: #e8f5e9;
  padding: 2rem;
  height: 100vh;
  border-right: 2px solid #c8e6c9;
}

.sidebar-title {
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 1rem;
}

.category-link {
  display: block;
  color: #333;
  background: #fff;
  margin: 8px 0;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
}

.category-link:hover {
  background-color: #2e7d32;
  color: #fff;
}

.price-filter {
  margin-top: 1.5rem;
}

.price-filter input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.product-card {
  border: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.product-image {
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  width: 90%;
  height: 90%;
  object-fit: contain;
}

.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(255,255,255,0.8);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: opacity 0.3s;
}

.product-card:hover .overlay {
  opacity: 1;
}

.info-btn, .add-btn {
  border: none;
  border-radius: 25px;
  padding: 8px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.info-btn {
  background-color: #81c784;
  color: #fff;
}

.add-btn {
  background-color: #388e3c;
  color: #fff;
}

.info-btn:hover {
  background-color: #66bb6a;
}

.add-btn:hover {
  background-color: #2e7d32;
}

.product-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
}

.product-price {
  color: #2e7d32;
  font-size: 1.1rem;
  font-weight: bold;
}

.more-btn {
  background-color: #2e7d32;
  color: #fff;
  padding: 10px 30px;
  border-radius: 25px;
  border: none;
  transition: 0.3s;
}

.more-btn:hover {
  background-color: #1b5e20;
}
</style>
