<template>
  <div class="list-component">
    <div class="title">{{ props.title }}</div>

    <div class="buttons-group">
      <SmallButton :color="ButtonColor.Gray">CREATE</SmallButton>
      <SmallButton :color="ButtonColor.Blue">READ</SmallButton>
      <SmallButton :color="ButtonColor.Green">UPDATE</SmallButton>
      <SmallButton :color="ButtonColor.Red">DELETE</SmallButton>
    </div>
  </div>
</template>

<script setup lang='ts'>
import SmallButton from "@/components/SmallButton.vue";
import ButtonColor from "@/enums/SmallButtonColors";

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
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