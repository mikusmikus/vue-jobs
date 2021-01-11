<template>
  <input
    type="checkbox"
    :id="id"
    :checked="checked"
    @change="handleCheckbox"
  />
  <label class="label" :for="id">{{ label }}</label>
  {{ inputValue }}
</template>

<style lang="scss"></style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'checkbox',
  props: {
    label: {
      type: String,
    },
    id: {
      type: String,
    },
    inputValue: {
      type: String,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    handleCheckbox(event: { target: { checked: boolean } }) {
      this.$emit('checkboxValueUpdate', event.target.checked);
    },
  },
});
</script>
