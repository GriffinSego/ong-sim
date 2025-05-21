<script lang="ts">
	import { state, ephemeralState } from "./State.svelte";
	import * as util from "./Util.svelte";
	export let callback: (quantity: number) => void;
	export let cost: number;
	export let quantity: number;
	async function buy() {
		//do callback quantity times
		// for(let i = 0; i < quantity; i++) {
		// 	callback();
		// }
		// that was horrible for performance (unsurprisingly. let's try that as a param instead)
		callback(quantity);

	}
</script>

<button class="text-sm font-bold text-black hover:bg-blue-100 bg-cyan-100 transition-all duration-200 rounded-lg mx-1 px-1 cursor-pointer" on:click={() => {buy()}} disabled={ephemeralState.cash < (cost*quantity)}>
	{util.formatHumanReadableNumber(quantity)}
	<div class="text-sm font-light {(cost > 0.0)? 'text-red-700' : (cost == 0.0? 'text-black' : 'text-green-600')}">${util.formatHumanReadableNumber(cost*quantity)}</div>
</button>