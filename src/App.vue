<script setup lang="ts">
interface ICell {
  x: number;
  y: number;
}

type TGrid = ICell[][]

interface IGameData {
  GRID: TGrid
}

const GAME_CFG = {
  GRID_SIZE: 4,
  SPAWN_TIMER: 500
};

const GAME_DATA: IGameData = {
  GRID: createGrid(GAME_CFG.GRID_SIZE)
}

function createGrid(size: number): TGrid {
  const grid: TGrid = []

  for (let x = 0; x < size; x++) {
    const row: ICell[] = []

    for (let y = 0; y < size; y++) {
      row.push({ x, y })
    }

    grid.push(row)
  }

  return grid
}

function cellHit(e: MouseEvent) {
  console.log(e.target);
}
</script>


<template>
  <main>
    <section class="play-grid"
      :style="`grid-template: repeat(${GAME_CFG.GRID_SIZE}, 1fr) / repeat(${GAME_CFG.GRID_SIZE}, 1fr)`">
      <template v-for="r in GAME_DATA.GRID">
        <button class="play-grid_cell" v-for="c in r" @click="cellHit($event)">{{ c.x }}, {{ c.y }}</button>
      </template>
    </section>
  </main>

</template>

<style scoped>
:deep(.play-grid) {
  --cell-bg: tan;
  --cell-border: #00000070 solid;
  --cell-border-hover: #00000095 solid;


  --cell-size: 3rem;

  --cell-shadow-hit: inset 0px 0px 2px 2px #00000061 !important;
  --cell-shadow-spawned: 0px 0px 2px 2px #00000061;
}

.play-grid {

  display: grid;
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
