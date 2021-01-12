<template>
  <div class="container">
    <div class="row " v-if="loading">
      <div class="col-xs-12">
        <Loader />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-xs-12 col-sm-4 col-md-3">
        <ApllyCard :job="job"/>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-9">
        <Hero :job="job" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/order
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import axios from 'axios';
import Hero from '../components/hero/hero.vue';
// import Button from '../components/button/button.vue';
import ApllyCard from '../components/apply-card/apply-card.vue';
import Loader from '../components/loader/loader.vue';

export default defineComponent({
  components: {
    Hero,
    // Button,
    Loader,
    ApllyCard,
  },
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
  methods: {
    backToHome() {
      console.log('back to Home');
      router.push({ path: '/' });
    },
  },
  computed: {},
});
</script>
<style scoped lang="scss"></style>
