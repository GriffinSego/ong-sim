<script lang="ts">
	import viteLogo from "/vite.svg";
	import Counter from "./lib/Counter.svelte";
	import Scene1 from "./lib/Scene1.svelte";
	import { state } from "./lib/State.svelte";
</script>

<main>
	<!-- <button onclick={() => state.oilPrice++}>+</button> -->
	{state.oilPrice}
	<Scene1></Scene1>
</main>
