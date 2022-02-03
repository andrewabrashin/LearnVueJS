<template>
  <div class="about">
    
    <my-input label="Поле ввода" hint="Заполните поле срочно" style="max-width: 100px"/>
    <my-radio label="Поле выбора" hint="Выберите значение срочно" :options="['1', '2', '3']" style="max-width: 100px"/>
    <my-radio2 label="Поле выбора" hint="Выберите значение срочно" :options="['1', '2', '3']" style="max-width: 100px"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      type: "tab1",
    };
  },
  computed: {
    shownComponent() {
      switch (this.type) {
        case "tab1":
          return "my-radio2";
        case "tab2":
          return "my-input";
        default:
          return null;
      }
    },
  },
};
</script>
>
