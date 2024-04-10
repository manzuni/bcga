<template>
  <header class="bg-blue-500 p-4">
    <h1 class="text-white text-2xl font-bold text-center">{{ title }}</h1>
    <!-- Add your header content here -->
  </header>
</template>

<script setup>
defineProps(["title"]);
</script>
