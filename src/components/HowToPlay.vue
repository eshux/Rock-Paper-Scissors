<template>
  <div id="bg" class="bg">
    <div class="wrapper">
      <h1>Game logic</h1>
      <img src="../assets/images/rules2.svg" alt="" />
      <Button class="close" @click="$emit('onClick')" icon="highlight_off" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

const HowToPlay = defineComponent({
  components: {
    Button,
  },
});

export default HowToPlay;
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 20vh;
  background-color: rgba(255, 255, 255, 0.6);
}

.wrapper {
  background-color: rgb(251, 224, 99);
  margin: auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  max-width: 500px;
  width: 85%;
  line-height: 1.5;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

.wrapper h1 {
  margin-bottom: 0;
}
</style>
