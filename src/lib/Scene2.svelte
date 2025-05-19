<script lang="ts">
	import Banner from './Banner.svelte';
	import Button from './Button.svelte';
	import image from '../assets/char/exass.png';
	import { state } from "./State.svelte";
	</script>
Scene 2!
<div class="flex flex-col items-center">
	<Banner label="Congratulations on your new position as CEO of OyleCo Inc. I’m Candice – your Executive Assistant.
Please choose which character you would like to play as, mouse over each character to get an
overview of their strengths and weaknesses, select one and then click “Confirm”" image="/src/assets/char/exass.png"></Banner>
	<div class="flex flex-row items-center">
		<Button label="Confirm" loading={false} loadingTime={3000} delay={800} affirmative={true} callback={() => {state.scene = 3}} />
		<Button label="Back" loading={false} loadingTime={200} delay={100} callback={() => {state.scene = 1}} />
	</div>
</div>
