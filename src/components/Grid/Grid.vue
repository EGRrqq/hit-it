<script setup lang="ts">
import { GAME_CFG } from '@/state/game';
import Cell from '@/components/Grid/Cell.vue';

</script>

<template>
    <section class="play-grid"
        :style="`grid-template: repeat(${GAME_CFG.GRID_SIZE}, 1fr) / repeat(${GAME_CFG.GRID_SIZE}, 1fr)`">
        <Cell />
    </section>
</template>

<style scoped>
.play-grid {
    display: grid;
    gap: 1rem;
}
</style>