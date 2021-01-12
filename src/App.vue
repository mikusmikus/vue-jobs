<template>
  <div id="app">
    <div class="container container-fluid">
      <div class="row start-xs">
        <div class="col-xs-12">
          <div class="logo-wrapper">
          <img src="./assets/logo.png" alt="" width="145" @click="$router.push('/')">
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style src="./App.scss" lang="scss"></style>
<script lang="ts">
import 'flexboxgrid';
import { defineComponent } from 'vue';

const Component = defineComponent({});

export default Component;
</script>
