<template>
  <button :class="selectOptionsListElementClassName" @click="emitClickEvent">{{ props.country.name }}</button>
</template>

<script setup lang='ts'>
import {computed} from "vue";
import type {MultiSelectListElement} from "@/types/MultiSelectListElement";
import type {PropType} from "vue"

const props = defineProps({
  country: {
    type: Object as PropType <MultiSelectListElement>,
    required: true
  }
});

const emit = defineEmits(["addToSelected", "removeFromSelected", "clicked"]);


const selectOptionsListElementClassName = computed(() => {
  if (!props.country.isSelected) {
    return "select-options-list-element"
  }
  return "select-options-list-element selected"
});

function emitClickEvent() {
  emit("clicked", props.country.id);
}

</script>

<style lang='scss' scoped>
.select-options-list-element {
  width: 100%;
  padding: 8px 16px;
  margin-top: 5px;
  font-size: $font-12px;
  text-align: left;
  color: $ui-g1;
  background-color: $ui-g6;
  border: 1px solid transparent;
  border-radius: 6px;
  cursor: pointer;
}

.select-options-list-element:hover {
  border: 1px solid $ui-g5;
}

.select-options-list-element.selected {
  background-color: $ui-g5;
}
</style>