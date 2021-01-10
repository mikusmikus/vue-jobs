<template>
  <div class="hero">
    <div class="row">
      <div class="col-xs-12">
        <h2>{{ job.title }} <Button /></h2>
        <p>{{ job.type }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <span v-html="job.description"></span>
      </div>
    </div>
  </div>
</template>
<style src="./hero.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';
import { Job } from '../../helpers/types/types';

export default defineComponent({
  name: 'Hero',
  components: {
    Button,
  },
  props: {
    job: Object,
  },
});
</script>
