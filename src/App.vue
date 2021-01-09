<template>
  <div id="app">
    <div class="container">
      <div class="row start-xs">
        <div class="col-xs-12">
          <Image src="https://picsum.photos/500/100" />
        </div>
      </div>
    </div>
    <div >
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
import 'flexboxgrid';
import axios from 'axios';
import { defineComponent } from 'vue';
import { Job } from './helpers/types/types';
import Image from './components/image/image.vue';

const Component = defineComponent({
  components: { Image },
  data: () => ({
    loading: false,
    jobList: [] as Job[],
  }),
  // mounted() {
  //   const accessPoint = 'https://cors-anywhere.herokuapp.com';
  //   const url = 'https://jobs.github.com/positions?description=python&location=new+york';
  //   axios.get(`${accessPoint}/${url}?page=${1}`).then((res) => console.log(res));
  // },

  methods: {},
  computed: {},
});

export default Component;
</script>
