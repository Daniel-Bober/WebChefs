<template>
<div class="selected-list-element">
  <div class="title">{{ props.selectedCountry.name }}</div>
  <button @click="removeFromSelected"><img src="src/assets/images/icons/x.svg" alt="delete icon"></button>
</div>
</template>

<script setup lang='ts'>
import type {PropType} from "vue";
import type {CountryListElement} from "@/types/CountryListElement";

const props = defineProps({
 selectedCountry: {
   type: Object as PropType <CountryListElement>,
   required: true

 }
});

const emit = defineEmits(["removeFromSelected"]);

function removeFromSelected() {
  emit("removeFromSelected", props.selectedCountry.id);
}
</script>

<style lang='scss' scoped>
.selected-list-element {
  max-height: 22px;
  padding: 6px 0 6px 8px;
  display: flex;
  align-items: center;
  background-color: $ui-g6;
  border-radius: 2px;
  user-select: none;

  .title {
    font-size: $font-11px;
    color: $ui-g1;
  }

  button {
    width: 24px;
    height: 24px;
    margin-left: 6px;
  }
}
</style>