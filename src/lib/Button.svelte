<script lang="ts">
	export let label: string = 'BUTTON TEXT';
	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let affirmative: boolean = false;
	export let loadingTime: number = 2000;
	export let delay: number = 0;
	export let callback: Function = () => {};
	function clicked() {
		console.log('Button clicked!');
		loading = true;
		setTimeout(() => {
			callback();
		}, delay);
		setTimeout(() => {
			loading = false;
		}, loadingTime);
	}
</script>

<div class="buttonctx">
	<button
		on:click={clicked}
		disabled={loading || disabled}
		class="rounded-ss-4xl outline outline-transparent transition-all cursor-pointer {affirmative
			? 'bg-yellow-600'
			: 'bg-red-800'} {disabled
			? 'opacity-50'
			: ''} font-extrabold rounded-ee-4xl px-12 py-3 text-3xl m-4 text-white {disabled
			? ''
			: 'hover:bg-black hover:tracking-wider'} focus:outline-4 active:outline-4 focus:text-black active:text-black relative"
	>
		<span class={loading ? 'invisible' : 'visible'}>
			{label.toUpperCase()}
		</span>
		{#if loading}
			<div class="absolute inset-0 flex items-center justify-center">
				<svg
					class="size-5 animate-spin text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					><circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle><path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path></svg
				>
			</div>
		{/if}
	</button>
</div>
