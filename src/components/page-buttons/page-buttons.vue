<template>
  <div class="pageButtons">
    <Button
      class="pageButton"
      v-show="pagesCount > 1"
      @buttonClick="$emit('previousPage')"
      :disabled="currentPage === 1"
    >
      &lt;
    </Button>
    <span class="pageDots" v-show="currentPage < 3"> </span>
    <Button
      class="pageButton"
      v-show="currentPage > 2"
      @buttonClick="$emit('firstPage')"
      v-bind:class="{ active: currentPage === 1 }"
    >
      1
    </Button>
    <span class="pageDots">
      <i class="material-icons" v-show="currentPage > 3">
        more_horiz
      </i>
    </span>
    <Button
      class="pageButton"
      v-for="page in pageButtons"
      :key="page"
      @buttonClick="$emit('currentPage', page)"
      v-bind:class="{ active: currentPage === page }"
      >{{ page }}</Button
    >
    <span class="pageDots">
      <i class="material-icons" v-show="currentPage < pagesCount - 2">
        more_horiz
      </i>
    </span>

    <Button
      class="pageButton"
      v-show="currentPage < pagesCount - 1"
      @buttonClick="$emit('lastPage')"
      v-bind:class="{ active: currentPage === pagesCount }"
      >{{ pagesCount }}</Button
    >
    <Button
      class="pageButton"
      v-show="pagesCount > 1"
      @buttonClick="$emit('nextPage')"
      :disabled="currentPage === pagesCount"
    >
      &gt;</Button
    >
  </div>
</template>

<style src="./page-buttons.scss" lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../button/button.vue';

export default defineComponent({
  components: {
    Button,
  },
  name: 'page-buttons',
  props: {
    currentPage: Number,
    pagesCount: Number,
    pageButtons: Array,
  },
});
</script>
