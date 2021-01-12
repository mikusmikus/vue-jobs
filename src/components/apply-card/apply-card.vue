<template>
  <div class="button-wrapper">
    <i class="material-icons">arrow_right_alt</i>
    <Button class="button" label="Back to search" to search @buttonClick="$router.push('/')" />
  </div>
  <h4>HOW TO APPLY</h4>
  <span v-html="job.how_to_apply"></span>
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
