<script lang="ts">
	import { state, ephemeralState } from './State.svelte.ts';
	import Infographic from './Infographic.svelte';
</script>

<div class="grid grid-cols-5 gap-1" id="content-executive-dashboard-ctx">
	<div class="col-span-5 font-bold text-2xl bg-gray-800 rounded-se-4xl p-2 align-left">
		Executive Dashboard
	</div>
	<Infographic
		label="Oil Price"
		quantifier="Per Barrel"
		value={state.oilPrice}
		change={ephemeralState.oilPrice - state.oilPrice}
		type="currency"
	/>
	<Infographic
		label="Net Production"
		quantifier="Barrels/day"
		value={state.production}
		change={ephemeralState.production - state.production}
		type="currency"
	/>
	<Infographic
		label="Revenue"
		quantifier="Per turn"
		value={state.revenue}
		change={ephemeralState.revenue - state.revenue}
		type="currency"
	/>
	<Infographic
		label="Operating Costs"
		quantifier="Per turn"
		value={state.operatingCost}
		change={ephemeralState.operatingCost - state.operatingCost}
		type="currency"
	/>
	<Infographic
		label="Debt"
		quantifier="Interest 1%/mo"
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
	<Infographic label="R&D Cost" value={state.rndCostMultiplier * 1} change={0} type="percent" />
	<Infographic
		label="Rig utilization"
		value={(state.rigsInUse / 3 / state.rigs) * 100}
		change={-((state.rigsInUse / 3 / state.rigs) * 100)}
		type="percent"
	/>
	<Infographic label="Total rigs" value={state.rigs} change={0} type="number" />
</div>
