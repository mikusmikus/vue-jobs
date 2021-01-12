<template>
  <div class="radio-wrapper">
    <div :key="city" v-for="city in cities">
      <input
        :id="city"
        type="radio"
        :checked="selected === city"
        @change="radioValueUpdate(city)"
      />
      <label class="label" :for="city">{{ city }}</label>
    </div>
  </div>
</template>

<style src="./radio.scss" lang="scss"></style>

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
    radioValueUpdate(value: string) {
      this.$emit('radioValueUpdate', value);
    },
  },
});
</script>
