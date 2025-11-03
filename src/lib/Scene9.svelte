<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import Infographic from './Infographic.svelte';
	import Button from './Button.svelte';
	import Statrow from './Statrow.svelte';
	import Banner from './BannerSm.svelte';
	import * as util from './Util.svelte';
	import exassimg from '../assets/char/exass.png';
	import losescreen from '../assets/losescreen.png';
	import ExecutiveDashboard from './ExecutiveDashboard.svelte';
	import ActionMenu from './ActionMenu.svelte';
	import Map from './Map.svelte';
	import GridMap from './GridMap.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="text-4xl font-bold text-center">
		Oh no! You got through {state.quarter} quarters as CEO before you were fired by the board of
		directors. The share price of OyleCo is now ${state.sharePrice}, which is ${Math.abs(
			state.sharePrice - 150
		)}
		{state.sharePrice > 150 ? 'more' : 'less'} than when you took lead.
	</div>
	<div class="text-xl text-red-600 font-light text-center animate-pulse">
		{util.get_hs() < state.sharePrice ? '' : 'New high score!'}
	</div>
	<div class="h-64"><img src={losescreen} alt="" /></div>
	<div class="flex-grow"></div>
	<div class="text-xl text-lime-300 font-light text-center">
		This was your {util.get_pt()}{util.numberToSuffix(util.get_pt())} playthrough.
	</div>
	<div id="news"></div>
	<Button
		label="Save game & try again"
		loading={false}
		loadingTime={0}
		delay={700}
		callback={() => {
			if (util.get_hs() < state.sharePrice) util.set_hs(state.sharePrice);
			state.scene = 2;
		}}
	/>
</div>
