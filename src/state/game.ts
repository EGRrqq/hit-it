import type { TGrid } from "@/models/grid";
import { Grid } from "@/services/gridService";

interface IGameData {
    GRID: TGrid
}

export const GAME_CFG = {
    GRID_SIZE: 4,
    SPAWN_TIMER: 500
};

export const GAME_DATA: IGameData = {
    GRID: Grid.createGrid(GAME_CFG.GRID_SIZE)
}