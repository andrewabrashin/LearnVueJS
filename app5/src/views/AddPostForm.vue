<template>
  <div class="about">
    <h1>New post form</h1>
    <my-input v-model="postText" label="Текст поста" />
    <my-input v-model="postBody" label="Тело поста" />
    <button @click="onAdd">Добавть</button>
    <button @click="onUpdate">Обновить</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      postText: '',
      postBody: '',
    };
  },
  methods: {
    onAdd() {
      this.$store.dispatch("posts/createPost", { title: this.postText, body: this.postBody });
      this.$router.push("/posts");
    },
    onUpdate () {
      this.$store.dispatch("posts/updatePost", { id: 1, title: this.postText, body: this.postBody });
      this.$router.push("/posts");
    }
  },
};
</script>

