<template>
  <div class="home">
    <h1 class="text-center  m-auto ">Welcome to The Product Gallary</h1>
    <div class="carousel">
      <div class="carousel-images">
        <img v-for="(image, index) in images" :key="index" :src="image" :class="{ active: currentIndex === index }"/>
      </div>
      <div class="carousel-dots">
        <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)" :class="{ active: currentIndex === index }">•</span>
      </div>
    </div>
    <div class="gallery-description">
      <h2 class="text-center">Product Gallery</h2>
      <p>Welcome to our product gallery, the perfect place to explore a wide range of high-quality products that meet all your needs. We offer you a unique and comfortable shopping experience with a variety of categories and types, ranging from the latest electronics to stylish clothing and unique accessories.</p>
      <ul>
        <li><strong>Diverse Products:</strong> Discover a variety of items, including the latest electronics, clothing, shoes, accessories, and home essentials.</li>
        <li><strong>High Quality:</strong> We ensure to provide high-quality products from trusted brands, guaranteeing you the best shopping experience.</li>
        <li><strong>Attractive and User-Friendly Design:</strong> The gallery is designed for easy and comfortable browsing, with options to filter results by category, price, and brand.</li>
        <li><strong>Special Offers and Discounts:</strong> Enjoy the best deals and discounts on many products, making your shopping experience cost-effective.</li>
        <li><strong>Detailed Images and Information:</strong> Each product includes clear images and detailed information to help you make informed purchasing decisions.</li>
      </ul>
      <p>Explore now and add a new touch to your life with our fantastic products.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      images: [
        '../images/jum1.jpg',
        '../images/jum2.jpg',
        '../images/jum3.jpg'
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

<style>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px; 
}

.carousel-images img {
  width: 100%;
  display: none;
}

.carousel-images img.active {
  display: block;
}

.carousel-dots {
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.carousel-dots span {
  cursor: pointer;
  font-size: 24px;
  margin: 0 5px;
  color: #888; 
}

.carousel-dots span.active {
  color: #007bff; 
}

.gallery-description {
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  width: 80%;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-description h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
}

.gallery-description p {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
}

.gallery-description ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.gallery-description li {
  font-size: 16px;
  margin-bottom: 15px;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  color: #333;
}

.gallery-description strong {
  color: #007bff;
}
</style>
