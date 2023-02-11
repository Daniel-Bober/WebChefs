<template>
  <div :class="dropDownMenuClassName">
    <div class="top-section">
      <button @click=hiddeMenuToggle><img src="src/assets/images/icons/menu.svg" alt="menu-icon"></button>

      <div class="date-section">
        <div class="day">Thursday</div>
        <div class="day-number-month">24 September</div>
        <div class="year">2020</div>
      </div>

      <div class="bottom-line"></div>
    </div>

    <div class="bottom-section">

      <DropDownButton :is-menu-hidden="isHidden">
        <template v-slot:icon>
          <svg width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 2.00006V15.0001C0 16.1046 0.895429 17.0001 2 17.0001H3V18.0001C3 19.1046 3.89543 20.0001 5 20.0001H22C23.1046 20.0001 24 19.1046 24 18.0001V5.00006C24 3.89549 23.1046 3.00006 22 3.00006H21V2.00006C21 0.895492 20.1046 6.10352e-05 19 6.10352e-05H2C0.89543 6.10352e-05 0 0.895492 0 2.00006ZM4 18.0001V17.0001H19C20.1046 17.0001 21 16.1046 21 15.0001V4.00006H22C22.5523 4.00006 23 4.44778 23 5.00006V18.0001C23 18.5523 22.5523 19.0001 22 19.0001H5C4.44771 19.0001 4 18.5523 4 18.0001ZM20 3.00006V4.00006V15.0001C20 15.5523 19.5523 16.0001 19 16.0001L4 16.0001H3H2C1.44771 16.0001 1 15.5523 1 15.0001L1 13.5001H17C17.2761 13.5001 17.5 13.2762 17.5 13.0001C17.5 12.7239 17.2761 12.5001 17 12.5001H15.5V4.00006C15.5 3.72392 15.2761 3.50006 15 3.50006C14.7239 3.50006 14.5 3.72392 14.5 4.00006V12.5001H12.5V10.5001C12.5 10.2239 12.2761 10.0001 12 10.0001C11.7239 10.0001 11.5 10.2239 11.5 10.5001V12.5001H9.5V8.50006C9.5 8.22392 9.27614 8.00006 9 8.00006C8.72386 8.00006 8.5 8.22392 8.5 8.50006V12.5001H6.5V6.50006C6.5 6.22392 6.27614 6.00006 6 6.00006C5.72386 6.00006 5.5 6.22392 5.5 6.50006V12.5001H4V10.5001C4 10.2239 3.77614 10.0001 3.5 10.0001C3.22386 10.0001 3 10.2239 3 10.5001V12.5001H1L0.999999 2.00006C0.999999 1.44778 1.44771 1.00006 2 1.00006L19 1.00006C19.5523 1.00006 20 1.44778 20 2.00006V3.00006Z"/>
          </svg>
        </template>
        <template v-slot:title>Statistics</template>
        <template v-slot:list>
          <DropDownButtonListElement path="/dummy-1">dummy 1</DropDownButtonListElement>
          <DropDownButtonListElement path="/dummy-2">dummy 2</DropDownButtonListElement>
        </template>
      </DropDownButton>

      <DropDownButton :is-menu-hidden="isHidden">
        <template v-slot:icon>
          <svg width="21" height="23" viewBox="0 0 21 23" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.5 4.00006C5.32843 4.00006 6 3.32849 6 2.50006C6 1.67163 5.32843 1.00006 4.5 1.00006C3.67157 1.00006 3 1.67163 3 2.50006C3 3.32849 3.67157 4.00006 4.5 4.00006ZM4.5 5.00006C5.88071 5.00006 7 3.88077 7 2.50006C7 1.11935 5.88071 6.10352e-05 4.5 6.10352e-05C3.11929 6.10352e-05 2 1.11935 2 2.50006C2 3.88077 3.11929 5.00006 4.5 5.00006ZM0 10.5001C0 8.01478 2.01472 6.00006 4.5 6.00006C6.25148 6.00006 7.76925 7.00069 8.51283 8.46147C9.11211 8.16604 9.78667 8.00006 10.5 8.00006C11.2209 8.00006 11.9022 8.16957 12.5062 8.47091L12.5229 8.39238C13.2788 6.96923 14.7761 6.00006 16.4999 6.00006C18.9851 6.00006 20.9999 8.01478 20.9999 10.5001V13.5001C20.9999 14.3285 20.3283 15.0001 19.4999 15.0001H18.9999V19.5001C18.9999 20.3285 18.3283 21.0001 17.4999 21.0001H15.4999C14.6714 21.0001 13.9999 20.3285 13.9999 19.5001V16.9148C13.8435 16.97 13.6753 17.0001 13.5 17.0001H13V21.5001C13 22.3285 12.3284 23.0001 11.5 23.0001H9.5C8.67157 23.0001 8 22.3285 8 21.5001V17.0001H7.5C7.32468 17.0001 7.15639 16.97 7 16.9147V19.5001C7 20.3285 6.32843 21.0001 5.5 21.0001H3.5C2.67157 21.0001 2 20.3285 2 19.5001V15.0001H1.5C0.671574 15.0001 0 14.3285 0 13.5001V10.5001ZM14 15.0001H13.9999V15.5123C13.9934 15.7828 13.7721 16.0001 13.5 16.0001H13H12.5C12.2236 16.0001 12 16.2239 12 16.5001V17.0001V21.5001C12 21.7762 11.7761 22.0001 11.5 22.0001H9.5C9.22386 22.0001 9 21.7762 9 21.5001V17.0001V16.629V16.5C9 16.2254 8.77864 16.0025 8.50463 16.0001H8.19531H8H7.5C7.22386 16.0001 7 15.7762 7 15.5001V15.0001V12.5001C7 10.5671 8.567 9.00006 10.5 9.00006C12.433 9.00006 14 10.5671 14 12.5001V15.0001ZM14.9999 15.5213V19.5001C14.9999 19.7762 15.2237 20.0001 15.4999 20.0001H17.4999C17.776 20.0001 17.9999 19.7762 17.9999 19.5001V15.0001V14.5001C17.9999 14.2255 18.2212 14.0025 18.4952 14.0001H18.4999H18.9999H19.4999C19.776 14.0001 19.9999 13.7762 19.9999 13.5001V10.5001C19.9999 8.56706 18.4328 7.00006 16.4999 7.00006C15.1029 7.00006 13.8971 7.81848 13.3358 9.00199L13.3174 8.99094C14.3433 9.81572 15 11.0812 15 12.5001V15.5001C15 15.5071 15 15.5142 14.9999 15.5213ZM4.5 7.00006C5.89808 7.00006 7.1047 7.81979 7.66545 9.00484C6.64933 9.8299 6 11.0892 6 12.5001V14.5V14.5001V15.0001V15.5001V19.5001C6 19.7762 5.77614 20.0001 5.5 20.0001H3.5C3.22386 20.0001 3 19.7762 3 19.5001V15.0001V14.629V14.5C3 14.2254 2.77864 14.0025 2.50463 14.0001H2.19531H2H1.5C1.22386 14.0001 1 13.7762 1 13.5001V10.5001C1 8.56706 2.567 7.00006 4.5 7.00006ZM12 4.50006C12 5.32849 11.3284 6.00006 10.5 6.00006C9.67157 6.00006 9 5.32849 9 4.50006C9 3.67163 9.67157 3.00006 10.5 3.00006C11.3284 3.00006 12 3.67163 12 4.50006ZM13 4.50006C13 5.88077 11.8807 7.00006 10.5 7.00006C9.11929 7.00006 8 5.88077 8 4.50006C8 3.11935 9.11929 2.00006 10.5 2.00006C11.8807 2.00006 13 3.11935 13 4.50006ZM17.9999 2.50006C17.9999 3.32849 17.3283 4.00006 16.4999 4.00006C15.6714 4.00006 14.9999 3.32849 14.9999 2.50006C14.9999 1.67163 15.6714 1.00006 16.4999 1.00006C17.3283 1.00006 17.9999 1.67163 17.9999 2.50006ZM18.9999 2.50006C18.9999 3.88077 17.8806 5.00006 16.4999 5.00006C15.1191 5.00006 13.9999 3.88077 13.9999 2.50006C13.9999 1.11935 15.1191 6.10352e-05 16.4999 6.10352e-05C17.8806 6.10352e-05 18.9999 1.11935 18.9999 2.50006Z"/>
          </svg>
        </template>
        <template v-slot:title>Users</template>
        <template v-slot:list>
          <DropDownButtonListElement path="/user-list">User List</DropDownButtonListElement>
          <DropDownButtonListElement path="/user-edit">User Edit</DropDownButtonListElement>
          <DropDownButtonListElement path="/roles-and-permissions">Roles and Permissions</DropDownButtonListElement>
          <DropDownButtonListElement path="/settings">Settings</DropDownButtonListElement>
        </template>
      </DropDownButton>

    </div>
  </div>
