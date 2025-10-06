<script setup lang="ts">
import { GAME_DATA } from '@/state/game';
</script>

<template>
    <template v-for="r in GAME_DATA.GRID">
        <button class="play-grid_cell" v-for="c in r">{{ c.x }}, {{ c.y }}</button>
    </template>
</template>

<style scoped>
* {
    --cell-bg: tan;
    --cell-border: #00000070 solid;
    --cell-border-hover: #00000095 solid;

    --cell-size: 3rem;

    --cell-shadow-hit: inset 0px 0px 2px 2px #00000061 !important;
    --cell-shadow-spawned: 0px 0px 2px 2px #00000061;
}

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
</style>