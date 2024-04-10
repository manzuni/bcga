<template>
  <a
    @click.prevent="openGoogleMaps"
    :href="props.src"
    type="button"
    class="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
    data-twe-ripple-init
  >
    <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
      <slot></slot>
    </span>
  </a>
</template>

<script setup>
const props = defineProps({
  src: String,
});

function openGoogleMaps() {
  window.open(props.src, "_blank");
}
</script>
