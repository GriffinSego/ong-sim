<script lang="ts">
	import { state, ephemeralState } from "./State.svelte";
	import * as util from "./Util.svelte";
	import Subinfobutton from "./Subinfobutton.svelte";
	export let label: string;
	export let description: string;
	export let scaleButtons: boolean = false;
	export let cost: number;
	export let callback: () => void;
</script>
<div class="flex flex-col flex-nowrap items-center justify-between border-4 pb-1 border-black bg-white size-40 m-1">
	<div class="text-xl font-bold text-black">{label}</div>
	<div class="text-sm font-light italic text-black">{description}</div>
	{#if scaleButtons == false}
	<div class="text-lg font-extralight opacity-50 {(cost > 0.0) ? 'text-red-700' : (cost == 0.0 ? 'text-black' : 'text-green-600')}">{cost > 0.0 ? '+' : cost == 0.0 ? '' : '-'}${util.formatHumanReadableNumber(cost)}</div>
	<button class="text-lg font-bold text-green-500" on:click={() => {callback()}} disabled={ephemeralState.cash < cost}>Buy</button>
	{:else}
	<div class="flex flex-row flex-nowrap items-center justify-between">
	<Subinfobutton quantity={util.value.thousand} cost={cost} callback={() => {callback()}} />
	<Subinfobutton quantity={util.value.million} cost={cost} callback={() => {callback()}} />
	<Subinfobutton quantity={util.value.billion} cost={cost} callback={() => {callback()}} />
		</div>
	{/if}
</div>