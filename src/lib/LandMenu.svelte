<script lang="ts">
	import Button from './Button.svelte';
	import { state } from './State.svelte';
	let menuUnfolded = false;
</script>

<div
	class="fixed z-40 h-screen p-20 bg-yellow-800 left-0 mb-0 w-[40vw] {state.selectedCell.enabled
		? 'block opacity-80 visible'
		: 'hidden opacity-0 invisible'} transition-all duration-300 ease-in-out {menuUnfolded
		? 'bottom-0'
		: 'bottom-0'}"
>
	<div class="text-sm lg:text-2xl max-h-40 min-h-20 overflow-scroll">
		{#if !state.map[state.selectedCell.x][state.selectedCell.y].capped}
			{state.selectedCell.basin} BASIN {state.selectedCell.x}, {state.selectedCell.y}. You do
			not have access to this field.
			{#if state.map[state.selectedCell.x][state.selectedCell.y].owned || state.map[state.selectedCell.x][state.selectedCell.y].leased}
				This field has
				{state.map[state.selectedCell.x][state.selectedCell.y].oilRemaining}T barrels of oil
				remaining.
			{:else}
				You do not know how much oil is here.
			{/if}
			There is {state.map[state.selectedCell.x][state.selectedCell.y].drilled ? 'a' : 'no'} wellhead.
		{:else}
			Abandoned oilfield
		{/if}
	</div>
	<div class="flex flex-col gap-2 h-full opacity-100 min-h-0">
		<div class="flex-shrink-0 h-10"></div>
		{#if !state.map[state.selectedCell.x][state.selectedCell.y].owned && !state.map[state.selectedCell.x][state.selectedCell.y].capped}
			<Button
				label="LEASE for ${state.map[state.selectedCell.x][state.selectedCell.y].price}"
				loadingTime={1500}
				disabled={state.map[state.selectedCell.x][state.selectedCell.y].leased}
				callback={() => {
					menuUnfolded = !menuUnfolded;
					state.leasedWells += 1;
					state.map[state.selectedCell.x][state.selectedCell.y].leased = true;
				}}
			/>
		{/if}
		<!-- <Button
			label="BUY for ${10 * state.map[state.selectedCell.x][state.selectedCell.y].price}"
			loadingTime={0}
			disabled={state.map[state.selectedCell.x][state.selectedCell.y].owned}
			callback={() => {}}
		/>
		<Button
			label="SELL"
			loadingTime={0}
			callback={() => {}}
			disabled={!state.map[state.selectedCell.x][state.selectedCell.y].owned}
		/> -->
		{#if !state.map[state.selectedCell.x][state.selectedCell.y].capped}
			<Button
				label={state.rigs - state.rigsInUse > 0 ? ' DRILL BABY DRILL' : 'NO IDLE RIGS'}
				loadingTime={0}
				callback={() => {
					state.map[state.selectedCell.x][state.selectedCell.y].drilled = true;
					state.rigsInUse += 1;
				}}
				disabled={state.map[state.selectedCell.x][state.selectedCell.y].drilled ||
					state.rigs - state.rigsInUse < 1}
			/>
			<Button
				label={'CAP WELLHEAD'}
				loadingTime={0}
				callback={() => {
					state.map[state.selectedCell.x][state.selectedCell.y].capped = true;
				}}
				disabled={!state.map[state.selectedCell.x][state.selectedCell.y].drilled ||
					state.map[state.selectedCell.x][state.selectedCell.y].capped}
			/>
		{/if}
		{#if state.map[state.selectedCell.x][state.selectedCell.y].capped && state.map[state.selectedCell.x][state.selectedCell.y].leased}
			<Button
				label="END LEASE"
				loadingTime={0}
				callback={() => {
					state.leasedWells -= 1;
					state.map[state.selectedCell.x][state.selectedCell.y].leased = false;
				}}
				disabled={!state.map[state.selectedCell.x][state.selectedCell.y].leased}
			/>
		{/if}
		<div class="flex-1 min-h-0"></div>
		<Button
			label="Close"
			loadingTime={0}
			callback={() => {
				state.selectedCell.enabled = false;
			}}
		/>
		<div class="flex-shrink-0 h-20"></div>
	</div>
</div>
