<template>
  <div id="app">
    <header-bar />
    <div class="main">
      <app-main />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from "@/components/Header.vue";
import AppMain from "@/components/AppMain.vue";
import FooterBar from "@/components/Footer.vue";

export default {
  components: {
    HeaderBar,
    AppMain,
    FooterBar
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;

  .main {
    width: 100%;
    overflow: auto;
    position: absolute;
    top: 100px;
    bottom: 100px;
  }
}
</style>
