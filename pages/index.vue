<script setup>
useHead({
  script: [
    {
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <div>
    <main class="p-4 h-[200px] flex">
      <!-- Your page content goes here -->
      <p class="text-center text-2xl m-auto">Welcome to my Nuxt 3 app!</p>
    </main>
  </div>
</template>
