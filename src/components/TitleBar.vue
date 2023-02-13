<template>
<div class="nav-bar">
  <img src="../assets/images/WebChefsLogo.svg" alt="logo">
  <div class="text-group">
    <div>
      <h1>Zadanie rekrutacyjne</h1>
      <h2>Angular PWA and Deploy</h2>
    </div>
  </div>

  <div class="bottom-line"></div>
</div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.nav-bar {
  width: 100%;
  height: 162px;
  padding: 24px 41px;

  .text-group {
    width: 281px;
    height: 53px;
    padding-left: 65px;

    h1 {
      margin: 0;
      font-family: 'montserrat-medium', serif;
      font-size: $font-20px;
      color: $blue-dark;
      font-weight: normal;
    }

    h2 {
      margin: 0;
      font-family: 'montserrat-regular', serif;
      font-size: $font-16px;
      color: $red-light;
      font-weight: normal;
    }
  }

  .bottom-line {
    height: 1px;
    margin-top: 10px;
    background-color: $light-blue;
  }
}
</style>