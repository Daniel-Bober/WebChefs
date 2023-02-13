<template>
  <div class="nav-bar">
    <div class="left-side">

      <div class="info-box">
        <div class="title">ZLECENIA</div>
        <div class="number">245</div>
      </div>
      <div class="info-box">
        <div class="title">DEPOZYTY</div>
        <div class="number">245</div>
      </div>
      <div class="info-box">
        <div class="title">ZAMÓWIENIA</div>
        <div class="number">245</div>
      </div>

    </div>

    <div class="right-side">

      <div class="notification-box">
        <button><img src="../assets/images/icons/bellCounter.svg" alt="notification icon"></button>
      </div>

      <div class="profile-box">

        <div class="avatar"><img src="../assets/images/Avatar.png" alt="avatar"></div>


        <div class="profile-name">Warsztat A12</div>

        <button><img src="../assets/images/icons/downArrow.svg" alt="down arrow icon"></button>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.nav-bar {
  height: 62px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $ui-g5;
  box-shadow: 0 2px 12px 0 $ui-g5;

  .left-side {
    display: flex;

    .info-box {
      width: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1px;
      border-right: 1px solid $ui-g5;
      cursor: default;

      .title {
        font-size: $font-11px;
        color: $ui-g4;
      }

      .number {
        font-family: "rubik-medium", serif;
        font-size: $font-14px;
        color: $ui-g1;
      }
    }
  }

  .right-side {
    display: flex;
    align-items: center;

    .notification-box {
      width: 62px;
      height: 100%;
      border-left: 1px solid $ui-g5;
      display: grid;
      place-items: center;

    }

    .profile-box {
      width: 183px;
      height: 100%;
      display: flex;
      align-items: center;
      border-left: 1px solid $ui-g5;

      .avatar {
        width: 26px;
        height: 26px;
        margin-left: 13px;
        border: 1px solid $ui-g6;
        border-radius: 2px;
        overflow: hidden;
      }

      .profile-name {
        width: 87px;
        margin-left: 16px;
        display: grid;
        place-items: center;
        font-size: $font-12px;
        color: $ui-g3;
      }

      button {
        margin-left: 8px;
      }
    }
  }
}
</style>