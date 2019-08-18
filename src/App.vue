<template>
  <div>
    <div id="app">
      <router-view></router-view>
    </div>
    <div class="footer_bg"></div>
  </div>
</template>


<style lang="scss">
  // 載入字型
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

  * {
    box-sizing: border-box;
    position: relative;
    font-family: "Roboto", "Microsoft JhengHei", sans-serif;
    user-select: none;
    font-size: 16px;
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .footer_bg {
    position: fixed;
    bottom: 0;
    background-color: $footer-color;
    background-size: 50px;
    background-image: url("./assets/svg/footer-background.svg");
    height: 22.5vh;
    width: 100vw;
    z-index: -99999;
  }
</style>
