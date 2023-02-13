<template>
  <div class="attachments-tab-content">

    <div class="title-section">
      <div class="title">Attachments</div>
    </div>

    <div class="attachments-section">

      <div class="left-side">

        <div class="input-container name-input">
          <label for="name">Name: </label>
          <input type="text" id="name" @input="emitFormChange">
        </div>

        <div class="input-container">
          <label for="last-name">Last Name: </label>
          <input type="text" id="last-name" @input="emitFormChange">
        </div>

        <div class="input-container">
          <label for="date">Birth date: </label>
          <input type="date" id="date" @input="emitFormChange">
        </div>

      </div>

      <div class="right-side">

        <div class="files-section">
          <img src="src/assets/images/icons/documents.svg" alt="documents icon">
          <div class="first-text">Drag and drop files</div>
          <div class="second-text">Drag and drop files or select from your files</div>
        </div>

        <div class="multi-select">
          <MultiSelect
              title="Citizenship"
          ></MultiSelect>
        </div>

      </div>
    </div>

    <div class="title-section">
      <div class="title">Contact information</div>
    </div>

    <div class="contact-section">
      <div class="left-side">
        <div class="input-container">
          <label for="instagram">Instagram</label>
          <input type="text" id="instagram" @input="emitFormChange">
        </div>

        <div class="input-container">
          <label for="tweeter">Tweeter</label>
          <input type="text" id="tweeter" @input="emitFormChange">
        </div>
      </div>

      <div class="right-side">
        <div class="input-container">
          <label for="email">Email</label>
          <input type="text" id="email" @input="emitFormChange">
        </div>

        <div class="input-container">
          <label for="facebook">Facebook</label>
          <input type="text" id="facebook" @input="emitFormChange">
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
const emit = defineEmits(["formChanged"]);

function emitFormChange(event: any) {
  emit("formChanged", event.target.id, event.target.value);
}

import MultiSelect from "@/components/MultiSelect/MultiSelect.vue";
</script>

<style lang='scss' scoped>
.attachments-tab-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;


  .title-section {
    height: 63px;
    margin: 0 16px;
    border-bottom: 1px solid $ui-g5;

    .title {
      margin: 24px 0 0 16px;
      font-size: $font-18px;
      color: $supporting-7;
    }
  }

  input {
    width: 265px;
    padding: 9px 8px 9px 12px;
    font-size: $font-12px;
    color: $ui-g1;
    border: 1px solid $ui-g5;
    border-radius: 2px;
    outline-color: $ui-g4;
  }

  .input-container {
    margin-top: 32px;
    position: relative;
  }

  label {
    font-size: $font-11px;
    color: $ui-g1;
    position: absolute;
    left: 10px;
    top: -18px;
  }

  .attachments-section {
    height: 210px;
    padding: 0 32px;
    display: flex;
    gap: 39px;

    .left-side {
      margin-top: 16px;

      .name-input {
        margin-top: 16px;
      }

      input[type="date"] {
        background: url("src/assets/images/icons/callendar.svg") no-repeat 95%;
      }

      input[type="date"]::-webkit-calendar-picker-indicator {
        opacity: 0;
        cursor: pointer;
      }
    }

    .right-side {
      margin-top: 16px;

      .files-section {
        width: 265px;
        height: 122px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px dashed $ui-g5;
        border-radius: 4px;

        img {
          margin-top: 20px;
        }

        .first-text {
          margin-top: 15px;
          font-family: "rubik-medium", serif;
          font-size: $font-12px;
          color: $primary-b;
          user-select: none;
        }

        .second-text {
          margin-top: 3px;
          font-size: $font-11px;
          color: $ui-g4;
          user-select: none;
        }
      }

      .multi-select {
        margin-top: 16px;
      }
    }

  }

  .contact-section {
    padding: 0 32px;
    display: flex;
    gap: 39px;

    .left-side {

    }

    .right-side {

    }
  }
}
</style>