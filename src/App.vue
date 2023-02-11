<template>
  <main>
    <TitleBar></TitleBar>

    <div class="main-section">
      <div class="wrapper">

        <DropDownMenu></DropDownMenu>

        <div class="user-section">
          <NavBar></NavBar>
          <router-view></router-view>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
import TitleBar from "@/components/TitleBar.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";
import NavBar from "@/components/NavBar.vue";


</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main-section {
    padding: 40px;
    display: flex;
    flex-grow: 1;

    .wrapper {
      display: flex;
      flex-grow: 1;
      border: 1px solid $ui-g5;

      .user-section {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-left: 1px solid $ui-g5;

      }
    }
  }
}
</style>
