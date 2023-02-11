<template>
  <div class="tab-navigation">
    <ul>
      <li
          v-for="tabTitle in tabTitles"
          :key="tabTitle"
          :class="{ selected: tabTitle === selectedTab }"
          @click="selectedTab = tabTitle"
      >
        {{ tabTitle }}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script setup lang='ts'>
import {provide, ref, useSlots} from "vue";

const slots = useSlots();

if (!slots.default) {
  throw new Error('TabNavigation component is missing slots');
}

const tabTitles = ref(slots.default().map((tab) => tab.props?.title));

const selectedTab = ref(tabTitles.value[0]);

provide('selectedTab', selectedTab);
</script>

<style lang='scss' scoped>
.tab-navigation {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-grow: 1;
  border: 1px solid $ui-g5;
  border-radius: 2px;

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 18px 0 0 0;
    border-bottom: 1px solid $ui-g5;

    li {
      padding: 8px 20px 12px 20px;
      cursor: pointer;
      font-size: $font-12px;
      color: $ui-g1;
      user-select: none;
    }

    li.selected {
      border-bottom: 4px solid $primary-b;
      font-weight: bold;
    }
  }
}
</style>