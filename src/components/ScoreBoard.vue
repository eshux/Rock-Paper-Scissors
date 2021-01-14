<template>
  <div class="bg">
    <div class="wrapper">
      <Button class="close" @click="$emit('onClick')" icon="highlight_off" />
      <div v-if="!results[0].name">
        <p>No results yet</p>
      </div>
      <div v-else>
        <h1>Latest scores</h1>
        <table class="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Games played</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in results" :key="index + result.name">
              <td>{{ index + 1 }}</td>
              <td>{{ result.name }}</td>
              <td>{{ result.games }}</td>
              <td>{{ result.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

const ScoreBoard = defineComponent({
  components: {
    Button,
  },

  data() {
    return {
      results: [{ name: '', score: '', games: '' }],
    };
  },

  methods: {
    compare(a: { score: number }, b: { score: number }) {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    },
  },

  mounted() {
    const results = JSON.parse(localStorage.gameScore);
    if (results[0].name) {
      results.sort(this.compare);
      this.results = results;
    }
  },
});

export default ScoreBoard;
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

.table {
  width: 100%;
}

.table > thead {
  background-color: rgb(129, 169, 160);
}
</style>
