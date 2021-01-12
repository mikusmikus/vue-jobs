<template>
  <h4 class="heading4">Location</h4>
  <div class="input-wrapper">
    <input
      class="input"
      type="text"
      placeholder="City, state, zip code or country"
      :value="value"
      @change="handleInput"
    />
    <i class="material-icons md-18">public</i>
  </div>
</template>

<style src="./search-location.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';

const SearchBar = defineComponent({
  components: {},
  props: {
    value: String,
  },
  methods: {
    handleInput(event: { target: { value: string } }) {
      this.$emit('handleInput', event.target.value);
    },
  },
});

export default SearchBar;
</script>