</template>

<script setup lang='ts'>
import DropDownButton from "@/components/DropDownButton.vue";
import DropDownButtonListElement from "@/components/DropDownButtonListElement.vue";
import {computed, ref} from "vue";

const isHidden = ref(false);

const dropDownMenuClassName = computed(() => {
  if (!isHidden.value) {
    return "drop-down-menu"
  } else return "drop-down-menu hidden"
});

function hiddeMenuToggle() {
  isHidden.value = !isHidden.value
}

</script>

<style lang='scss' scoped>
.drop-down-menu {
  width: 276px;
  height: 100%;
  overflow: hidden;
  transition: $time-hover-anim;

  .top-section {
    margin-top: 20px;
    padding: 0 32px;
    text-wrap: none;

    .date-section {
      margin-top: 50px;
      min-height: 72px;
      white-space: nowrap;

      .day,
      .year {
        font-size: $font-14px;
        color: $ui-g4;
        transition: $time-hover-anim;
      }

      .day-number-month {
        font-size: $font-26px;
        color: $ui-g1;
        transition: $time-hover-anim;
      }

      .year,
      .day-number-month {
        margin-top: 3px;
      }
    }

    .bottom-line {
      height: 1px;
      background-color: $lighten90;
      margin: 16px auto 0 auto;
    }
  }

  .bottom-section {
    margin-top: 24px;
  }
}

.drop-down-menu.hidden {
  width: 84px;

  .top-section {
    .date-section {
      .day,
      .day-number-month,
      .year {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
}
</style>