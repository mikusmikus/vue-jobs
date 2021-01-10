<template>
  <div class="container">
    <div class="row ">
      <div class="col-xs-12">
        <SearchBar v-model:searchValue="searchText" @buttonClick="handleSearch(searchText)" />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <input type="checkbox" id="fullTime" v-model="isFullTime" />
        <label for="fullTime">Full time</label>
        <SearchLocation
          v-model:locationValue="locationText"
          :cities="locations"
        />
        <div :key="city" v-for="city in locations">
          <input type="radio" :value="city" v-model="selected" @change="handleLocationSearch" />
          <label>{{ city }}</label>
        </div>
      </div>
      <div class="col-xs-8">
        <div class="row center-xs">
          <div class="col-xs-12" v-if="loading">
            <Loader />
          </div>
          <div class="col-xs-12" v-else v-for="job in showFullTimeJobs" :key="job.id">
            <JobCard :job="job" @buttonClick="handleSingleJob(job.id)" />
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
import SearchBar from '../components/search/search.vue';
import SearchLocation from '../components/search-location/search-location.vue';
import Button from '../components/button/button.vue';
import Loader from '../components/loader/loader.vue';
import { Job } from '../helpers/types/types';

interface Data {
  loading: boolean;
  searchText: string;
  locationText: string;
  jobList: Job[];
  page: number;
  locations: string[];
  selected: string;
  isFullTime: boolean;
}
const locations = ['London', 'Amsterdam', 'New York', 'Berlin'];

export default defineComponent({
  components: {
    JobCard,
    SearchBar,
    SearchLocation,
    Loader,
  },
  data(): Data {
    return {
      loading: false,
      searchText: '',
      locationText: '',
      page: 1,
      jobList: [],
      locations,
      selected: '',
      isFullTime: false,
    };
  },
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
    handleSingleJob(id: string) {
      console.log(this.searchText);
      router.push({ name: 'job', params: { id } });
      // router.push({ path: `/job/${id}` });
    },
    handleSearch(text: string) {
      this.loading = true;
      const searchUrl = 'https://jobs.github.com/positions.json?search=';
      axios.get(`${searchUrl}${this.searchText}`).then(({ data }) => {
        this.jobList = data.map((job: Job) => job);

        this.loading = false;
      });
    },
    handleLocationSearch() {
      this.loading = true;
      const searchUrl = `https://jobs.github.com/positions.json?location=${this.selected}`;
      axios.get(`${searchUrl}${this.searchText}`).then(({ data }) => {
        this.jobList = data.map((job: Job) => job);
        console.log(data);
        this.loading = false;
      });
    },
  },
  handleLocationValue(text: string) {
    console.log(text);
    console.log(this.locationText);
  },
  computed: {
    showFullTimeJobs(): Job[] {
      if (this.isFullTime) {
        return this.jobList.filter((job) => job.type === 'Full Time');
      }
      return this.jobList;
    },
  },
});
</script>
<style scoped lang="scss"></style>
