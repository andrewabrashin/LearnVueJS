<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: column;
        max-width: 300px;
        justify-content: center;
        margin: 10px
      "
    >
      <my-input label="Login" v-model="login" />
      <my-input label="Password" v-model="password" />
      <button style="margin: 5px" @click="onAuthCLick">Login</button>
      <button style="margin: 5px" @click="onSignCLick">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      login: "",
      password: "",
      answer: "",
      radioOptions: [
        {
          label: "Да",
          value: "yes",
        },
        {
          label: "Нет",
          value: "no",
        },
        {
          label: "Не знаю",
          value: "dummy",
        },
      ],
    };
  },
  created() {
    this.ownLogo = require("@/assets/logo.png");
  },
  methods: {
    onAuthCLick() {
      this.$store
        .dispatch("user/doAuth", {
          login: this.login,
          password: this.password,
        })
        .then((status) => {
          if (status === "OK") {
            this.$router.push("/new_post");
          } else if (status === "error") {
            alert("Ошибка авторизации");
          }
        });
    },
    onSignCLick() {
      this.$store
        .dispatch("user/doSign", {
          login: this.login,
          password: this.password,
        })
        .then((status) => {
          console.log(status);
          if (status === "OK") {
            this.$router.push("/");
          } else if (status === "error") {
            alert("Ошибка регистрации");
          }
        });
    },
  },
};
</script>
