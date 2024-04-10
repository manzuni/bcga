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
    <img
      v-for="item in content.gallery"
      :src="item.image"
      :alt="`Gallery Image`"
      :key="item.image"
    />
  </div>
</template>
