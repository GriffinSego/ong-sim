<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import * as util from './Util.svelte';
	import Subinfobutton from './Subinfobutton.svelte';
	export let label: string;
	export let description: string;
	export let scaleButtons: boolean = false;
	export let cost: number;
	export let quantity: number = 1;
	let quantityInput: string = '';
	export let callback: (quantity: number) => void;
	export let colspan: number | undefined = undefined;
	export let rowspan: number | undefined = undefined;
	export let color: string = 'border-red-500 border-2';
	$: canAfford = state.cash > cost * quantity;
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
			class="text-md font-bold py-0 mb-2 px-4 cursor-pointer rounded-lg {ephemeralState.cash <
			cost
				? 'opacity-50 bg-slate-400 text-lime-700/50'
				: 'opacity-100 bg-white/50 hover:bg-white text-lime-700'}"
			on:click={() => {
				callback(1);
			}}
			disabled={ephemeralState.cash < cost}>BUY</button
		>
	{:else}
		<div class="flex flex-row flex-nowrap items-center justify-between">
			<input
				name="quantity"
				type="text"
				inputmode="numeric"
				pattern="\d*"
				placeholder="enter value"
				aria-label="Quantity"
				bind:value={quantityInput}
				on:change={() => {
					try {
						let newV = parseInt(
							quantityInput
								.toLowerCase()
								.replaceAll('.', '')
								.replaceAll(',', '')
								.replaceAll('k', '000')
								.replaceAll('m', '000000')
								.replaceAll('b', '000000000')
								.replaceAll('t', '000000000000')
						);
						if (!isNaN(newV) && newV - 1 > -1) {
							quantity = newV;
						}
					} catch {}
				}}
				class="min-w-6 max-w-12 bg-cyan-100 text-black border-1 border-black"
			/>
			<button
				class="text-sm font-bold text-black hover:bg-blue-100 bg-cyan-100 transition-all duration-200 rounded-lg mx-1 px-1 cursor-pointer {canAfford
					? 'pointer-events-auto'
					: 'pointer-events-none opacity-50'}"
				on:click={() => {
					callback(quantity);
				}}
				disabled={!canAfford}
			>
				{util.formatHumanReadableNumber(quantity)}
				<div
					class="text-sm font-light {cost > 0.0
						? 'text-red-700'
						: cost == 0.0
							? 'text-black'
							: 'text-green-600'}"
				>
					${util.formatHumanReadableNumber(cost * quantity)}
				</div>
			</button>
		</div>
	{/if}
</div>
