<script lang="ts">
	import Banner from './Banner.svelte';
	import Button from './Button.svelte';
	import image from '../assets/char/exass.png';
	import genimg from '../assets/card/gen.png';
	import finimg from '../assets/card/fin.png';
	import mnaimg from '../assets/card/mna.png';
	import chaimg from '../assets/card/cha.png';
	import rndimg from '../assets/card/rnd.png';
	import exhimg from '../assets/card/exh.png';
	import genimgback from '../assets/card/gen-back.png';
	import finimgback from '../assets/card/fin-back.png';
	import mnaimgback from '../assets/card/mna-back.png';
	import chaimgback from '../assets/card/cha-back.png';
	import rndimgback from '../assets/card/rnd-back.png';
	import exhimgback from '../assets/card/exh-back.png';
	import { state, resetState, composeMap } from './State.svelte';
	import Card from './Card.svelte';
	import * as util from './Util.svelte';
	let selection: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh' | '' = '';
	let fullname: Record<string, string> = {
		gen: 'Darren Floods, Generalist',
		fin: 'Mary Ouchloss, Financial Expert',
		mna: 'M&A placeholder',
		cha: 'Tex Rillerson, Charismatic Leader',
		rnd: 'Armin Flasser, R&D Specialist',
		exh: 'Patrick Poutine, Security Expert',
	};
	let done: boolean = false;
	function selectCharacter(
		character: 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh',
		selected: boolean
	) {
		if (selected) selection = character;
		else if (selection === character) selection = '';
	}
	async function confirm() {
		if (done) return;
		done = true;
		state.char = selection as 'gen' | 'fin' | 'mna' | 'cha' | 'rnd' | 'exh';
		//apply special effects of selected character
		resetState();
		state.gameStart = Date.now();
		composeMap();
		state.operatingCostMultiplier = 1.0;
		state.interestRate = 0.02;
		state.mergerCostMultiplier = 1.0;
		state.shareholderSentimentMultiplier = 1.0;
		state.lawsuitInvestigationMultiplier = 1.0;
		state.rndCostMultiplier = 1.0;
		state.cyberCostMultiplier = 1.0;
		switch (selection) {
			case 'gen':
				break;
			case 'fin':
				state.interestRate = 0.015;
				state.operatingCostMultiplier = 0.99;
				break;
			case 'mna':
				state.mergerCostMultiplier = 0.75;
				break;
			case 'cha':
				state.shareholderSentimentMultiplier = 1.1;
				state.lawsuitInvestigationMultiplier = 0.5;
				break;
			case 'rnd':
				state.rndCostMultiplier = 0.5;
				break;
			case 'exh':
				state.operatingCostMultiplier = 0.98;
				state.cyberCostMultiplier = 0.5;
				break;
		}
		await util.sleep(2300);
		state.scene = 3;
	}
</script>

<Banner
	label={selection == ''
		? 'I’m Candice – your Executive Assistant. Please choose which character you would like to play as. Mouse over each character to get an overview of their strengths and weaknesses, select one, and then click “Confirm”.'
		: 'Could you confirm that you want to play as ' +
			fullname[selection] +
			'? If you would like to choose someone else, click their card instead.'}
	image="/src/assets/char/exass.png"
	visible={state.scene == 2 && done == false}
/>
<div
	class="flex flex-col items-center p-8 pt-16 {done ? 'overflow-y-visible' : 'overflow-y-hidden'}"
>
	<div
		class="flex flex-row flex-wrap justify-center gap-4 max-w-screen min-w-full transition-all duration-1000 ease-in-out {done
			? 'translate-y-20vh'
			: ''}"
	>
		<Card
			front={genimg}
			back={genimgback}
			id="gen"
			callback={selectCharacter}
			selected={selection == 'gen'}
			confirmed={selection == 'gen' && done}
		></Card>
		<Card
			front={finimg}
			back={finimgback}
			id="fin"
			callback={selectCharacter}
			selected={selection == 'fin'}
			confirmed={selection == 'fin' && done}
		></Card>
		<!-- <Card
			front={mnaimg}
			back={mnaimgback}
			id="mna"
			callback={selectCharacter}
			selected={selection == 'mna'}
			confirmed={selection == 'mna' && done}
		></Card> -->
		<Card
			front={chaimg}
			back={chaimgback}
			id="cha"
			callback={selectCharacter}
			selected={selection == 'cha'}
			confirmed={selection == 'cha' && done}
		></Card>
		<Card
			front={rndimg}
			back={rndimgback}
			id="rnd"
			callback={selectCharacter}
			selected={selection == 'rnd'}
			confirmed={selection == 'rnd' && done}
		></Card>
		<Card
			front={exhimg}
			back={exhimgback}
			id="exh"
			callback={selectCharacter}
			selected={selection == 'exh'}
			confirmed={selection == 'exh' && done}
		></Card>
	</div>
	<div
		class="flex flex-row items-center gap-4 z-20 transition-all duration-700 ease-in-out"
		class:opacity-0={done}
	>
		<Button
			label="Back"
			loading={false}
			loadingTime={200}
			delay={100}
			disabled={done}
			callback={() => {
				state.scene = 1;
			}}
		/>
		<Button
			label="Confirm"
			loading={false}
			loadingTime={3000}
			delay={800}
			disabled={selection === '' || done}
			affirmative={true}
			callback={() => {
				confirm(); /*state.scene = 3*/
			}}
		/>
	</div>
</div>
