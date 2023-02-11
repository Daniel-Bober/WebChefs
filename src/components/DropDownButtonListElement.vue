<template>
  <div :class="listElementClassName">
    <div class="square-icon"><div></div></div>
    <router-link :to="props.path"><slot></slot></router-link>
  </div>
</template>

<script setup lang='ts'>
import {useRoute} from "vue-router";
import {computed} from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true
  }
});


const listElementClassName = computed(() => {
  if(useRoute().path != props.path) {
    return "list-element"
  }
  else return "list-element selected"
})


</script>

<style lang='scss' scoped>
.list-element {
  height: 38px;
  padding-left: 68px;
  display: flex;
  align-items: center;
  transition: $time-hover-anim;

  .square-icon {
    margin-right: 18px;
    padding: 6px;
    display: grid;
    place-items: center;

    div {
      width: 4px;
      height: 4px;
      background-color: $primary-bg;
    }
  }

  a {
    font-size: $font-12px;
    color: $ui-g3;
    text-decoration: none;
    transition: $time-hover-anim;
    user-select: none;
  }

  a:hover {
    color: $primary-b;
  }
}

.list-element.selected {

  a {
    color: $primary-b;
  }

  .square-icon {
    div {
      background-color: $primary-b;
    }
  }

}

</style>