<template>
  <div class="permissions-list">

    <div class="top-section">
      <div class="top-section__object">Object</div>
      <div class="top-section__action">Action</div>
    </div>

    <div class="title-section">MOVIES</div>

    <div class="components-list">
      <PermissionsListComponent
          v-for="el in permissions"
          :title="el"
      ></PermissionsListComponent>
    </div>

  </div>
</template>

<script setup lang='ts'>

const permissions = ["Script", "Props", "Screen", "Money", "Stunt"]

import PermissionsListComponent from "@/components/TabNav/TheTabContent/Permissions/PermissionsListComponent.vue";
</script>

<style lang='scss' scoped>
.permissions-list {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .top-section {
    display: flex;
    border-bottom: 1px solid $ui-g4;

    div{
      font-family: "rubik-medium", serif;
      font-size: $font-12px;
      color: $ui-g1;
    }

    &__object {
      padding: 16px 0 16px 12px;
      flex-grow: 1;
      max-width: 491px;
    }

    &__action {
      min-width: 200px;
      padding: 16px 0 16px 9px;
    }
  }

  .title-section {
    padding: 12px;
    font-family: "rubik-medium", serif;
    font-size: $font-12px;
    color: $ui-g3;
    border-bottom: 1px solid $ui-g5;
  }

  .components-list {
    display: flex;
    flex-direction: column;
  }
}
</style>