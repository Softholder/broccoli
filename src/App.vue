<template>
  <div id="app">
    <header-bar />
    <div class="main">
      <welcome />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from "@/components/Header.vue";
import Welcome from "@/components/Welcome.vue";
import FooterBar from "@/components/Footer.vue";

export default {
  components: {
    HeaderBar,
    Welcome,
    FooterBar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.main {
  margin: 0;
  overflow: auto;
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
