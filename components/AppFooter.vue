<template>
  <footer class="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
    <!-- Add your footer content here -->
    <p>&copy; {{ currentYear }} Your App Name</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
