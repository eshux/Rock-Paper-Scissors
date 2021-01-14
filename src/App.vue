<template>
  <section class="section">
    <div class="container container-fluid">
      <div class="row center-xs">
        <div class="col-xs-12">
          <div class="wrapper">
            <HowToPlay v-if="show.howToPlay" @onClick="show.howToPlay = !show.howToPlay" />
            <ScoreBoard v-if="show.scoreBoard" @onClick="show.scoreBoard = !show.scoreBoard" />

            <div v-if="!show.game" class="start">
              <img src="./assets/images/qq.png" alt="" class="img" />
              <div class="play">
                <Button icon="leaderboard" @click="show.scoreBoard = !show.scoreBoard" />
                <button @click="show.game = !show.game" class="playBtn">PLAY</button>
                <Button icon="help_outline" @click="show.howToPlay = !show.howToPlay" />
              </div>
            </div>

            <div v-else>
              <Score :playerScore="score.player" :tieScore="score.tie" :cpuScore="score.cpu" />
              <div class="gameField">
                <img
                  v-if="playersChoice"
                  class="choiceImg"
                  :src="require(`@/assets/images/${playersChoice}.svg`)"
                  :alt="playersChoice"
                />
                <img
                  v-if="cpuChoice"
                  class="choiceImg cpuImg"
                  :src="require(`@/assets/images/${cpuChoice}.svg`)"
                  :alt="cpuChoice"
                />
              </div>
              <h3>{{ message }}</h3>
              <div class="controls">
                <Choice v-for="item in data" :key="item" @onClick="makingMove(item)" :text="item" />
              </div>
              <div class="info">
                <Button icon="leaderboard" @click="show.scoreBoard = !show.scoreBoard" />
                <Button icon="help_outline" @click="show.howToPlay = !show.howToPlay" />
              </div>
              <Button
                class="backBtn"
                icon="navigate_before"
                @click="show.game = !show.game"
                text="Back"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer
    v-if="show.game"
    v-model:inputValue="inputValue"
    @submitClick="saveResults()"
    @resetClick="resetGame()"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Choice from './components/Choice.vue';
import Button from './components/Button.vue';
import Score from './components/Score.vue';
import HowToPlay from './components/HowToPlay.vue';
import ScoreBoard from './components/ScoreBoard.vue';
import checkWinner from './helpers/checkWinner';
import Footer from './components/Footer.vue';

const App = defineComponent({
  data() {
    return {
      playersChoice: '',
      cpuChoice: '',
      data: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
      score: {
        player: 0,
        tie: 0,
        cpu: 0,
      },
      show: {
        game: false,
        scoreBoard: false,
        howToPlay: false,
      },
      message: 'Choose one of the options',
      inputValue: '',
    };
  },

  components: {
    Choice,
    Button,
    Score,
    HowToPlay,
    ScoreBoard,
    Footer,
  },

  methods: {
    randomChoice(): string {
      return this.data[Math.floor(Math.random() * 5)];
    },

    makingMove(choice: string) {
      this.playersChoice = choice;
      this.cpuChoice = this.randomChoice();
      const winningChoice = checkWinner(this.playersChoice, this.cpuChoice);

      if (this.playersChoice === this.cpuChoice) {
        this.score.tie += 1;
        this.message = "It's a tie!";
      } else if (this.cpuChoice === winningChoice) {
        this.score.cpu += 1;
        this.message = 'Ooh, you lost!';
      } else if (this.playersChoice === winningChoice) {
        this.score.player += 1;
        this.message = 'Awesome, you won!';
      }
    },

    resetGame() {
      this.score.player = 0;
      this.score.tie = 0;
      this.score.cpu = 0;
      this.playersChoice = '';
      this.cpuChoice = '';
      this.message = 'Choose one of the options';
    },

    saveResults() {
      const local = JSON.parse(localStorage.gameScore);
      const gamesPlayed = this.score.player + this.score.cpu + this.score.tie;
      if (this.inputValue) {
        if (local[0].name) {
          localStorage.gameScore = JSON.stringify([
            ...local,
            {
              name: this.inputValue,
              score: this.score.player,
              games: gamesPlayed,
            },
          ]);
        } else {
          localStorage.gameScore = JSON.stringify([
            { name: this.inputValue, score: this.score.player, games: gamesPlayed },
          ]);
        }
        this.show.scoreBoard = true;
      }
      this.inputValue = '';
    },
  },
});

export default App;
</script>

<style scoped lang="scss">
.section {
  margin-top: 15vh;
  margin-bottom: 15vh;
  display: flex;
  align-items: center;
}

.controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.img {
  width: 100%;
  max-width: 400px;
}

.start {
  padding-top: 50px;
  margin-top: 40px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.play {
  background-color: rgb(251, 224, 99);
  border-radius: 20px;
  box-shadow: 0 5px 10px 5px rgba(56, 56, 56, 0.2);
  padding: 40px;
}

.playBtn {
  padding: 10px 30px;
  border: 3px solid black;
  background-color: transparent;
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  margin: 0 60px;
  font-size: 40px;
  cursor: pointer;
  box-shadow: 0 5px 15px 2px rgba(56, 56, 56, 0.4);

  &:hover {
    box-shadow: 0 5px 15px 2px rgba(56, 56, 56, 0.6);
  }
}

.gameField {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.choiceImg {
  width: 200px;
  margin: 20px 15px;
}

.cpuImg {
  transform: scaleX(-1);
}

.backBtn {
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  align-items: center;
}

.info {
  position: absolute;
  right: 20px;
  top: 20px;
}

.resetBtn {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 530px) {
  .choiceImg {
    width: 50%;
  }
  .img {
    max-width: 300px;
  }
  .playBtn {
    margin: 0 30px;
  }
  .play {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media screen and (max-width: 450px) {
  .gameField {
    min-height: 200px;
  }

  .playBtn {
    margin: 0 10px;
  }
}

@media screen and (max-width: 410px) {
  .play {
    padding-left: 5px;
    padding-right: 5px;
  }
  .playBtn {
    margin: 7px;
  }
}

@media screen and (max-width: 335px) {
  .playBtn {
    margin: 0px;
  }
}
</style>
