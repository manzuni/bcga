<script setup>
const { data } = await useAsyncData("index", () => queryContent("/").findOne());
</script>

<template>
  <div class="flex flex-col">
    <!-- {{ console.log(data.gallery) }} -->
    <h1>{{ data.title }}</h1>
    <h2>{{ data.header }}</h2>
  </div>

  <div v-for="(item, index) in data.gallery" :key="index" class="gallery-item">
    <NuxtImg :src="item.image" />
  </div>

  <NuxtImg src="/gallery/img3.jpg" />
</template>
