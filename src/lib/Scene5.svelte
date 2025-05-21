<script lang="ts">
	import { state, ephemeralState, saveState, resetState } from "./State.svelte";
	import Infographic from "./Infographic.svelte";
	import Button from "./Button.svelte";
	import Statrow from "./Statrow.svelte";
	import Banner from "./Banner.svelte";
	import * as util from "./Util.svelte";
	import exassimg from "../assets/char/exass.png";
	import opman from "../assets/char/opman.png";
</script>
<Banner label="Welcome to your operations center. What would you like to do?" image={opman}/>
<Statrow />
<div class="text-3xl font-bold text-gray-900">Operations Management Dashboard</div>
<Button label="Effectuate actions" loading={false} loadingTime={0} delay={0} callback={() => { saveState(); state.scene = 4; }} affirmative={true}/>
<Button label="Revert changes" loading={false} loadingTime={0} delay={0} callback={() => { resetState() }} />
<Button label="Exit operations center" loading={false} loadingTime={0} delay={0} callback={() => { state.scene = 4; }} />