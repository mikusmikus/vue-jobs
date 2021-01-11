<template>
  <div :key="city" v-for="city in cities">
    <input
      :id="city"
      type="radio"
      :checked="selected === city"
      @change="handleRadioButton(city)"
    />
    <label class="label" :for="city">{{ city }}</label>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'radio',
  props: {
    cities: Array,
    selected: {
      type: String,
    },
  },
  methods: {
    handleRadioButton(value: string) {
      this.$emit('handleRadioButton', value);
    },
  },
});
</script>
