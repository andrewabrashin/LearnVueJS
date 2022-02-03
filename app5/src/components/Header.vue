<template>
  <div id="nav">
    <button
      :class="{ active: activePath === '/', bordered: activePath === '/' }"
      @click="$router.push('/')"
    >
      Home
    </button>
    <button
      :class="{ active: activePath === '/posts' }"
      @click="$router.push('/posts')"
    >
      Posts
    </button>
    <button
      v-if="$store.getters['user/isAuth']"
      :class="{
        active: activePath === '/new_post',
        bordered: activePath === '/new_post',
      }"
      @click="goto('/new_post')"
    >
      Add post
    </button>
    <button :class="AboutClass" @click="goto('/about')">About</button>
    <div v-if="$store.getters['user/isAuth']">
      <button :class="RegisterClass" @click="showDialog">Logout</button>
      {{ $store.getters['user/name'] }}
    </div>
    <button v-else :class="RegisterClass" @click="goto('/authorization')">
      Authorization
    </button>
    <my-dialog ref="dialog">
      <template #header> Действительно выйти? </template>
      <template #body>
        <div />
      </template>
      <template #footer>
        <button @click="onYesClick">Да</button>
        <button @click="onNoClick">Нет</button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from "./ui/MyDialog.vue";

export default {
  components: { MyDialog },
  data() {
    return {
      activePath: "/",
      shownDialog: false,
    };
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    isPathAbout() {
      return this.activePath === "/about";
    },
    AboutClass() {
      return this.isPathAbout ? "active bordered" : "";
    },
    RegisterClass() {
      return this.activePath === "/authorization" ? "active" : "";
    },
  },
  watch: {
    $route() {
      this.activePath = this.$route.path;
    },
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
    showDialog() {
      this.$refs.dialog.shown = true;
    },
    onYesClick() {
      this.$store.dispatch("user/logout");
      this.$refs.dialog.shown = false;
    },
    onNoClick() {
      this.$refs.dialog.shown = false;
    },
  },
};
</script>

<style scoped>
.active {
  background: skyblue;
}
.bordered {
  border-radius: 10px;
}
</style>