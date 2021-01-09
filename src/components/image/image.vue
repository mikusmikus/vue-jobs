<template>
  <div class="imageWrapper">
    <img class="image" :src="src" :alt="alt" :width="w" :height="h" />
  </div>
</template>

<style src="./image.scss" lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Image',
  props: {
    src: {
      default: 'https://picsum.photos/400/100',
      type: String,
      required: true,
    },
    alt: {
      default: 'image',
      type: String,
    },
    w: {
      default: 400,
      type: Number,
    },
    h: {
      default: 100,
      type: Number,
    },
  },
});
</script>
