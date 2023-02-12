<template>
  <button :class="selectOptionsListElementClassName" @click="selectElementToggle">{{ props.title }}</button>
</template>

<script setup lang='ts'>
import {computed} from "vue";
import {CountryListElement} from "@/components/MultiSelect/MultiSelect.vue";

const props = defineProps({
  country: {
    type: CountryListElement,
    required: true
  }
});

const emit = defineEmits(["addToSelected", "removeFromSelected"]);


const selectOptionsListElementClassName = computed(() => {
  if(!props.country.isSelected) {
    return "select-options-list-element"
  }
  else return "select-options-list-element selected"
});

function selectElementToggle() {
  if(!props.country.isSelected) {

    emit("addToSelected", props.country.id)
  }
  else {

    emit("removeFromSelected", props.country.title)
  }
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