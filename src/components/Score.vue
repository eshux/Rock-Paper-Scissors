<template>
  <table class="table">
    <thead>
      <tr>
        <th>Your score</th>
        <th>Tie</th>
        <th>CPU score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ playerScore }}</td>
        <td>{{ tieScore }}</td>
        <td>{{ cpuScore }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Score = defineComponent({
  props: {
    playerScore: Number,
    tieScore: Number,
    cpuScore: Number,
  },
});

export default Score;
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border: none;
  font-size: 24px;

  th {
    font-weight: 200;
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
  }
}

@media screen and (max-width: 450px) {
  .table {
    font-size: 20px;
    th {
      font-size: 16px;
    }
  }
}
</style>
