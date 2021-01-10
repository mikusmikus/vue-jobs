<template>
  <div class="input-wrapper">
    <input
      type="text"
      class="input"
      placeholder="Title, companies, expertise or benefits"
      :value="searchText"
      @input="$emit($event.target.value)"
    >
  <slot></slot>
  </div>
</template>

<style src="./search.scss" lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

const SearchBar = defineComponent({
  name: 'Search',
  props: {
    searchText: {
      type: String,
    },
  },
});

export default SearchBar;
</script>
