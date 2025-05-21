<script lang="ts">
	import { state, ephemeralState } from "./State.svelte";
	import Infographic from "./Infographic.svelte";
	import Button from "./Button.svelte";
	import Statrow from "./Statrow.svelte";
	import Banner from "./Banner.svelte";
	import * as util from "./Util.svelte";
	import exassimg from "../assets/char/exass.png";
</script>
<Banner label="Good morning, sir. It is {util.intToMonth(state.month)}, and you have {12-state.month} months left to right this company. What would you like to do?" image={exassimg}/>
<Statrow />
<Button label="Operations" loading={false} loadingTime={0} delay={0} callback={() => {state.scene = 5}} affirmative={true} />
<Button label="Overview" loading={false} loadingTime={0} delay={0} callback={() => {state.scene = 6}} affirmative={true} />
<Button label="End Turn" loading={false} loadingTime={0} delay={0} callback={() => {state.scene = 7}} />