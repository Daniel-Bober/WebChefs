<template>
  <div class="user-edit-view">

    <div class="top-section">

      <div class="info-group">
        <div class="path">User / User Edit</div>
        <div class="user-name">Hugh Jackman</div>
      </div>

      <div class="buttons-group">
        <BigButton :color="ButtonColor.Red">DELETE</BigButton>
        <BigButton :color="ButtonColor.Yellow" @click="showPopUpWindow">BLOCK</BigButton>
        <BigButton :color="ButtonColor.GrayBlue">SET PASSWORD</BigButton>
        <BigButton :color="ButtonColor.Blue">SAVE</BigButton>
      </div>
    </div>

    <div class="user-edit-section">
      <div class="width-modifier">
        <TabNavigation>

          <TheTab title="Logs">Logs</TheTab>

          <TheTab title="Permissions">
            <PermissionsTabContent></PermissionsTabContent>
          </TheTab>

        </TabNavigation>
      </div>

      <TabNavigation>

        <TheTab title="Attachments">
          <AttachmentsTabContent></AttachmentsTabContent>
        </TheTab>

        <TheTab title="History">History</TheTab>

      </TabNavigation>
    </div>

    <ConfirmationPopUpWindow
        :is-hidden="isPopUpHidden"
        @confirm="blockUser"
        @reject="closePopUpWindow"
    >
      Are you sure you want to block this user?
    </ConfirmationPopUpWindow>
  </div>
</template>


<script setup lang="ts">
import TabNavigation from "@/components/TabNav/TabNavigation.vue";
import TheTab from "@/components/TabNav/TheTab.vue";
import PermissionsTabContent from "@/components/TabNav/TheTabContent/Permissions/PermissionsTabContent.vue";
import AttachmentsTabContent from "@/components/TabNav/TheTabContent/Attachments/AttachmentsTabContent.vue";
import BigButton from "@/components/BigButton.vue";
import ButtonColor from "@/enums/BigButtonColors";
import ConfirmationPopUpWindow from "@/components/ConfirmationPopUpWindow.vue";
import {ref} from "vue";


const isPopUpHidden = ref(true);

function showPopUpWindow() {
  isPopUpHidden.value = false;
}

function closePopUpWindow() {
  isPopUpHidden.value = true;
}

function blockUser() {
  //Block User
  closePopUpWindow()
}

</script>


<style lang="scss" scoped>

.user-edit-view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;

  .top-section {
    height: 42px;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info-group {
      padding: 0 25px;

      .path {
        font-size: $font-12px;
        color: $ui-g3;
      }

      .user-name {
        font-size: $font-22px;
        color: $supporting-7;
      }
    }

    .buttons-group {
      margin-right: 30px;
      display: flex;
      gap: 22px;
    }
  }

  .user-edit-section {
    margin: 24px 0;
    padding: 0 25px;
    display: flex;
    flex-grow: 1;
    gap: 15px;

    .width-modifier {
      min-width: 56%;
      display: flex;
    }

  }
}

</style>