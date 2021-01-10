<template>
  <button class="button" type="button" @click="$emit('buttonClick')">
    {{ label }}
  </button>
</template>

<style src="./button.scss" lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      default: 'aaaaaazzz',
      type: String,
    },
  },
});
</script>
