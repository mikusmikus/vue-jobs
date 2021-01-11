<template>
  <div class="hero">
    <div class="row middle-xs">
      <div class="col-xs-12">
        <h2 class="title margin-bottom--10">
          {{ job.title }}
        </h2>
        <Button label="Full time" class="button" />
        <div class="row">
          <div class="icon-wrapper">
            <i class="material-icons">query_builder</i>
            <span class="text-icons margin-bottom--32">{{ job.created_at }}</span>
          </div>
          <div class="col-xs-12"></div>
        </div>
        <div class="company-wrapper">
          <img class="logo" :src="job.company_logo" :alt="job.company" />
          <div class="company">
            <h3 class="title title--company">{{ job.company }}</h3>
            <div class="icon-wrapper">
              <i class="material-icons">public</i>
              <span class="text-icons">{{ job.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <span class="title title--description" v-html="job.description"></span>
      </div>
    </div>
  </div>
</template>
<style src="./hero.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';

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
