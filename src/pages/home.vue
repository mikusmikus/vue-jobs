<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>SEARCHBAR HERE</h1>
        <!-- <Search  component/>  -->
        <!-- input Here -->
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
          <!-- < LOCATION Search  component/>  -->
                  <!-- input Here -->
        <h1>Searchlist here</h1>
        <h4>location</h4>
        <input type="text">
        <div>
        <input type="radio">
        <label for="">newyork</label>
        </div>
        <input type="radio">
        <input type="radio">
        <input type="radio">
      </div>
      <div class="col-xs-8" >
        <div class="row">
          <div class="col-xs-12" v-if="loading">
            <h1>Loading....</h1>
          </div>
          <div class="col-xs-12" v-else v-for="job in jobList" :key="job.id">
            <JobCard :job="job" @buttonClick="handleClick(job.id)" label="assd" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import JobCard from '../components/job-card/job-card.vue';
import { Job } from '../helpers/types/types';

export default defineComponent({
  components: { JobCard },
  data: () => ({
    loading: false,
    jobList: [] as Job[],
  }),
  mounted() {
    // const accessPoint = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://jobs.github.com/positions.json';
    this.loading = true;
    axios.get(`${url}?page=${1}`).then(({ data }) => {
      this.jobList = data.map((job: Job) => job);
      this.loading = false;
    });
  },
  methods: {
    handleClick(id: string) {
      router.push({ name: 'job', params: { id } });
      // router.push({ path: `/job/${id}` });
    },
  },
  computed: {},
});
</script>
<style scoped lang="scss"></style>
