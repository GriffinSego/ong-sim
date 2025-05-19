<script lang="ts">
	import viteLogo from "/vite.svg";
	import Counter from "./lib/Counter.svelte";
	import Scene1 from "./lib/Scene1.svelte";
	import Scene2 from "./lib/Scene2.svelte";
	import { state } from "./lib/State.svelte";
</script>

<main>
	<!-- <button onclick={() => state.oilPrice++}>+</button> -->
	<!-- {state.oilPrice} -->
	{#if state.scene === 1}
	<Scene1></Scene1>
	{/if}
	{#if state.scene === 2}
	<Scene2></Scene2>
	{/if}
</main>
