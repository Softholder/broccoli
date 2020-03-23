<template>
  <div class="welcome">
    <div class="content">
      <h1>A better way to enjoy every day.</h1>
      <span>Be the first to know when we launch.</span>
      <el-button @click="openForm">Request an invite</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openForm() {
      console.log("form");
    }
  }
};
</script>

<style scoped>
.welcome {
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  text-align: center;
}
span {
  display: block;
  margin: 20px;
}
</style>
