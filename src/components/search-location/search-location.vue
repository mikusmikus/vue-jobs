<template>
  <div class="row">
    <div class="col-xs-12">
    </div>
    <div class="col-xs-12">
      <h4>LOCATION</h4>
      <div class="input-wrapper">
        <input
          type="text"
          class="input"
          placeholder="City, state, zip code or country"
          :value="locationValue"
          @change="$emit('update:locationValue', $event.target.value)"
        />
        <i class="material-icons md-18">public</i>
      </div>
    </div>
    <div class="col-xs-12"></div>
  </div>
</template>

<style src="./search-location.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';

const SearchBar = defineComponent({
  name: 'Search-Location',
  components: {},
  props: {
    cities: {
      type: Array,
    },
  },
});

export default SearchBar;
</script>
