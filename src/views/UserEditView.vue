<template>
  <div class="user-edit-view">

    <div class="top-section">

      <div class="info-group">
        <div class="path">User / User Edit</div>
        <div class="user-name">Hugh Jackman</div>
      </div>

      <div class="buttons-group">
        <BigButton :color="ButtonColor.Red">DELETE</BigButton>
        <BigButton :color="ButtonColor.Yellow">BLOCK</BigButton>
        <BigButton :color="ButtonColor.GrayBlue">SET PASSWORD</BigButton>
        <BigButton :color="ButtonColor.Blue" @click="submitReactiveForm">SAVE</BigButton>
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
          <AttachmentsTabContent @form-changed="formUpdate"></AttachmentsTabContent>
        </TheTab>

        <TheTab title="History">History</TheTab>

      </TabNavigation>
    </div>

  </div>
</template>


<script setup lang="ts">
import TabNavigation from "@/components/TabNav/TabNavigation.vue";
import TheTab from "@/components/TabNav/TheTab.vue";
import PermissionsTabContent from "@/components/TabNav/TheTabContent/Permissions/PermissionsTabContent.vue";
import AttachmentsTabContent from "@/components/TabNav/TheTabContent/Attachments/AttachmentsTabContent.vue";
import BigButton from "@/components/BigButton.vue";
import ButtonColor from "@/enums/BigButtonColors";
import {reactive} from "vue";

const form = reactive([
  {id: "name", value: ""},
  {id: "last-name", value: ""},
  {id: "date", value: ""},
  {id: "instagram", value: ""},
  {id: "tweeter", value: ""},
  {id: "email", value: ""},
  {id: "facebook", value: ""},
]);

function formUpdate(id: string, value: string) {
  const index = form.findIndex(el => el.id == id);
  form[index].value = value;
}

function submitReactiveForm() {
  //submit form
}

</script>


<style lang="scss" scoped>

.user-edit-view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

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