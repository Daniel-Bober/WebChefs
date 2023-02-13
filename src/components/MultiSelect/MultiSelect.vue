<template>
  <div class="multi-select">
    <div class="title">{{ props.title }}</div>

    <div class="main-section">

      <div class="selected-elements">
        <SelectedListElement
            v-for="selectedElement in selectedElementsList"
            :key="selectedElement.id"
            :selected-element="selectedElement"
            @remove-from-selected="removeElementFromSelected"
        ></SelectedListElement>
      </div>

      <button :class="arrowButtonClassName" @click="listVisibilityToggle">
        <img src="../../assets/images/icons/downArrow.svg" alt="down arrow icon">
      </button>

      <div :class="selectOptionsListClassName">
        <SelectOptionsListElement
            v-for="el in props.el"
            :key="el.id"
            :el="el"
            @clicked="selectElementToggle"
        ></SelectOptionsListElement>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import {computed, ref} from "vue";
import SelectOptionsListElement from "@/components/MultiSelect/SelectOptionsListElement.vue";
import SelectedListElement from "@/components/MultiSelect/SelectedListElement.vue";
import type {PropType} from "vue";


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  el: {
    type: Array as PropType<Array<any>>,
    required: true
  }
});

const isListHidden = ref(true);

const selectOptionsListClassName = computed(() => {
  if (!isListHidden.value) {
    return "select-options-list";
  }
  return "select-options-list hidden";
});

const arrowButtonClassName = computed(() => {
  if (isListHidden.value) {
    return "arrow-button";
  }
  return "arrow-button clicked";
})

const selectedElementsList = computed(() => {
  if(props.el) {
    return props.el.filter(el => el.isSelected)
  }
});

function removeElementFromSelected(id: number) {
  props.el[id].isSelected = false;
}

function selectElementToggle(id: number) {
  props.el[id].isSelected = !props.el[id].isSelected;
}

function listVisibilityToggle() {
  isListHidden.value = !isListHidden.value;
}
</script>

<style lang='scss' scoped>
.multi-select {

  .title {
    padding-left: 10px;
    font-size: $font-11px;
    color: $ui-g1;
  }

  .main-section {
    min-height: 36px;
    padding: 6px 0;
    margin-top: 4px;
    display: flex;
    border: 1px solid $ui-g5;
    border-radius: 2px;
    position: relative;

    .selected-elements {
      width: 210px;
      margin-left: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .arrow-button {
      width: 25px;
      height: 25px;
      margin-left: 10px;
      position: absolute;
      bottom: 6px;
      right: 8px;
      display: grid;
      place-items: center;
      border-radius: 2px;
    }

    .arrow-button.clicked {
      background-color: $ui-g6;
    }

    .select-options-list {
      width: 265px;
      height: 150px;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: -155px;
      right: 0;
      border: 1px solid $ui-g5;
      border-radius: 2px;
      background-color: $primary-w;
      z-index: 1;
      overflow: scroll;
    }

    .select-options-list.hidden {
      display: none;
    }

    .select-options-list::-webkit-scrollbar {
      display: none;
    }

    .select-options-list {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

}
</style>