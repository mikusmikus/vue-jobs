<template>
  <div class="container container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <SearchBar
          @buttonClick="handleMainSearch"
          @inputValueUpdate="searchText = $event"
          :value="searchText"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 col-xs-12">
        <div class="row">
          <div class="col-xs-12">
            <Checkbox
              label="Full time"
              id="fullTime"
              @checkboxValueUpdate="isFullTime = $event"
              :checked="isFullTime"
            />
          </div>
          <div class="col-xs-12">
            <SearchLocation :value="locationText" @handleInput="handleLocationInput" />
          </div>
          <div class="col-xs-12">
            <RadioList
              :cities="cities"
              :selected="selectedRadio"
              @radioValueUpdate="handleSelectedRadio"
            />
          </div>
        </div>
      </div>
      <div class="col-sm-8 col-xs-12">
        <div class="row">
          <div class="col-xs-12" v-if="loading">
            <Loader />
          </div>
          <template v-else>
            <h1 v-show="filteredJobs.length === 0">Sorry, cant find any job</h1>
            <div class="col-xs-12" v-for="job in filteredJobs" :key="job.id">
              <JobCard :job="job" @buttonClick="handleSingleJob(job.id)" />
            </div>
          </template>
        </div>
        <div class="row end-xs ">
          <div class="col-xs-12">
            <PageButtons
              :currentPage="currentPage"
              :pagesCount="pagesCount"
              :pageButtons="pageButtons"
              @previousPage="currentPage = currentPage - 1"
              @firstPage="currentPage = 1"
              @currentPage="currentPage = $event"
              @lastPage="currentPage = pagesCount"
              @nextPage="currentPage = currentPage + 1"
            />
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
import router from '../router';
import JobCard from '../components/job-card/job-card.vue';
import SearchBar from '../components/search/search.vue';
import SearchLocation from '../components/search-location/search-location.vue';
import Checkbox from '../components/checkbox/checkbox.vue';
import PageButtons from '../components/page-buttons/page-buttons.vue';
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
  isFullTime: boolean;
  dataPage: number;
  currentPage: number;
  pagesCount: number;
}
const cities = ['london', 'amsterdam', 'New York', 'Berlin'];

export default defineComponent({
  components: {
    JobCard,
    SearchBar,
    Loader,
    Checkbox,
    SearchLocation,
    RadioList,
    PageButtons,
  },
  data(): Data {
    return {
      jobList: [],
      cities,
      loading: false,
      searchText: '',
      locationText: '',
      selectedRadio: '',
      isFullTime: false,
      dataPage: 1,
      currentPage: 1,
      pagesCount: 1,
    };
  },
  mounted() {
    this.handleFilterJobs();
  },
  methods: {
    handleSingleJob(id: string) {
      router.push({ name: 'job', params: { id } });
    },
    handleLocationInput(text: string) {
      this.locationText = text;
      this.handleEverySearch('location');
    },
    handleSelectedRadio(text: string) {
      this.selectedRadio = text;
      this.handleEverySearch('radio');
    },
    handleMainSearch() {
      this.handleEverySearch('main');
    },
    handleEverySearch(text: string) {
      if (text === 'radio') {
        this.searchText = '';
        this.locationText = '';
      } else if (text === 'location') {
        this.searchText = '';
        this.selectedRadio = '';
      } else if (text === 'main') {
        this.selectedRadio = '';
        this.locationText = '';
      }
      this.currentPage = 1;
      this.handleFilterJobs();
    },
    handleFilterJobs() {
      this.loading = true;
      const accessPoint = 'https://cors-anywhere.herokuapp.com';
      const text = this.searchText.split(' ').join('');
      let url = `https://jobs.github.com/positions.json?page=${this.dataPage}`;
      if (this.searchText) {
        url += `&search=${text.toLowerCase()}`;
      } else if (this.locationText) {
        url += `&location=${this.locationText}`;
      } else if (this.selectedRadio) {
        url += `&location=${this.selectedRadio.toLowerCase()}`;
      }

      axios.get(`${accessPoint}/${url}`).then(({ data }) => {
        const filteredJobs = data.map((job: Job) => job);
        this.jobList = filteredJobs;
        this.pagesCount = Math.ceil(this.jobList.length / 5);
        this.loading = false;
      });
    },
    getMoreData() {
      this.dataPage += 1;
      this.loading = true;
      const accessPoint = 'https://cors-anywhere.herokuapp.com';
      const url = `https://jobs.github.com/positions.json?page=${this.dataPage}`;
      axios
        .get(`${accessPoint}/${url}`)
        .then(({ data }) => {
          const filteredJobs = data.map((job: Job) => job);
          if (!filteredJobs) {
            return;
          }
          this.jobList = [...this.jobList, ...filteredJobs];
          this.pagesCount = Math.ceil(this.jobList.length / 5);
          this.loading = false;
        })
        .catch((error) => Promise.reject(error));
    },
  },
  beforeUpdate() {
    if (
      this.jobList.length > 50 * this.dataPage - 1
      && this.currentPage === this.pagesCount
      && !(this.jobList.length % 50)
    ) {
      this.getMoreData();
    }
  },
  computed: {
    pageButtons(): number[] {
      const buttonArr: number[] = [];
      if (this.pagesCount === 1) {
        return buttonArr;
      }
      if (this.pagesCount === 2) {
        return [1, 2];
      }
      if (this.pagesCount === 3) {
        return [1, 2, 3];
      }
      if (this.currentPage === 1) {
        return [1, 2, 3];
      }
      if (this.currentPage >= this.pagesCount - 1) {
        return [this.pagesCount - 2, this.pagesCount - 1, this.pagesCount];
      }
      buttonArr.push(this.currentPage - 1, this.currentPage, this.currentPage + 1);
      return buttonArr;
    },
    filteredJobs(): Job[] {
      if (this.isFullTime) {
        const fullTimeJobs = this.jobList.filter((job) => job.type === 'Full Time');
        return fullTimeJobs.slice((this.currentPage - 1) * 5, this.currentPage * 5);
      }
      return this.jobList.slice((this.currentPage - 1) * 5, this.currentPage * 5);
    },
  },
});
</script>
<style scoped lang="scss"></style>
