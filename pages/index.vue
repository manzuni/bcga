<script setup lang="ts">
import Carousel from "~/components/Carousel.vue";
import Hero from "~/components/Hero.vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const { data } = await useAsyncData("index", () => queryContent("/").findOne());
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow mb-6">
      <Hero />
      <!-- <div class="flex flex-col">
    <h1>{{ data.title }}</h1>
    <h2>{{ data.header }}</h2>
  </div> 

-->
      <!-- <div class="w-full flex justify-center items-center">
        <Carousel :data="data" />
      </div> -->

      <!-- <Masonry :data="data" /> -->
    </main>
    <!-- <Footer /> -->
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
