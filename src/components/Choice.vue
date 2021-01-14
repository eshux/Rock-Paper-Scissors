<template>
  <div>
    <button class="button" @click="$emit('onClick')">
      <img :src="require(`@/assets/images/${text}.png`)" class="image" />
    </button>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Componente = defineComponent({
  props: {
    text: {
      type: String,
      require: true,
    },
  },
});

export default Componente;
</script>

<style lang="scss" scoped>
.button {
  border-radius: 50%;
  margin: 10px;
  background-color: transparent;
  border: none;
  width: 100px;
  height: 100px;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.9;
  }
}

.image {
  width: 100%;
}

.text {
  text-transform: capitalize;
  font-family: 'Rubik', sans-serif;
  color: white;
}

@media screen and (max-width: 500px) {
  .button {
    width: 50px;
    height: 50px;
  }
}
</style>
