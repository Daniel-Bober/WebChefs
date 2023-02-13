<template>
  <div class="list-component">
    <div class="title">{{ props.permission.name }}</div>

    <div class="buttons-group">
      <SmallButton :color="ButtonColor.Gray" @click="emitCreateButtonEvent">CREATE</SmallButton>
      <SmallButton :color="ButtonColor.Blue">READ</SmallButton>
      <SmallButton :color="ButtonColor.Green">UPDATE</SmallButton>
      <SmallButton :color="ButtonColor.Red">DELETE</SmallButton>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SmallButton from "@/components/SmallButton.vue";
import ButtonColor from "@/enums/SmallButtonColors";
import type {PermissionListElement} from "@/types/PermissionListElement";
import type {PropType} from "vue";

const props = defineProps({
  permission: {
    type: Object as PropType<PermissionListElement>,
    required: true
  },
});

const emit = defineEmits(["createButtonClicked"]);


function emitCreateButtonEvent() {
  emit("createButtonClicked", props.permission.id);
}
</script>

<style lang='scss' scoped>
.list-component {
  height: 42px;
  display: flex;
  border-bottom: solid 1px $ui-g5;

  .title {
    max-width: 491px;
    padding: 12px 8px;
    flex-grow: 1;
    font-family: "rubik-medium", serif;
    font-size: $font-12px;
    color: $ui-g2;
  }

  .buttons-group {
    min-width: 200px;
    display: flex;
    align-items: center;
    gap: 8px;

  }
}
</style>