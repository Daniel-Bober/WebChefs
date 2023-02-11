<template>
  <button :class="buttonClassName">
    <slot></slot>
  </button>
</template>

<script setup lang='ts'>
import {computed} from "vue";
import ButtonColor from "@/enums/BigButtonColors";

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const buttonClassName = computed(() => {
  switch (props.color) {
    case ButtonColor.Red: {
      return 'big-button red'
    }
    case ButtonColor.Yellow: {
      return 'big-button yellow'
    }
    case ButtonColor.GrayBlue: {
      return 'big-button gray-blue'
    }
    case ButtonColor.Blue: {
      return 'big-button blue'
    }
  }
});
</script>

<style lang='scss' scoped>
.big-button {
  padding: 12px 24px;
  font-size: $font-12px;
  color: $primary-w;
  border-radius: 4px;
}

.big-button.red {
  background-color: $signal-error;
}

.big-button.yellow {
  background-color: $yellow;
}

.big-button.gray-blue {
  background-color: $primary-bg;
}

.big-button.blue {
  background-color: $primary-b;
}
</style>