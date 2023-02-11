<template>
  <div class="tab-content" v-show="selectedTab === title">
    <slot/>
  </div>
</template>

<script setup lang='ts'>
import {inject} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const selectedTab = inject('selectedTab');
</script>

<style lang='scss' scoped>
.tab-content {
  height: 100%;
  display: flex;
  flex-grow: 1;
}
</style>