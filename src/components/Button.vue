<template>
  <button class="button">
    <i class="icon material-icons">{{ icon }}</i>
    <span class="text">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Componente = defineComponent({
  props: {
    icon: String,
    text: {
      type: String,
      require: false,
    },
  },
});

export default Componente;
</script>

<style lang="scss" scoped>
.button {
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.7;
  }
}

.icon {
  font-size: 32px;
}

.text {
  margin-left: 5px;
}
</style>
