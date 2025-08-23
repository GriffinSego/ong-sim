<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import * as util from './Util.svelte';
	import Subinfobutton from './Subinfobutton.svelte';
	export let label: string;
	export let description: string;
	export let scaleButtons: boolean = false;
	export let cost: number;
	export let callback: () => void;
	export let colspan: number | undefined = undefined;
	export let rowspan: number | undefined = undefined;
	export let color: string = 'border-red-500 border-2';
</script>

<div
	class="flex flex-col flex-nowrap items-center justify-between bg-orange-200/85 w-full {rowspan
		? 'h-full'
		: 'h-30'} overflow-hidden{colspan ? ' col-span-' + colspan : ''}{rowspan
		? ' row-span-' + rowspan
		: ''}"
>
	<div
		class="{label.length > 99
			? 'text-sm'
			: 'text-md'} font-bold text-white w-full py-1 p-0 align-top
		{color}"
	>
		{label}
	</div>
	<div class="text-sm font-light italic text-black">{description}</div>
	{#if scaleButtons == false}
		<div
			class="text-lg font-extrabold opacity-50 {cost > 0.0
				? 'text-red-700'
				: cost == 0.0
					? 'text-black'
					: 'text-green-600'}"
		>
			{cost > 0.0 ? '' : cost == 0.0 ? '' : ''}${util.formatHumanReadableNumber(cost)}
		</div>
		<button
			class="text-md font-bold text-lime-700 bg-white/50 py-0 mb-2 px-4 hover:bg-white cursor-pointer rounded-lg"
			on:click={() => {
				callback();
			}}
			disabled={ephemeralState.cash < cost}>BUY</button
		>
	{:else}
		<div class="flex flex-row flex-nowrap items-center justify-between">
			<Subinfobutton
				quantity={util.value.thousand}
				{cost}
				callback={() => {
					callback();
				}}
			/>
			<Subinfobutton
				quantity={util.value.million}
				{cost}
				callback={() => {
					callback();
				}}
			/>
			<Subinfobutton
				quantity={util.value.billion}
				{cost}
				callback={() => {
					callback();
				}}
			/>
		</div>
	{/if}
</div>
