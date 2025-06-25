<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import Infographic from './Infographic.svelte';
</script>

<div class="flex flex-row flex-wrap items-center p-8 overflow-y-hidden">
	<Infographic
		label="Oil Price"
		value={state.oilPrice}
		change={ephemeralState.oilPrice - state.oilPrice}
		type="currency"
	/>
	<Infographic
		label="Net Production"
		value={state.production}
		change={ephemeralState.production - state.production}
		type="number"
	/>
	<Infographic
		label="Revenue"
		value={state.revenue}
		change={ephemeralState.revenue - state.revenue}
		type="currency"
	/>
	<Infographic
		label="Operating Costs"
		value={state.operatingCost}
		change={ephemeralState.operatingCost - state.operatingCost}
		type="currency"
	/>
	<Infographic
		label="Debt"
		value={state.debt}
		change={ephemeralState.debt - state.debt}
		type="currency"
	/>
	<Infographic
		label="Available Funds"
		value={state.cash}
		change={ephemeralState.cash - state.cash}
		type="currency"
	/>
	<Infographic
		label="Share Price"
		value={state.sharePrice}
		change={ephemeralState.sharePrice - state.sharePrice}
		type="currency"
	/>
</div>
