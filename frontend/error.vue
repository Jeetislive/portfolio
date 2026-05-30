<template>
  <div class="error-page">
    <NavBar />
    <div class="error-content">
      <h1 class="error-code">{{ error?.statusCode || 404 }}</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-desc">The page you're looking for doesn't exist or has been moved.</p>
      <NuxtLink to="/" class="btn btn-primary">Go Home</NuxtLink>
    </div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
defineProps<{ error?: { statusCode?: number } }>()
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.error-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.error-code {
  font-size: 6rem;
  font-family: var(--font-display);
  color: var(--clr-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.error-title {
  font-size: 1.5rem;
  color: var(--clr-text);
  margin-bottom: 0.75rem;
}
.error-desc {
  color: var(--clr-text-muted);
  margin-bottom: 2rem;
  max-width: 400px;
}
</style>
