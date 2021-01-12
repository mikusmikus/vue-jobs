<template>
  <button type="button" @click="$emit('buttonClick')">
    {{ label }}
    <slot>
      </slot>
  </button>
</template>

<style lang="scss"></style>

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
