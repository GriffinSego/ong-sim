<script lang="ts">
	import { writable } from 'svelte/store';
	import MapTile from './MapTile.svelte';
	import texas from '../assets/icon/tx.svg';
	import mexico from '../assets/icon/mx.svg';
	import newmexico from '../assets/icon/nm.svg';
	import * as util from './Util.svelte';
	const map: MapTile[][] = Array(67)
		.fill(null)
		.map(() => Array(67).fill(null));

	interface Cell {
		id: string; // e.g. 'B7'
		row: number;
		col: number;
		basin: 'DELAWARE' | 'MIDLAND';
		fill?: string; // tailwind color name → orange-500, red-600 …
		selected: boolean;
	}

	/**
	 * Columns for the map grid
	 */
	export const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
	/**
	 * Rows for the map grid
	 */
	export const rows = Array.from({ length: 13 }, (_, i) => i + 1);

	export let cells: Cell[] = [];
	//populate cells
	// delaware basin
	for (let row = 1; row <= 10; row++) {
		for (let col = 1; col <= 6; col++) {
			const id = `${cols[col - 1]}${row}`;
			const basin = row <= 6 ? 'DELAWARE' : 'MIDLAND';
			cells.push({ id, row, col, basin, selected: false });
		}
	}
	for (let row = 1; row <= 13; row++) {
		for (let col = 1; col <= 13; col++) {
			const id = `${cols[col - 1]}${row}`;
			const basin = row <= 6 ? 'DELAWARE' : 'MIDLAND';
			cells.push({ id, row, col, basin, selected: false });
		}
	}

	const cellSize = 32;

	const gridW = cols.length * cellSize;
	const gridH = rows.length * cellSize;

	let selectedCell: Cell | null = null;
	function selectCell(cell: Cell) {
		if (selectedCell == cell) {
			selectedCell = null;
		} else {
			selectedCell = cell;
			selectedCell.selected = true;
		}
	}
</script>

<!-- <div class="grid grid-cols-67 grid-rows-67">
	{#each map as row, y}
		{#each row as tile, x}
			<MapTile {x} {y} bind:this={map[y][x]} />
		{/each}
	{/each}
</div> -->
<svg viewBox={`-50 -50 550 550`} class="w-[600px] h-[600px] select-none">
	<!-- grid background -->
	<rect width={gridW} height={gridH} class="fill-cream-50 stroke-gray-200" />

	<!-- Delaware & Midland vertical divider -->
	<line
		x1={6 * cellSize}
		y1="0"
		x2={6 * cellSize}
		y2={10 * cellSize}
		class="stroke-gray-400 stroke-[2]"
	/>

	<!-- clickable cells -->
	{#each cells as c}
		<button on:click={() => selectCell(c)} aria-label="a11y sucks">
			<rect
				x={c.col * cellSize}
				y={c.row * cellSize}
				width={cellSize}
				height={cellSize}
				rx="2"
				ry="2"
				class={`stroke-gray-300 fill-${c.fill ?? 'transparent'} ${c.selected ? 'animate-pulse' : ''} hover:fill-sky-200 cursor-pointer transition-[fill]`}
			/>
		</button>
	{/each}

	<!-- diagonal Mexico / Texas footer -->
	<polygon
		points={`0,${gridH} ${6 * cellSize},${10 * cellSize} 0,${10 * cellSize}`}
		class="fill-gray-100"
	/>

	<text
		x={3 * cellSize}
		y={10 * cellSize - 6}
		transform={`rotate(-45 ${3 * cellSize} ${10 * cellSize - 6})`}
		class="text-xs font-semibold pointer-events-none"
	>
		Texas
	</text>
	<text x="6" y={gridH - 6} class="text-xs font-semibold pointer-events-none"> Mexico </text>

	<!-- column labels -->
	{#each cols as col, i}
		<text
			x={(i + 0.5) * cellSize}
			y="12"
			text-anchor="middle"
			class="text-xs font-semibold pointer-events-none"
		>
			{col}
		</text>
	{/each}

	<!-- row labels -->
	{#each rows as row, i}
		<text x="6" y={(i + 0.75) * cellSize} class="text-xs font-semibold pointer-events-none">
			{row}
		</text>
	{/each}
</svg>
