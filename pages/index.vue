<script setup>
import { ref } from "vue";

const content = ref({});

const fetchContent = async () => {
  const data = useContent();
  content.value = data.page.value;
};

fetchContent();
</script>

<template>
  <div class="flex flex-col">
    <h1>{{ content.title }}</h1>
    <h2>{{ content.header }}</h2>
  </div>

  <div class="gallery">
    <div v-for="(image, index) in content.gallery" :key="index">
      <img :src="image.image" :alt="`Gallery image ${index + 1}`" />
    </div>
  </div>
</template>
