<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12" v-if="loading">
        <h1>Loading....</h1>
      </div>
      <div v-else class="col-xs-12">
        <h1>this is Job page</h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
// import Job from './home.vue';

export default defineComponent({
  data: () => ({
    loading: false,
    job: {},
  }),
  mounted() {
    this.loading = true;
    const jobId = this.$route.params.id;
    const url = `https://jobs.github.com/positions/${jobId}.json`;
    axios.get(url).then((res) => {
      console.log(res.data);
      this.job = res.data;
      this.loading = false;
    });
  },
  methods: {},
  computed: {},
});
</script>
<style scoped lang="scss"></style>
