<script lang="ts">
	import Banner from './Banner.svelte';
	import Button from './Button.svelte';
	import image from '../assets/char/exass.png';
	import genimg from '../assets/char/gen.png';
	import finimg from '../assets/char/fin.png';
	import mnaimg from '../assets/char/mna.png';
	import chaimg from '../assets/char/cha.png';
	import rndimg from '../assets/char/rnd.png';
	import exhimg from '../assets/char/exh.png';
	import { state } from "./State.svelte";
	import Card from './Card.svelte';

	let selection: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh' | "" = "";
	let done: boolean = false;
	function selectCharacter(character: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh', selected: boolean) {
		if(selected) selection = character;
		else if(selection === character) selection = "";
	}
	function confirm() {
		done = true;
		state.char = (selection as 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh');

	}
</script>

<div class="flex flex-col items-center p-8 overflow-y-hidden">
	<Banner label="Congratulations on your new position as CEO of OyleCo Inc. I'm Candice – your Executive Assistant.
Please choose which character you would like to play as, mouse over each character to get an
overview of their strengths and weaknesses, select one and then click 'Confirm'" image="/src/assets/char/exass.png" />

	<div class="flex flex-row flex-wrap justify-center gap-4 w-full transition-all duration-1000 ease-in-out" class:translate-y-[100vh]={done} class:opacity-0={done}>
		<Card image={genimg} id=gen callback={selectCharacter} selected={selection=="gen"}></Card>
		<Card image={finimg} id=fin callback={selectCharacter} selected={selection=="fin"}></Card>
		<Card image={mnaimg} id=mna callback={selectCharacter} selected={selection=="mna"}></Card>
		<Card image={chaimg} id=cha callback={selectCharacter} selected={selection=="cha"}></Card>
		<Card image={rndimg} id=rnd callback={selectCharacter} selected={selection=="rnd"}></Card>
		<Card image={exhimg} id=exh callback={selectCharacter} selected={selection=="exh"}></Card>
	</div>

	<div class="flex flex-row items-center gap-4 z-20">
		<Button label="Confirm" loading={false} loadingTime={3000} delay={800} disabled={selection === ""} affirmative={true} callback={() => {confirm();/*state.scene = 3*/}} />
		<Button label="Back" loading={false} loadingTime={200} delay={100} callback={() => {state.scene = 1}} />
	</div>
</div>
