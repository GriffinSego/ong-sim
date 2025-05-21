<script lang="ts">
	import { state, ephemeralState } from "./State.svelte";
	import Infographic from "./Infographic.svelte";
</script>

<div class="flex flex-row items-center p-8 overflow-y-hidden">
	<Infographic label="Oil Price" value={state.oilPrice} change={ephemeralState.oilPrice-state.oilPrice} currency={true} />
	<Infographic label="Net Production" value={state.production} change={ephemeralState.production-state.production} currency={false} />
	<Infographic label="Revenue" value={state.revenue} change={ephemeralState.revenue-state.revenue} currency={true} />
	<Infographic label="Debt" value={state.debt} change={ephemeralState.debt-state.debt} currency={true} />
	<Infographic label="Available Funds" value={state.cash} change={ephemeralState.cash-state.cash} currency={true} />
	<Infographic label="Share Price" value={state.sharePrice} change={ephemeralState.sharePrice-state.sharePrice} currency={true} />
</div>