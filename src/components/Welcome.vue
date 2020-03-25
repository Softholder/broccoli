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
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="fullName">
            <el-input
              placeholder="Full Name"
              v-model="form.fullName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input placeholder="Email" v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item prop="confirmEmail">
            <el-input
              placeholder="Confirm Email"
              v-model="form.confirmEmail"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          class="button"
          @click="submitForm('form')"
          :loading="loading"
        >
          {{ buttonText }}
        </el-button>
        <div class="error" v-if="error">{{ error }}</div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // confirmEmail check rules
    let checkConfirmEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input confirm email"));
      } else if (value !== this.form.email) {
        callback(new Error("Confirm Email needs to match Email"));
      } else {
        callback();
      }
    };
    return {
      formVisible: false,
      buttonText: "Send",
      loading: false,
      form: {
        fullName: "",
        email: "",
        confirmEmail: ""
      },
      rules: {
        fullName: [
          {
            required: true,
            message: "Please input full name",
            trigger: "blur"
          },
          {
            min: 3,
            message: "Full name needs to be at least 3 characters long",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please input email",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Email needs to be in validation email format",
            trigger: ["blur", "change"]
          }
        ],
        confirmEmail: [
          {
            validator: checkConfirmEmail,
            trigger: "blur"
          }
        ]
      },
      error: ""
    };
  },
  methods: {
    openForm() {
      this.formVisible = true;
      console.log("open");
    },
    sendRequest() {
      //   this.formVisible = false;
      //   console.log("close");
      this.error = "";
      this.loading = true;
      this.buttonText = "Sending, please wait...";
      let url =
        "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
      let data = {
        name: this.form.fullName,
        email: this.form.email
      };
      this.$axios({
        method: "post",
        url: url,
        data: JSON.stringify(data)
      })
        .then(res => {
          console.log(res);
          this.loading = false;
          this.buttonText = "Send";
          if (res.status === 200) {
            console.log(res.data);
          } else {
            console.log(res.statusText);
          }
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
          this.buttonText = "Send";
          this.error = error;
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.sendRequest();
        } else {
          console.log("error submit");
          return false;
        }
      });
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
.error {
  color: red;
  text-align: center;
}
.button {
  width: 100%;
  margin: 30px 0;
}
</style>
