<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import Infographic from './Infographic.svelte';
	import Button from './Button.svelte';
	import Statrow from './Statrow.svelte';
	import Banner from './BannerSm.svelte';
	import * as util from './Util.svelte';
	import exassimg from '../assets/char/exass.png';
	import ExecutiveDashboard from './ExecutiveDashboard.svelte';
	import ActionMenu from './ActionMenu.svelte';
	import Map from './Map.svelte';
</script>

<div class="flex flex-row w-screen h-screen fixed top-0 left-0" id="content-window-ctx">
	<div class="flex flex-col m-4" id="content-left-ctx">
		<ExecutiveDashboard />
		<ActionMenu />
	</div>
	<div class="grow-2"></div>
	<div class="flex flex-col m-4" id="content-right-ctx">
		<Banner
			label="Good morning, sir. It is {util.intToMonth(state.quarter * 3) +
				' ' +
				(2025 + Math.floor(state.quarter / 4))}, and you have {12 -
				state.quarter} quarters left to right this company. What would you like to do?"
			image={exassimg}
		/>
		<div class="grow-1"></div>
		<div class="flex flex-row justify-end">
			<div class="flex flex-col">
				<div
			class="border-red-500 bg-yellow-600/60 w-full align-left float-left rounded-se-2xl text-white font-bold mb-1 py-1" id="grid-map-header"
		>Map overview</div>
		<div
			class="grid grid-cols-16 grid-rows-16 border border-red-500 bg-black w-fit" id="grid-map-ctx"
		>
			{#each Array.from({ length: 256 }) as index}
				<div class="size-9 col-span-1 row-span-1 border border-green-300 bg-white" id={"cell"+index}>index</div>
			{/each}
		</div>
	</div>
	</div>
		<!-- <Map /> -->
		<div class="flex flex-row flex-nowrap">
			<div class="grow-1"></div>
			<Button
				label="End Turn"
				loading={false}
				loadingTime={0}
				delay={0}
				callback={() => {
					state.scene = 7;
				}}
			/>
		</div>
	</div>
	<div class="grow-1"></div>
</div>
<!-- <Button label="Operations" loading={false} loadingTime={0} delay={0} callback={() => {state.scene = 5}} affirmative={true} />
<Button label="Overview" loading={false} loadingTime={0} delay={0} callback={() => {state.scene = 6}} affirmative={true} /> -->
