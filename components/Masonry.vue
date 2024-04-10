<script setup lang="ts">
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <NuxtImg
        :src="item.image"
        v-for="(item, index) in props.data?.gallery"
        :key="index"
        class="h-auto max-w-full rounded-lg"
      />
    </div>
  </section>
</template>
