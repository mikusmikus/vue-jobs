<template>
  <button type="button" @click="$emit('buttonClick')">
    <slot>
    </slot>
  </button>
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
});
</script>
