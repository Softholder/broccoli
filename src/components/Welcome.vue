<template>
  <div class="welcome">
    <div class="content">
      <h1>A better way to enjoy every day.</h1>
      <span>Be the first to know when we launch.</span>
      <el-button @click="openForm">Request an invite</el-button>
    </div>
    <div class="form">
      <el-dialog
        title="Request an invite"
        :visible.sync="formVisible"
        width="40%"
        top="25vh"
        center
        :show-close="false"
      >
        <el-form :model="form">
          <el-form-item style="margin-bottom: 20px;">
            <el-input
              placeholder="Full Name"
              v-model="form.fullName"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="Email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="Confirm Email"
              v-model="form.ConfirmEmail"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button style="width:100%; margin: 30px 0;" @click="sendRequest()">
          {{ send }}
        </el-button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formVisible: false,
      send: "send",
      form: {
        fullName: "",
        email: "",
        confirmEmail: ""
      }
    };
  },
  methods: {
    openForm() {
      this.formVisible = true;
      console.log("open");
    },
    sendRequest() {
      this.formVisible = false;
      console.log("close");
    }
  }
};
</script>

<style scoped>
.welcome {
  height: 100%;
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
