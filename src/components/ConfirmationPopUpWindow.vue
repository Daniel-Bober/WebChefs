<template>
  <div :class="popUpWindowClassName">

    <div class="wrapper">
      <div class="main-section">
        <slot></slot>

        <div class="buttons-group">
          <button class="reject" @click="reject">No</button>
          <button class="confirm" @click="confirm">Yes</button>
        </div>
      </div>

      <div class="outside-click" @click="reject"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {computed} from "vue";

const props = defineProps({
  isHidden: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(["confirm", "reject"])

const popUpWindowClassName = computed(() => {
  if (!props.isHidden) {
    return "pop-up-window"
  }
  return "pop-up-window hidden"
})

function confirm() {
  emit("confirm");
}

function reject() {
  emit("reject")
}

</script>

<style lang='scss' scoped>
.pop-up-window {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: $time-hover-anim;

  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;

    .main-section {
      width: 400px;
      height: 300px;
      padding: 20px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: $font-20px;
      text-align: center;
      background-color: $primary-w;
      border: 1px solid $ui-g5;
      border-radius: 6px;
      z-index: 1;

      .buttons-group {
        width: 200px;
        margin-top: 100px;
        display: flex;
        justify-content: space-between;

        .reject,
        .confirm {
          padding: 8px 20px;
          font-size: $font-16px;
          color: $primary-w;
          background-color: $supporting-3;
          border-radius: 6px;
        }

        .confirm {
          background-color: $supporting-6;
        }
      }
    }

    .outside-click {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

.pop-up-window.hidden {
  display: none;
}
</style>