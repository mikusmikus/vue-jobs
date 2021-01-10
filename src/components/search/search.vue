<template>
  <div class="search">
    <div class="input-wrapper">
      <input
        type="text"
        class="input"
        placeholder="Title, companies, expertise or benefits"
        :value="searchValue"
        @change="$emit('update:searchValue', $event.target.value)"
      />
       <i class="material-icons md-18">work_outline</i>
      <Button label="Search" class="searchButton" @buttonClick="$emit('buttonClick')" />

    </div>
  </div>
</template>

<style src="./search.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';

const SearchBar = defineComponent({
  name: 'Search',
  components: { Button },
  props: {
    inputValue: {
      type: String,
      required: true,
    },
  },
});

export default SearchBar;
</script>
