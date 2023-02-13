<template>
  <div :class="dropDownButtonClassName">

    <div class="title-section" @click="isClickedToggle">
      <div class="icon-wrapper">
        <slot name="icon"></slot>
      </div>

      <div v-if="!props.isMenuHidden">
        <slot name="title" ></slot>
      </div>
    </div>

    <div class="list-section" v-if="isClicked && !props.isMenuHidden">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {computed, ref} from "vue";

const props = defineProps({
  isMenuHidden: Boolean
})

const isClicked = ref(false);

const dropDownButtonClassName = computed(() => {
  if(!isClicked.value) {
    return 'drop-down-button'
  }
  return 'drop-down-button clicked'
});

function isClickedToggle() {
  isClicked.value = !isClicked.value
}
</script>

<style lang='scss' scoped>
.drop-down-button {
  max-height: 44px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: $time-hover-anim;

  .title-section {
    height: 44px;
    padding-left: 22px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: $font-12px;
    color: $ui-g3;
    cursor: pointer;
    user-select: none;

    .icon-wrapper {
      padding: 10px 8px;
      fill: $primary-bg;
    }
  }

  .title-section:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .list-section {
    max-height: 0;
    display: flex;
    flex-direction: column;
    transition: 1500ms;
  }
}

.drop-down-button.clicked {
  max-height: none;
  border-color: $ui-g5;
  background-color: $ui-g6;

  .list-section {
    max-height: none;
  }

  .title-section {
    font-family: "rubik-medium", serif;
    color: $primary-b;

    .icon-wrapper {
      fill: $primary-b;
    }
  }
}
</style>