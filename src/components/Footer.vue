<template>
  <div class="footer">
    <div class="container container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <h3>Got tired playing?</h3>
          <div class="footerWrapper">
            <form @submit.prevent="$emit('submitClick')">
              <label for="name" class="label">Save your result</label>
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  :value="inputValue"
                  class="input"
                  required
                  @input="$emit('update:inputValue', $event.target.value)"
                />
                <button class="submitBtn" type="submit">save</button>
              </div>
            </form>
            <Button class="resetBtn" icon="cached" @click="$emit('resetClick')" text="Reset game" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

const Footer = defineComponent({
  components: {
    Button,
  },
  props: {
    inputValue: String,
  },
});

export default Footer;
</script>

<style lang="scss" scoped>
.footer {
  background-color: #ffb451;
  padding: 30px 0 60px 0;
}

.submitBtn {
  border: none;
  border: 2px solid #fbe063;
  padding: 10px 15px;
  background-color: transparent;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  background-color: #fbe063;
  cursor: pointer;
}

.input {
  background-color: transparent;
  border: 2px solid #fbe063;
  padding: 10px;
  color: black;
  font-family: 'Rubik', sans-serif;

  &::placeholder {
    color: rgb(66, 66, 66);
  }
}

.label {
  font-family: 'Rubik', sans-serif;
  padding: 5px 20px 5px 0;
  display: inline-block;
}

.footerWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.resetBtn {
  display: flex;
  align-items: center;
}

.label + div {
  display: inline-block;
}

@media screen and (max-width: 566px) {
  .resetBtn {
    margin-top: 10px;
  }
}
</style>
