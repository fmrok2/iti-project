<template>
  <div class="contact-page">
    <div class="container py-5">
      <div class="card shadow-lg border-0 rounded-4 p-4 mx-auto" style="max-width: 600px;">
        <h2 class="text-center mb-4 text-success">📩 Contact Us</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div class="form-group mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group mb-4">
            <label for="message" class="form-label">Message:</label>
            <textarea v-model="message" class="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" class="btn btn-success w-100 py-2">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { name: '', email: '', message: '' };
  },
  methods: {
    handleSubmit() {
      if (this.name && this.email && this.message) {
        alert('✅ Message Sent Successfully!');
      }
    }
  }
};
</script>

<style scoped>
.contact-page {
  background-color: #f7fdf6;
  min-height: 100vh;
}

.form-control {
  border-radius: 0.5rem;
  border: 1px solid #ced4da;
}

.btn-success {
  background-color: #7da453;
  border-color: #7da453;
  transition: all 0.3s ease;
}

.btn-success:hover {
  background-color: #658d3b;
}
</style>
