<template>
  <footer class="footer text-white py-4">
    <div class="text-center">
      <p class="mb-2">&copy; 2025 GreenMart. All rights reserved.</p>
      <div class="social-links mt-2">
        <a href="#" class="me-3"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #2e7d32;
  color: #ffffff;
  width: 100%;
  margin: 0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.footer p {
  font-size: 0.9rem;
  letter-spacing: 0.3px;
}

.social-links a {
  color: white;
  font-size: 1.25rem;
  transition: color 0.3s, transform 0.3s;
}

.social-links a:hover {
  color: #c8e6c9;
  transform: translateY(-3px);
}
</style>
