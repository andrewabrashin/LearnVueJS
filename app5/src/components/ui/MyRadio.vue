<template>
  <div>
    <div @mouseenter="showHint" @mouseleave="hideHint">
      {{ label }}
    </div>
    <div v-for="item in options" :key="item">
      <input type="radio" :id="item" :value="item" v-model="picked" />
      <label :for="item">{{ item }}</label>
    </div>
    <div v-if="shownHint">
      {{ hint }}
    </div>
  </div>
</template>

<script>
import inputMixin from "@/mixins/inputMixin.js";

export default {
  mixins: [inputMixin],
  props: {
    options: {
      type: Array,
    },
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      picked: "",
    };
  },
  watch: {
    picked() {
      this.$emit("update:modelValue", this.picked);
    },
    modelValue: {
      handler() {
        this.picked = this.modelValue;
      },
      immediate: true,
    },
  },
};
</script>
