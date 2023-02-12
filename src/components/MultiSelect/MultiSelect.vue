<template>
  <div class="multi-select">
    <div class="title">{{ props.title }}</div>

    <div class="main-section">

      <div class="selected-elements">
        <SelectedListElement
            v-for="selectedCountry in selectedCountryList"
            :key="selectedCountry.id"
            :selected-country="selectedCountry"
            @remove-from-selected="removeCountryFromSelected"
        ></SelectedListElement>
      </div>

      <button :class="arrowButtonClassName" @click="listVisibilityToggle">
        <img src="../../assets/images/icons/downArrow.svg" alt="down arrow icon">
      </button>

      <div :class="selectOptionsListClassName">
        <SelectOptionsListElement
            v-for="country in countryList"
            :key="country.id"
            :country="country"
            @clicked="selectElementToggle"
        ></SelectOptionsListElement>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import type {Ref} from "vue";
import {computed, ref} from "vue";
import SelectOptionsListElement from "@/components/MultiSelect/SelectOptionsListElement.vue";
import SelectedListElement from "@/components/MultiSelect/SelectedListElement.vue";
import type {CountryListElement} from "@/types/CountryListElement";

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const countryList: Ref<Array<CountryListElement>> = ref([
  {id: 0, name: "Australia", isSelected: false},
  {id: 1, name: "Germany", isSelected: false},
  {id: 2, name: "France", isSelected: false},
  {id: 3, name: "Poland", isSelected: false},
  {id: 4, name: "Italy", isSelected: false},
]);

const selectedCountryList = computed(() => {
  return countryList.value.filter(el => el.isSelected)
});

function removeCountryFromSelected(id: number) {
  countryList.value[id].isSelected = false;
}

function selectElementToggle(id: number) {
  countryList.value[id].isSelected = !countryList.value[id].isSelected;
}

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