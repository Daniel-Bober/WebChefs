<template>
<div class="permissions-tab-content">

  <div class="role-section">
    <div class="role">Role: <span>Performer</span></div>

    <div class="multi-select-wrapper">
      <MultiSelect
          title="Asign Role"
          :data="roles"
      ></MultiSelect>
    </div>
  </div>

  <PermissionsList></PermissionsList>

</div>
</template>

<script setup lang='ts'>
import PermissionsList from "@/components/TabNav/TheTabContent/Permissions/PermissionsList.vue";
import MultiSelect from "@/components/MultiSelect/MultiSelect.vue";
import {ref} from "vue";
import type {MultiSelectListElement} from "@/types/MultiSelectListElement";
import type {Ref} from "vue";


const roles: Ref<Array<MultiSelectListElement>> = ref([
  {id: 0, name: "Performer", isSelected: false},
  {id: 1, name: "Role 2", isSelected: false},
]);
</script>

<style lang='scss' scoped>
.permissions-tab-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .role-section {
    height: 92px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $ui-g5;

    .role {
      padding: 0 32px;
      margin-top: 41px;
      font-size: $font-22px;
      color: $ui-g1;

      span {
        font-size: $font-16px;
        color: $primary-b;
      }
    }

    .multi-select-wrapper {
      padding: 13px 32px 0 0;
    }
  }
}
</style>