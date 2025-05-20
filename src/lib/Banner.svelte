<script lang="ts">
	export let label: string = "Example Text"
	export let image: string = "/vite.svg"
	export let visible: boolean = true
	// $: alert(visible);
</script>

<div class="bannerctx relative inset-0 flex items-center justify-center max-w-5xl md:mx-auto transition-all duration-1000 ease-in-out opacity-0 translate-y-0" class:!opacity-100={visible} class:!-translate-y-72={!visible}>
	<img src={image} class="md:w-48 md:h-48 w-36 h-36 l-24 -mr-18 z-30"/>
	<div class="bg-yellow-600 p-4 md:font-bold text-white rounded-ee-4xl r-24 z-20 pl-20 py-1 md:py-4 text-left max-h-32"><div>{label}</div></div>
</div>
