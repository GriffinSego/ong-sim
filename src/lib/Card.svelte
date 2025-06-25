<script lang="ts">
	export let front: string;
	export let back: string;
	export let id: string;
	export let callback: Function = () => {};
	export let selected: boolean = false;
	export let confirmed: boolean = false;
	let ephemeralSelected: boolean = false;
	function handleClick() {
		ephemeralSelected = !selected;
		callback(id, ephemeralSelected);
	}
	let hovered = false;
	let rotateFactor = 3;
	let rotateX = 0;
	let rotateY = 0;
	function handleMouseMove(event: MouseEvent) {
		hovered = true;
		const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		rotateX = (y / rect.height - 0.5) * 20 * rotateFactor;
		rotateY = (x / rect.width - 0.5) * -20 * rotateFactor;
	}
	function handleMouseLeave() {
		hovered = false;
		rotateX = 0;
		rotateY = 0;
	}
</script>

<button
	class="w-42 h-60 relative group cursor-pointer {selected
		? confirmed
			? '-mt-96'
			: '-mt-12'
		: '-mt-1'} {selected
		? ' animate-pulse z-30'
		: 'z-10'} transition-all duration-700 ease-in-out overflow-hidden"
	on:click={handleClick}
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg); transition: transform 0.1s ease-out;"
>
	<img
		src={front}
		alt="Playing card"
		class="{hovered
			? 'rotate-y-180 opacity-0'
			: 'rotate-y-0 opacity-100'} w-full h-full object-contain transition-all duration-500 ease-linear shadow-sxl/30 shadow-indigo-500"
	/>
	<img
		src={back}
		alt="Playing card"
		class="{hovered
			? 'rotate-y-0 opacity-100'
			: 'rotate-y-180 opacity-0'} relative -top-68 w-full h-full object-contain transition-all duration-500 ease-linear shadow-xl/30 shadow-indigo-500"
	/>
</button>
