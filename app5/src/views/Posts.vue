<template>
  <div class="about">
    <h1>Posts page</h1>
    <h4>{{ $store.getters["posts/count"] }}</h4>
    <div v-for="post in postArray" :key="post.id" style="text-align: start">
      <router-link :to="`/post/${post.id}`">
        {{ post.id }}: {{ post.title }}
      </router-link>
      <button @click="doDelete(post.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postArray() {
      return this.$store.getters["posts/all"];
    },
  },
  methods: {
    doDelete (id) {
      this.$store.dispatch('posts/deletePost', id);
    }
  },
};
</script>

