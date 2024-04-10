<script setup lang="ts">
// import Masonry from "~/components/Masonry.vue";
// import Carousel from "~/components/Carousel.vue";
import Hero from "~/components/Hero.vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <Hero />
      <!-- <div class="flex flex-col">
    <h1>{{ data.title }}</h1>
    <h2>{{ data.header }}</h2>
  </div> -->

      <!-- <Masonry src="index" />

  <Carousel /> -->
    </main>
    <Footer />
  </div>
</template>

<style>
body,
html {
  height: 100%;
  font-family: "Open Sans", system-ui, sans-serif;
}

.open-sans-class {
  font-family: "Open Sans", system-ui, sans-serif;
}
</style>
