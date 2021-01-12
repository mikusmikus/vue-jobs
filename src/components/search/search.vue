<template>
  <div class="search">
    <div class="input-wrapper">
      <input
        class="input"
        type="text"
        placeholder="Title, companies, expertise or benefits"
        :value="value"
        @input="$emit('inputValueUpdate', $event.target.value)"
      />
      <i class="material-icons">work_outline</i>
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
    value: String,
  },
});

export default SearchBar;
</script>
