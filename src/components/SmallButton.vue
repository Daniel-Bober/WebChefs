<template>
  <button :class="buttonClassName">
    <slot></slot>
  </button>
</template>

<script setup lang='ts'>
import {computed} from "vue";
import ButtonColor from "@/enums/SmallButtonColors";

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const buttonClassName = computed(() => {
  switch (props.color) {
    case ButtonColor.Gray: {
      return 'small-button gray'
    }
    case ButtonColor.Blue: {
      return 'small-button blue'
    }
    case ButtonColor.Green: {
      return 'small-button green'
    }
    case ButtonColor.Red: {
      return 'small-button red'
    }
  }
});
</script>

<style lang='scss' scoped>
.small-button {
  max-height: 14px;
  padding: 2px 6px;
  font-family: "rubik-medium", serif;
  font-size: $font-9px;
  color: $primary-w;
  border-radius: 2px;
}

.small-button.gray {
  background-color: $ui-g5;
}

.small-button.blue {
  background-color: $secondary-b-lighter;
}

.small-button.green {
  background-color: $supporting-6;
}

.small-button.red {
  background-color: $supporting-3;
}
</style>