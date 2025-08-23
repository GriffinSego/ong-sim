<script lang="ts">
	import GridCell from './GridCell.svelte';
	import GridCellInteractive from './GridCellInteractive.svelte';
	import { state } from './State.svelte';
	let cellSpace = [];
	for (let j = 1; j < 14; j++) {
		for (let k = 1; k < 17; k++) {
			cellSpace.push({ x: k, y: j });
		}
	}
</script>

<!-- <div class="grid grid-cols-16 grid-rows-16 border border-red-500 bg-black w-fit" id="grid-map-ctx">
	{#each Array.from({ length: 256 }) as index}
		<div
			class="size-9 col-span-1 row-span-1 border border-green-300 bg-white"
			id={'cell' + index}
		>
			index
		</div>
	{/each}
</div> -->

<div class="grid grid-cols-16 grid-rows-16 border border-red-500 bg-black w-fit" id="grid-map-ctx">
	<div class="h-9 w-9 col-span-1 row-span-1 bg-black" id={'permianindent'}></div>
	<div
		class="h-9 w-135 col-span-15 row-span-1 bg-black text-white font-bold text-2xl"
		id={'permianlabel'}
	>
		Permian Basin
	</div>
	<div class="h-9 w-9 col-span-1 row-span-1 bg-white" id={'delawareindent'}></div>
	<div
		class="h-9 w-36 col-span-4 row-span-1 bg-white text-black font-bold text-xl"
		id={'delawarelabel'}
	>
		Delaware Basin
	</div>
	<div class="h-9 w-27 col-span-3 row-span-1 bg-white" id={'midlandindent'}></div>
	<div
		class="h-9 w-36 col-span-4 row-span-1 bg-white text-black font-bold text-xl"
		id={'midlandlabel'}
	>
		Midland Basin
	</div>
	<div class="h-9 w-36 col-span-4 row-span-1 bg-white" id={'midlandpostindent'}></div>
	<!-- <GridCell />
	<GridCell textContent="A" />
	<GridCell textContent="B" />
	<GridCell textContent="C" />
	<GridCell textContent="D" />
	<GridCell textContent="E" />
	<GridCell textContent="F" />
	<GridCell />
	<GridCell textContent="H" />
	<GridCell textContent="I" />
	<GridCell textContent="J" />
	<GridCell textContent="K" />
	<GridCell textContent="L" />
	<GridCell textContent="M" />
	<GridCell textContent="N" />
	<GridCell />
	<GridCell textContent="1" /> -->
	{#each cellSpace as pair}
		<GridCellInteractive x={pair.x} y={pair.y} />
	{/each}
	<!-- <GridCellInteractive x={1} y={1}/> -->
</div>
