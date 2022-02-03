<template>
  <div>
    PostForm {{ $route.params.id }}
    <my-input v-model="postText" label="Текст поста" />
    <my-input v-model="postBody" label="Тело поста" />
    <button @click="onUpdate">Обновить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postText: "",
      postBody: "",
    };
  },
  created() {
    const id = this.$route.params.id;
    const postById = this.$store.getters["posts/postById"];
    const editPost = postById(id);
    this.postText = editPost.title;
    this.postBody = editPost.body;
  },
  methods: {
    onUpdate() {},
  },
};
</script>
