<script lang="ts">
	import { state } from './State.svelte';

	export let x: number;
	export let y: number;
	let textContent: string = '';
	const numToLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
	let type: 'OIL_M' | 'OIL_D' | 'BLANK' | 'VLABEL' | 'HLABEL';

	//this has been moved to State.svelte map generation
	// if (x == 1 && y == 1) {
	// 	type = 'BLANK';
	// } else if (y == 1) {
	// 	type = 'HLABEL';
	// } else if (x == 1) {
	// 	type = 'VLABEL';
	// } else if (x == 8) {
	// 	type = 'BLANK';
	// } else if (y > 10 && x < 8) {
	// 	type = 'BLANK';
	// } else {
	// 	type = x > 8 ? 'OIL_M' : 'OIL_D';
	// }
	type = state.map[x][y].type;
	if (type == 'VLABEL') {
		textContent = '' + (y - 1) + '';
	} else if (type == 'HLABEL') {
		textContent = '' + numToLetter[x - 2] + '';
	}
	function cellClicked(x: number, y: number) {
		state.selectedCell = {
			enabled: true,
			x: x,
			y: y,
			basin: type == 'OIL_D' ? 'DELAWARE' : 'MIDLAND',
		};
	}
</script>

<!-- style="opacity: {type == 'OIL_D'
		? '' + state.delaware[x][y].oilRemaining
		: type == 'OIL_M'
			? '' + state.midland[x][y].oilRemaining
			: '1.0'}" -->
<div
	on:click={() => {
		if (type == 'OIL_D' || type == 'OIL_M') cellClicked(x, y);
	}}
	on:keydown={(e) => {
		if ((e.key === 'Enter' || e.key === ' ') && (type == 'OIL_D' || type == 'OIL_M')) {
			e.preventDefault();
			cellClicked(x, y);
		}
	}}
	role={type == 'OIL_D' || type == 'OIL_M' ? 'button' : 'gridcell'}
	aria-label={type == 'OIL_D' || type == 'OIL_M'
		? `Oil cell at ${textContent == '' ? `${x},${y}` : textContent}, ${type == 'OIL_D' ? 'Delaware' : 'Midland'} basin`
		: textContent == ''
			? `Grid cell ${x},${y}`
			: `Grid label ${textContent}`}
	class="size-9 col-span-1 row-span-1 text-sm {state.map[x][y].drilled
		? 'border-1 border-black'
		: ''} {state.map[x][y].capped ? 'bg-black! text-black' : ''} {state.map[x][y].leased ||
	state.map[x][y].owned
		? state.map[x][y].produces < 15
			? 'bg-red-800'
			: state.map[x][y].produces < 200
				? 'bg-red-600'
				: state.map[x][y].produces < 500
					? 'bg-yellow-600'
					: state.map[x][y].produces < 1000
						? 'bg-yellow-300'
						: state.map[x][y].produces < 1500
							? 'bg-green-400'
							: 'bg-green-900'
		: type == 'OIL_D'
			? 'bg-green-300'
			: type == 'OIL_M'
				? 'bg-blue-300'
				: 'bg-white'} {type == 'OIL_D' || type == 'OIL_M' ? 'cursor-pointer' : ''} {state
		.selectedCell.x == x &&
	state.selectedCell.y == y &&
	state.selectedCell.enabled
		? 'animate-pulse'
		: 'animate-none'} border-0 border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
	style="corner: rgb({Math.max(2000 - state.map[x][y].produces, 0) / 10},{Math.min(
		255,
		state.map[x][y].produces
	) / 1.5},65);"
>
	{textContent == '' && false ? `${x},${y}` : textContent}
</div>
