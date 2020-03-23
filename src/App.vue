<template>
  <div id="app">
    <header-bar />
    <div class="main">
      <router-view></router-view>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from "@/components/Header.vue";
import FooterBar from "@/components/Footer.vue";

export default {
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  overflow: hidden;
}
.main {
  margin: 0;
  overflow: hidden;
  position: relative;
  top: 50px;
  bottom: 50px;
}
</style>
