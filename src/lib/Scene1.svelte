<script lang="ts">
	import mm from '../assets/mainmenu.png';
	import Button from '../lib/Button.svelte';
	import { state } from './State.svelte';
</script>

<div class="flex flex-col items-center z-10">
	<img src={mm} alt="Dan" class="z-20 size-[60vh] mb-20" />
	<Button
		label="Play Game"
		loading={false}
		loadingTime={5000}
		delay={500}
		callback={() => {
			state.scene = 1.1;
		}}
	/>
</div>
