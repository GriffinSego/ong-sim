<script lang="ts">
	import { state, ephemeralState, saveState, resetState } from './State.svelte';
	import Infographic from './Infographic.svelte';
	import Button from './Button.svelte';
	import Statrow from './Statrow.svelte';
	import Banner from './Banner.svelte';
	import * as util from './Util.svelte';
	import exassimg from '../assets/char/exass.png';
	import prodman from '../assets/char/prodman.png';
	import Infobutton from './Infobutton.svelte';
</script>

<Banner
	label="Sir, here is the latest findings on the production analysis. {state.wellsVulnerable >
	state.wells * 0.5
		? 'Recent evaluations show that the majority of our wells are unprotected and vulnerable to cyberattack. I advise a defensive policy.'
		: 'The new cyber protections on wells have been put into place and recent audits show that we are in a somewhat defended position. '}"
	image={prodman}
/>
<Statrow />
<div class="text-3xl font-bold text-gray-900">Production Manager</div>
<div class="flex flex-wrap flex-row justify-center items-center">
	<Infographic
		label="Rigs in use"
		value={state.rigsInUse / 3}
		change={ephemeralState.rigsInUse - state.rigsInUse}
		type="percent"
	/>
	<Infographic
		label="Rigs idle"
		value={1 - state.rigsInUse / 3}
		change={1 - ephemeralState.rigsInUse - (1 - state.rigsInUse)}
		type="percent"
	/>
	<Infographic
		label="Rigs"
		value={state.rigs}
		change={ephemeralState.rigs - state.rigs}
		type="number"
	/>
	<Infographic
		label="Wells"
		value={state.wells}
		change={ephemeralState.wells - state.wells}
		type="number"
	/>
	<Infographic
		label="Wells vulnerable"
		value={state.wells}
		change={ephemeralState.wells - state.wells}
		type="percent"
	/>
</div>

<Button
	label="Effectuate actions"
	loading={false}
	loadingTime={0}
	delay={0}
	callback={() => {
		saveState();
		state.scene = 4;
	}}
	affirmative={true}
/>
<Button
	label="Revert changes"
	loading={false}
	loadingTime={0}
	delay={0}
	callback={() => {
		resetState();
	}}
/>
<Button
	label="Exit operations center"
	loading={false}
	loadingTime={0}
	delay={0}
	callback={() => {
		state.scene = 4;
	}}
/>
