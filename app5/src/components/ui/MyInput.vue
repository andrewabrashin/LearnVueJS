<template>
  <div style="display: flex; flex-direction: column; margin: 5px">
    <label
      style="text-align: start"
      for="login"
      @mouseenter="showHint"
      @mouseleave="hideHint"
      >{{ label }}</label
    >
    <input style="font-size: 16px" id="login" v-model="inputValue" />
    <div v-if="shownHint">
      {{ hint }}
    </div>
  </div>
</template>

<script>
import inputMixin from "@/mixins/inputMixin.js";

export default {
  mixins: [inputMixin],
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    icon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    modelValue: {
      handler() {
        this.inputValue = this.modelValue;
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit("update:modelValue", this.inputValue);
      },
    },
  },
};
</script>
