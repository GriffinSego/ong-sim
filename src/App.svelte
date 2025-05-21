<script lang="ts">
	import viteLogo from "/vite.svg";
	import Counter from "./lib/Counter.svelte";
	import Scene1 from "./lib/Scene1.svelte";
	import Scene2 from "./lib/Scene2.svelte";
	import Scene3 from "./lib/Scene3.svelte";
	import Scene4 from "./lib/Scene4.svelte";
	import Scene5 from "./lib/Scene5.svelte";
	import Scene6 from "./lib/Scene6.svelte";
	import Scene7 from "./lib/Scene7.svelte";
	import Scene8 from "./lib/Scene8.svelte";
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
	{#if state.scene === 3}
	<Scene3></Scene3>
	{/if}
	{#if state.scene === 4}
	<Scene4></Scene4>
	{/if}
	{#if state.scene === 5}
	<Scene5></Scene5>
	{/if}
	{#if state.scene === 6}
	<Scene6></Scene6>
	{/if}
	{#if state.scene === 7}
	<Scene7></Scene7>
	{/if}
	{#if state.scene === 8}
	<Scene8></Scene8>
	{/if}


</main>
