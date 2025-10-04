<script setup lang="ts">
const GAME_CFG = {
  GRID_SIZE: 4,
};

function cellHit(e: MouseEvent) {
  console.log(e.target);
}
</script>


<template>
  <main>
    <section class="play-grid">
      <button class="play-grid_cell" v-for="_ in GAME_CFG.GRID_SIZE ** 2" @click="cellHit($event)"></button>
    </section>
  </main>
</template>

<style scoped>
.play-grid {
  >>> {
    --cell-bg: tan;
    --cell-border: #00000070 solid;
    --cell-border-hover: #00000095 solid;


    --cell-size: 3rem;

    --cell-shadow-hit: inset 0px 0px 2px 2px #00000061 !important;
    --cell-shadow-spawned: 0px 0px 2px 2px #00000061;
  }

  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 1rem;

  .play-grid_cell {
    min-width: var(--cell-size);
    min-height: var(--cell-size);

    cursor: pointer;

    background-color: var(--cell-bg);
    border: var(--cell-border);
  }

  .play-grid_cell:active {
    box-shadow: var(--cell-shadow-hit);
  }


  .play-grid_cell:hover {
    border: var(--cell-border-hover);
  }
}
</style>
