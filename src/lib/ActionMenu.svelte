<script lang="ts">
	import { state, ephemeralState } from './State.svelte.ts';
	import Infographic from './Infographic.svelte';
	import Infobutton from './Infobutton.svelte';
	import * as Util from './Util.svelte.ts';
	let selectedTab: string = '';
</script>

<div class="grid grid-cols-5 gap-1" id="content-action-menu-ctx">
	<div class="col-span-5 flex flex-row text-xl bg-orange-200 rounded-se-4xl p-0 mt-1 font-bold">
		<button
			class="px-4 py-2 bg-teal-600 rounded-se-3xl flex-grow cursor-pointer hover:bg-teal-500 transition-all duration-300 {!(
				selectedTab === 'fin'
			)
				? 'opacity-100 z-10'
				: 'opacity-100 z-40'}"
			on:click={() => (selectedTab = 'fin')}>Financial</button
		>
		<button
			class="px-4 py-2 -ml-5 bg-fuchsia-700 rounded-se-3xl rounded-ss-3xl flex-grow cursor-pointer hover:bg-fuchsia-600 transition-all duration-300 {!(
				selectedTab === 'ops'
			)
				? 'opacity-100 z-20'
				: 'opacity-100 z-30'}"
			on:click={() => (selectedTab = 'ops')}>Operations</button
		>
		<button
			class="px-4 py-2 -ml-5 bg-red-700 rounded-se-3xl rounded-ss-3xl flex-grow cursor-pointer hover:bg-red-600 transition-all duration-300 {!(
				selectedTab === 'comp'
			)
				? 'opacity-100 z-10'
				: 'opacity-100 z-40'}"
			on:click={() => (selectedTab = 'comp')}>Risks</button
		>
	</div>
	<!--Content begins here -->
	{#if selectedTab === 'fin'}
		<Infographic label="No. Shares" value={state.shares} change={0} type="number" />
		<Infographic
			label="Dividend"
			value={state.dividendPercentage}
			quantifier="per share"
			change={0}
			type="percent"
		/>
		<Infographic label="Payout ratio" value={999} change={0} type="number" />
		<Infographic
			label="Current EPS"
			value={999}
			quantifier="Current qtr"
			change={0}
			type="number"
		/>
		<Infographic
			label="Trailing EPS"
			value={999}
			quantifier="Last 4 qtrs"
			change={0}
			type="number"
		/>
		<Infobutton
			label="Repay Debt"
			description="Spend cash to decrease debt"
			cost={1}
			color="bg-teal-600"
			colspan={2}
			scaleButtons={true}
			callback={(quantity: number) => {
				state.cash -= quantity;
				state.debt -= quantity;
			}}
		/>
		<Infobutton
			label="Stock Buyback"
			description="Spend cash to decrease shares"
			cost={1}
			color="bg-teal-600"
			colspan={2}
			scaleButtons={true}
			callback={(quantity: number) => {
				state.cash -= quantity;
				state.shares -= quantity;
			}}
		/>
		<Infobutton
			label="Raise Funds"
			description="+ Shares & cash"
			cost={-1}
			color="bg-teal-600"
			rowspan={2}
			scaleButtons={true}
			callback={(quantity: number) => {
				state.cash += quantity;
				state.shares += quantity;
			}}
		/>
		<Infobutton
			label="Increase Dividends"
			description="Ongoing cost to increase share value"
			cost={0}
			color="bg-teal-600"
			colspan={2}
			scaleButtons={true}
			callback={(quantity: number) => {
				state.dividendPercentage += quantity;
				if (state.dividendPercentage > 100) state.dividendPercentage = 100;
				if (state.dividendPercentage < 0) state.dividendPercentage = 0;
			}}
		/>
		<Infobutton
			label="Decrease Dividends"
			description="Save opex but decrease share value"
			cost={0}
			color="bg-teal-600"
			colspan={2}
			scaleButtons={true}
			callback={(quantity: number) => {
				state.dividendPercentage -= quantity;
				if (state.dividendPercentage > 100) state.dividendPercentage = 100;
				if (state.dividendPercentage < 0) state.dividendPercentage = 0;
			}}
		/>
		<div
			class="col-span-5 text-xl font-semibold bg-teal-600 rounded-es-4xl p-4 flex-grow"
		></div>
	{:else if selectedTab === 'ops'}
		<Infographic
			label="Wells"
			value={state.wells}
			change={ephemeralState.wells - state.wells}
			type="number"
		/>
		<Infographic
			label="Landmen"
			value={state.landmen}
			change={ephemeralState.landmen - state.landmen}
			type="number"
		/>
		<Infographic
			label="Extraction"
			value={state.production}
			change={ephemeralState.production - state.production}
			type="number"
		/>
		<Infobutton
			label="Geoimaging"
			description="/QTR"
			cost={15 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="AI Inter."
			description="/QTR"
			cost={15 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="RSS"
			description="/QTR"
			cost={6 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				alert('wow!');
			}}
		/>

		<Infobutton
			label="ESP"
			description="/QTR"
			cost={15 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Buy 1 Rig"
			description="/QTR"
			cost={25 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				state.cash -= 25 * Util.value.million;
				state.rigs += 3;
			}}
		/>
		<Infobutton
			label="H. Drilling"
			description="/QTR"
			cost={15 * Util.value.million}
			color="bg-fuchsia-700"
			colspan={1}
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Landman"
			description="/QTR"
			cost={250 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<div class="col-span-3"></div>
		<div class="col-span-3 text-xl font-semibold bg-fuchsia-700 p-2 flex-grow text-center">
			Maintenance
		</div>
		<div class="col-span-2"></div>
		<Infobutton
			label="Predictive"
			description="/QTR"
			cost={15 * Util.value.million}
			color="bg-fuchsia-700"
			colspan={1}
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Preventative"
			description="/QTR"
			cost={12 * Util.value.million}
			color="bg-fuchsia-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Reactive"
			description="/QTR"
			cost={9 * Util.value.million}
			color="bg-fuchsia-700"
			colspan={1}
			callback={() => {
				alert('wow!');
			}}
		/>
		<div
			class="col-span-5 text-xl font-semibold bg-fuchsia-700 rounded-es-4xl p-4 flex-grow"
		></div>
	{:else if selectedTab === 'comp'}
		<Infographic
			label="Safety Incident"
			value={state.production}
			change={ephemeralState.production - state.production}
			type="percent"
			colspan={2}
		/>
		<Infographic
			label="Cyber Incident"
			value={state.production}
			change={ephemeralState.production - state.production}
			type="percent"
			colspan={1}
		/>
		<Infographic
			label="Env. Incident"
			value={state.production}
			change={ephemeralState.production - state.production}
			type="percent"
			colspan={2}
		/>
		<Infobutton
			label="Health & Safety Program"
			description="/QTR"
			cost={9 * Util.value.million}
			color="bg-red-700"
			colspan={2}
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Env. Program"
			description="/QTR"
			cost={9 * Util.value.million}
			color="bg-red-700"
			colspan={1}
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Cybersecurity Program"
			description="/QTR"
			cost={9 * Util.value.million}
			color="bg-red-700"
			colspan={2}
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="VPN"
			description="/QTR"
			cost={3 * Util.value.million}
			color="bg-red-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Hire ISP"
			description="50m+5m/QTR"
			cost={50 * Util.value.million}
			color="bg-red-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="Firewall"
			description="20m+8m/QTR"
			cost={20 * Util.value.million}
			color="bg-red-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="CMV"
			description="3m+1.5m/QTR"
			cost={3 * Util.value.million}
			color="bg-red-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<Infobutton
			label="BlastShield"
			description="3m+1.5m/QTR"
			cost={3 * Util.value.million}
			color="bg-red-700"
			callback={() => {
				alert('wow!');
			}}
		/>
		<div class="col-span-5 text-xl font-semibold bg-red-700 rounded-es-4xl p-4 flex-grow"></div>
	{:else if selectedTab === ''}
		<div class="col-span-5 text-xl font-semibold bg-gray-800 rounded-es-4xl p-4 flex-grow">
			Click on a tab above to expand the dashboard to show action options
		</div>
	{/if}
</div>
