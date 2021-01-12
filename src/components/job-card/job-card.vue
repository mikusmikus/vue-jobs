<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-2 col-xs-4">
        <img :src="job.company_logo" :alt="job.company" :width="100" />
      </div>
      <div class="col-sm-10 col-xs-8">
        <div class="row">
          <div class="col-sm-8 col-xs-12">
            <h4>{{ job.company }}</h4>
            <h3 class="title" @click="$emit('buttonClick')">{{ job.title }}</h3>
            <Button
              v-if="job.type === 'Full Time'"
              label="Full time"
              @buttonClick="$emit('buttonClick')"
            />
          </div>
          <div class="col-sm-4 col-xs-12">
            <p>{{ job.location }}</p>
            <p>{{ moment(job.created_at) }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./job-card.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import Button from '../button/button.vue';

export default defineComponent(
  {
    components: {
      Button,
    },
    props: {
      job: Object,
    },
    methods: {
      moment(date: string) {
        return moment(date).fromNow();
      },
    },
  },
);
</script>
