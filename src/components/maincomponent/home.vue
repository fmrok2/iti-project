<template>
  <div class="home">
    <section class="carousel">
      <div class="carousel-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ active: currentIndex === index }"
        />
      </div>

      <div class="carousel-overlay">
        <h1>Welcome to The Product Gallery</h1>
        <p>Discover your next favorite product today!</p>
      </div>

      <div class="carousel-dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="{ active: currentIndex === index }"
        >•</span>
      </div>
    </section>

    <section class="gallery-description">
      <h2>Explore Our Collection</h2>
      <p>
        Welcome to our product gallery — the perfect place to explore a wide range of high-quality products tailored to your needs.
      </p>

      <ul>
        <li><strong>Diverse Products:</strong> From electronics to clothing and accessories.</li>
        <li><strong>High Quality:</strong> Only the best brands for a premium experience.</li>
        <li><strong>User-Friendly Design:</strong> Smooth browsing with category, price, and brand filters.</li>
        <li><strong>Special Offers:</strong> Enjoy amazing discounts and limited-time deals.</li>
        <li><strong>Detailed Info:</strong> Clear product details and sharp images for confident decisions.</li>
      </ul>

      <p class="cta">✨ Explore now and upgrade your lifestyle with our premium products.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        "/images/jum1.jpg",
        "/images/jum2.jpg",
        "/images/jum3.jpg"
      ],
      currentIndex: 0
    };
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000);
  }
};
</script>

<style scoped>
.home {
  font-family: "Poppins", sans-serif;
  color: #333;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 70vh;
}

.carousel-images img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  display: none;
  transition: opacity 0.8s ease;
}

.carousel-images img.active {
  display: block;
  opacity: 1;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.carousel-overlay h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.carousel-overlay p {
  font-size: 1.3rem;
  opacity: 0.9;
}

.carousel-dots {
  text-align: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
}

.carousel-dots span {
  cursor: pointer;
  font-size: 24px;
  margin: 0 5px;
  color: #bbb;
}

.carousel-dots span.active {
  color: #4caf50;
}

.gallery-description {
  text-align: center;
  margin: 40px auto;
  padding: 30px;
  width: 85%;
  background: linear-gradient(180deg, #f9f9f9 0%, #eef7f0 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gallery-description h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2e7d32;
}

.gallery-description p {
  font-size: 1.1rem;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
}

.gallery-description ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto 20px;
  max-width: 700px;
  text-align: left;
}

.gallery-description li {
  margin-bottom: 12px;
  font-size: 1rem;
  line-height: 1.5;
}

.gallery-description strong {
  color: #4caf50;
}

.cta {
  font-weight: 600;
  color: #2e7d32;
  margin-top: 10px;
}
</style>
