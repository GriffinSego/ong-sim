<script lang="ts">
	import mm from "../assets/mainmenu.png";
	import Button from "../lib/Button.svelte";
	import { state } from "./State.svelte";
</script>

<div class="text-6xl text-black font-bold">Pipeline Empire: A Blastwave Sim</div><br/>
<div class="flex flex-col items-center">
	<img src={mm} alt="Dan" class="w-100 h-100" />
	<Button label="Play Game" loading={false} loadingTime={5000} delay={500} callback={() => {state.scene = 2}} />
</div>
