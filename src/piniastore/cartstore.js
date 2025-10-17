import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    totalItems: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decreaseQuantity(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        this.removeItem(product);
      }
    },
    removeItem(product) {
      const index = this.cart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }
});
