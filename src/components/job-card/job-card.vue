<template>
  <div class="card">
    <div>{{ job.title }}</div>
    <img :src="job.company_logo" :alt="job.company" :width="100" />
    <div>{{ label }}</div>
    <Button label = 'More Information' @buttonClick="$emit('buttonClick')"/>

  </div>
</template>
<style src="./job-card.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';

export default defineComponent({
  components: {
    Button,
  },
  props: {
    job: Object,
    label: {
      type: String,
    },
  },
  // mounted() {
  //   console.log(this.Button);
  // },
});
</script>
