<template>
<div class="apply-card">
    <div class="button-wrapper">
    <i class="material-icons">arrow_right_alt</i>
    <Button class="button" label="Back to search" to search @buttonClick="backToHome()" />
  </div>
  <div class="applay-wrapper">
    <h4 class="title">how to apply</h4>
    <span class="text" v-html="job.how_to_apply"></span>
  </div>
</div>
</template>

<style src="./apply-card.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';

export default defineComponent({
  components: {
    Button,
  },
  props: {
    job: Object,
  },
});
</script>
