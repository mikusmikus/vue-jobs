<template>
<div class="loader">

  <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<style src="./loader.scss" lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loader',
});
</script>
