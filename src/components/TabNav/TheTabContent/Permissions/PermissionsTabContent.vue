<template>
<div class="permissions-tab-content">

  <div class="role-section">
    <div class="role">Role: <span>Performer</span></div>
  </div>

  <PermissionsList></PermissionsList>

</div>
</template>

<script setup lang='ts'>

import PermissionsList from "@/components/TabNav/TheTabContent/Permissions/PermissionsList.vue";
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
  }
}
</style>