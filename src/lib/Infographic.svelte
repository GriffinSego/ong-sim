<script lang="ts">
	import * as util from "./Util.svelte";
	export let label: string;
	export let value: number;
	export let change: number;
	export let currency: boolean;

</script>
<div class="flex flex-col flex-nowrap items-center justify-end border-4 border-black bg-white size-40 m-1">
	<div class="text-2xl font-bold text-black">{label}</div>
	<div class="text-3xl font-light text-black">{currency ? '$':''}{util.formatHumanReadableNumber(value)}</div>
	<div class="text-1xl font-extralight opacity-50 {(change > 0.0) ? 'text-red-700' : (change == 0.0 ? 'text-black' : 'text-green-600')}">{change > 0.0 ? '+' : change == 0.0 ? '' : '-'}{currency ? '$':''}{util.formatHumanReadableNumber(change)}</div>
</div>