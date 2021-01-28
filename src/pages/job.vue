<template>
  <div class="container container-fluid">
    <div class="row " v-if="loading">
      <div class="col-xs-12">
        <Loader />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-4">
        <ApllyCard :job="job"/>
      </div>
      <div class="col-xs-12 col-sm-8">
        <Hero :job="job" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import axios from 'axios';
import Hero from '../components/hero/hero.vue';
import ApllyCard from '../components/apply-card/apply-card.vue';
import Loader from '../components/loader/loader.vue';

export default defineComponent({
  components: {
    Hero,
    Loader,
    ApllyCard,
  },
  data: () => ({
    loading: false,
    job: {},
  }),
  beforeCreate() {
    this.loading = true;
    const jobId = this.$route.params.id;
    const url = `https://jobs.github.com/positions/${jobId}.json`;
    axios.get(url).then((res) => {
      this.job = res.data;
      this.loading = false;
    });
  },
  methods: {
    backToHome() {
      router.push({ path: '/' });
    },
  },
  computed: {},
});
</script>
<style scoped lang="scss"></style>
