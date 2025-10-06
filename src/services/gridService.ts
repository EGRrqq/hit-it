import type { ICell, TGrid } from "@/models/grid"

export const Grid = {
    createGrid(size: number): TGrid {
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
}

