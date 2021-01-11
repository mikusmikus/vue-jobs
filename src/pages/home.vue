<template>
  <div class="container">
    <div class="row ">
      <div class="col-xs-12">
        <SearchBar
          :value="searchText"
          @handleInput="handleSearchInput"
          @buttonClick="handleSearch"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-4">
        <div class="row">
          <div class="col-xs-12">
            <Checkbox
              label="Full time"
              id="fullTime"
              @checkboxValueUpdate="handleFulltimeOption"
              :checked="isFullTime"
            />
          </div>
          <div class="col-xs-12">
            <h4 class="heading4">Location</h4>
            <SearchLocation :value="locationText" @handleInput="handleLocationInput" />
          </div>
          <div class="col-xs-12">
            <RadioList
              :cities="cities"
              :selected="selectedRadio"
              @handleRadioButton="handleSelectedRadio"
            />
          </div>
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
import Checkbox from '../components/checkbox/checkbox.vue';
import RadioList from '../components/radio-list/radio.vue';
import Loader from '../components/loader/loader.vue';
import { Job } from '../helpers/types/types';

interface Data {
  jobList: Job[];
  cities: string[];
  loading: boolean;
  searchText: string;
  locationText: string;
  selectedRadio: string;
  page: number;
  isFullTime: boolean;
}
const cities = ['London', 'Amsterdam', 'New York', 'Berlin'];

export default defineComponent({
  components: {
    JobCard,
    SearchBar,
    Loader,
    Checkbox,
    SearchLocation,
    RadioList,
  },
  data(): Data {
    return {
      jobList: [],
      cities,
      loading: false,
      searchText: '',
      locationText: '',
      selectedRadio: '',
      page: 2,
      isFullTime: false,
    };
  },
  mounted() {
    this.handleFilterJobs();
  },
  methods: {
    handleSingleJob(id: string) {
      router.push({ name: 'job', params: { id } });
    },
    handleSearchInput(text: string) {
      console.log(text);

      this.searchText = text;
    },
    handleLocationInput(text: string) {
      this.locationText = text;
    },
    handleSelectedRadio(text: string) {
      this.selectedRadio = text;
      this.searchText = '';
      this.locationText = '';
      this.handleFilterJobs();
    },
    handleSearch() {
      this.selectedRadio = '';
      this.locationText = '';
      this.handleFilterJobs();
    },
    handleLocationSearch() {
      this.searchText = '';
      this.selectedRadio = '';
      this.handleFilterJobs();
    },
    handleFulltimeOption(value: boolean) {
      this.isFullTime = value;
    },
    handleFilterJobs() {
      this.loading = true;
      // const url = `https://raw.githubusercontent.com/mart-j/jobs/main/positions.json?search=${
      const accessPoint = 'https://cors-anywhere.herokuapp.com';
      const url = `https://jobs.github.com/positions.json?search=${this.searchText}&full_time=${
        this.searchText
      }&full_time=${this.isFullTime}&location=${
        this.locationText ? this.locationText : this.selectedRadio
      }`;
      axios.get(`${accessPoint}/${url}&page=${this.page}`).then(({ data }) => {
        this.jobList = data.map((job: Job) => job);
        this.loading = false;
      });
    },
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
