<script lang="ts">
	import { state, ephemeralState, saveState, resetState } from "./State.svelte";
	import Infographic from "./Infographic.svelte";
	import Button from "./Button.svelte";
	import Statrow from "./Statrow.svelte";
	import Banner from "./Banner.svelte";
	import * as util from "./Util.svelte";
	import exassimg from "../assets/char/exass.png";
	import opman from "../assets/char/opman.png";
	import Infobutton from "./Infobutton.svelte";
</script>
<Banner label="Welcome to your operations center. What would you like to do?" image={opman}/>
<Statrow />
<div class="text-3xl font-bold text-gray-900">Operations Management Dashboard</div>
<div class="flex flex-wrap flex-row justify-center items-center">
<Infobutton label="Raise capital" description="Increases debt" scaleButtons={true} cost={-1} callback={() => { }}/>
<Infobutton label="Repay debt" description="Decreases debt" scaleButtons={true} cost={1} callback={() => { }}/>
<Infobutton label="Stock buyback" description="Increases stock price and shareholder sentiment, costs cash" scaleButtons={true} cost={-1} callback={() => { }}/>
<Infobutton label="Increase dividends" description="Increases stock price and shareholder sentiment, decreases revenue" scaleButtons={true} cost={-1} callback={() => { }}/>
<Infobutton label="Decrease dividends" description="Harms stock price and shareholder sentiment, increases revenue" scaleButtons={true} cost={-1} callback={() => { }}/>
<Infobutton label="Lawsuit" description="Form a lawsuit, requires lawyers" scaleButtons={false} cost={-1} callback={() => { }}/>
<Infobutton label="Investigate SEC" description="Infiltrate the SEC, requires undercover operatives" scaleButtons={false} cost={-1} callback={() => { }}/>
<Infobutton label="Health and safety training" description="Improves safety conditions" scaleButtons={false} cost={util.value.million} callback={() => { }}/>
<Infobutton label="Cyber security" description="Improves safety conditions" scaleButtons={false} cost={util.value.million} callback={() => { }}/>
</div>

<Button label="Effectuate actions" loading={false} loadingTime={0} delay={0} callback={() => { saveState(); state.scene = 4; }} affirmative={true}/>
<Button label="Revert changes" loading={false} loadingTime={0} delay={0} callback={() => { resetState() }} />
<Button label="Exit operations center" loading={false} loadingTime={0} delay={0} callback={() => { state.scene = 4; }} />