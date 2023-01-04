<script setup lang="ts">
import GameControl from './Modules/GameControl';
import ScorePanel from './Modules/ScorePanel'
import { onMounted } from 'vue';
onMounted(() => {
  const game = new GameControl();
});
</script>

<template>
  <div id="main">
    <div id="game">
      <div id="snake">
        <div></div>
      </div>
      <div id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="score-panel">
      <div>
        SCORE:<span id="score">{{ ScorePanel.score }}</span>
      </div>
      <div>
        LEVEL:<span id="level">{{ ScorePanel.level }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@bg-color: #b7d4a8;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#main {
  width: 360px;
  height: 420px;
  background-color: @bg-color;
  margin: 100px auto;
  border: 10px solid black;
  border-radius: 40px;
  font: bold 20px "Courier";
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;

  #game {
    width: 304px;
    height: 304px;
    border: 2px solid black;
    position: relative;
  }

  #score-panel {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }

  #snake {
    &>div {
      width: 10px;
      height: 10px;
      background-color: black;
      border: 1px solid @bg-color;
      position: absolute;
    }
  }

  #food {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 100px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    &>div {
      width: 4px;
      height: 4px;
      background-color: black;
      transform: rotate(45deg);
    }
  }
}
</style>
