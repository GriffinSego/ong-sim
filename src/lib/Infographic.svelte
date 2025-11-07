<script lang="ts">
	import * as util from './Util.svelte';
	export let label: string;
	export let value: number;
	export let quantifier: string | undefined = undefined;
	export let decimalPlaces: number = 1;
	export let change: number;
	export let type: 'number' | 'percent' | 'currency' = 'number';
	export let colspan: number | undefined = undefined;
	export let rowspan: number | undefined = undefined;
</script>

<div
	class="flex flex-col flex-nowrap items-center justify-end bg-orange-200/85 {rowspan
		? 'h-full'
		: 'h-30'} overflow-hidden{colspan ? ' w-full col-span-' + colspan : ' w-full'}{rowspan
		? ' row-span-' + rowspan
		: ''}"
>
	<div class="text-sm font-semibold text-white bg-stone-700 p-0 py-1 w-full align-top shrink-0">
		{label}
	</div>
	<div class="text-3xl font-extrabold text-black grow mt-2 -mb-2">
		{type == 'currency' ? '$' : ''}{util.formatHumanReadableNumber(
			value,
			decimalPlaces ?? 1
		)}{type == 'percent' ? '%' : ''}
	</div>
	{#if quantifier}
		<div class="text-xs font-normal text-black grow uppercase w-full">
			{quantifier}
		</div>
	{/if}
	<div
		class="text-md font-extralight opacity-50 {change > 0.0
			? 'text-red-700'
			: change == 0.0
				? 'text-black'
				: 'text-green-600'}"
	>
		{change < 0.0 ? '-' : '+'}{type == 'currency' ? '$' : ''}{util.formatHumanReadableNumber(
			Math.abs(change)
		)}{type == 'percent' ? '%' : ''} NEXT QTR
	</div>
</div>
