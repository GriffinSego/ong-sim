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
	import * as util from "./Util.svelte";
	let selection: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh' | "" = "";
	let done: boolean = false;
	function selectCharacter(character: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh', selected: boolean) {
		if(selected) selection = character;
		else if(selection === character) selection = "";
	}
	async function confirm() {
		done = true;
		state.char = (selection as 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh');
		await util.sleep(2300);
		state.scene = 3;
	}
</script>
<Banner label="Congratulations on your new position as CEO of OyleCo Inc. I'm Candice – your Executive Assistant.
Please choose which character you would like to play as, mouse over each character to get an
overview of their strengths and weaknesses, select one and then click 'Confirm'" image="/src/assets/char/exass.png" visible={state.scene == 2 && done == false}/>
<div class="flex flex-col items-center p-8 pt-16 overflow-y-hidden">

	<div class="flex flex-row flex-wrap justify-center gap-4 max-w-screen min-w-full transition-all duration-1000 ease-in-out" class:translate-y-[80vh]={done}>
		<Card image={genimg} id=gen callback={selectCharacter} selected={selection=="gen"} confirmed={selection=="gen" && done}></Card>
		<Card image={finimg} id=fin callback={selectCharacter} selected={selection=="fin"} confirmed={selection=="fin" && done}></Card>
		<Card image={mnaimg} id=mna callback={selectCharacter} selected={selection=="mna"} confirmed={selection=="mna" && done}></Card>
		<Card image={chaimg} id=cha callback={selectCharacter} selected={selection=="cha"} confirmed={selection=="cha" && done}></Card>
		<Card image={rndimg} id=rnd callback={selectCharacter} selected={selection=="rnd"} confirmed={selection=="rnd" && done}></Card>
		<Card image={exhimg} id=exh callback={selectCharacter} selected={selection=="exh"} confirmed={selection=="exh" && done}></Card>
	</div>
	<div class="flex flex-row items-center gap-4 z-20 transition-all duration-700 ease-in-out" class:opacity-0={done}>
		<Button label="Confirm" loading={false} loadingTime={3000} delay={800} disabled={selection === "" || done} affirmative={true} callback={() => {confirm();/*state.scene = 3*/}} />
		<Button label="Back" loading={false} loadingTime={200} delay={100} disabled={done} callback={() => {state.scene = 1}} />
	</div>
</div>
