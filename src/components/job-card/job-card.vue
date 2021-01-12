<template>
  <div class="card">
    <div class="row">
      <div class="col-sm-2 col-xs-4">
        <img :src="job.company_logo" :alt="job.company" :width="90" />
      </div>
      <div class="col-sm-10 col-xs-8">
        <div class="row">
          <div class="col-xs-12">
            <h3 class="title title--company">{{ job.company }}</h3>
            <h2 class="title" @click="$emit('buttonClick')">{{ job.title }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div class="eksperiment">
              <Button
                class="button"
                v-if="job.type === 'Full Time'"
                label="Full time"
                @buttonClick="$emit('buttonClick')"
              />
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
  </div>
</template>
<style src="./job-card.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import Button from '../button/button.vue';

export default defineComponent({
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
  // mounted() {
  //   console.log(this.Button);
  // },
});
</script>
