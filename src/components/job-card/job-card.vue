<template>
  <div class="card">
    <div class="row">
      <div class=" col-sm-2 col-xs-3">
        <div class="image-wrapper">
          <img :src="job.company_logo" :alt="job.company" class="image" />
        </div>
      </div>
      <div class="cols-sm-10 col-xs-9">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="title title--company">{{ job.company }}</h3>
            <h2 class="title" @click="$emit('buttonClick')">{{ job.title }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3 col-xs-12">
            <div class="fullTime"  v-show="job.type ==='Full Time'">
              Full time
            </div>
          </div>
          <div class="col-sm-9 col-xs-12">
            <div class="icons-box">
              <div class="icon-wrapper">
                <i class="material-icons">public</i>
                <span class="text-icons">{{ job.location }}</span>
              </div>
              <div class="icon-wrapper">
                <i class="material-icons">query_builder</i>
                <span class="text-icons">{{ moment(job.created_at) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./job-card.scss" lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';

export default defineComponent({
  components: {
  },
  props: {
    job: Object,
  },
  methods: {
    moment(date: string) {
      return moment(date).fromNow();
    },
  },
});
</script>
