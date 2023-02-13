<template>
  <div class="permissions-list">

    <div class="top-section">
      <div class="top-section__object">Object</div>
      <div class="top-section__action">Action</div>
    </div>

    <div class="title-section">MOVIES</div>

    <div class="components-list">
      <PermissionsListComponent
          v-for="permission in permissionsList"
          :key="permission.id"
          :permission="permission"
          @create-button-clicked="createButtonClicked"
      ></PermissionsListComponent>
    </div>

  </div>
</template>

<script setup lang='ts'>
import type {PermissionListElement} from "@/types/PermissionListElement";
import PermissionsListComponent from "@/components/TabNav/TheTabContent/Permissions/PermissionsListComponent.vue";

const permissionsList: Array<PermissionListElement> = [
  {id: 0, name: "Script", isCreateButtonActive: false},
  {id: 1, name: "Props", isCreateButtonActive: false},
  {id: 2, name: "Screen", isCreateButtonActive: false},
  {id: 3, name: "Money", isCreateButtonActive: false},
  {id: 4, name: "Stunt", isCreateButtonActive: false},
];

function createButtonClicked(id: number) {
  //in this test exercise let's assume index is also id
  permissionsList[id].isCreateButtonActive = !permissionsList[id].isCreateButtonActive;
  console.log(permissionsList[id].name, permissionsList[id].isCreateButtonActive); //TODO [DEV] console log
}
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

    div {
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