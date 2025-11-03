<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import Infographic from './Infographic.svelte';
	import Button from './Button.svelte';
	import Statrow from './Statrow.svelte';
	import Banner from './BannerSm.svelte';
	import * as util from './Util.svelte';
	import exassimg from '../assets/char/exass.png';
	import winscreen from '../assets/winscreen.png';
	import ExecutiveDashboard from './ExecutiveDashboard.svelte';
	import ActionMenu from './ActionMenu.svelte';
	import Map from './Map.svelte';
	import GridMap from './GridMap.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="text-4xl font-bold text-center">
		Congratulations! You got through 3 years as CEO. The share price of OyleCo is now ${state.sharePrice},
		which is ${Math.abs(state.sharePrice - 150)}
		{state.sharePrice > 150 ? 'more' : 'less'} than when you took lead.
	</div>
	<div class="text-xl text-red-600 font-light text-center animate-pulse">
		{util.get_hs() < state.sharePrice ? '' : 'New high score!'}
	</div>
	<div class="h-64"><img src={winscreen} alt="" /></div>
	<!-- <GridMap /> -->
	<div class="flex-grow"></div>
	<div class="text-xl text-lime-300 font-light text-center">
		This was your {util.get_pt()}{util.numberToSuffix(util.get_pt())} playthrough.
	</div>
	<div id="news"></div>
	<Button
		label="Save game & unlock new character"
		loading={false}
		loadingTime={0}
		delay={700}
		callback={() => {
			util.inc_pt();
			if (util.get_hs() < state.sharePrice) util.set_hs(state.sharePrice);
			state.scene = 2;
		}}
	/>
</div>
