<script lang="ts">
	export let image: string;
	export let id: string;
	export let callback: Function = () => {};
	export let selected: boolean = false;
	let ephemeralSelected: boolean = false;
	function handleClick() {
		ephemeralSelected = !selected;
		callback(id, ephemeralSelected);
	}
	let rotateX = 0;
	let rotateY = 0;
	function handleMouseMove(event: MouseEvent) {
		const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		rotateX = ((y / rect.height) - 0.5) * 20;
		rotateY = ((x / rect.width) - 0.5) * -20;
	}
	function handleMouseLeave() {
		rotateX = 0;
		rotateY = 0;
	}
</script>

<div class="w-48 h-72 relative group cursor-pointer outline ring-1 ring-inset -mt-1 {selected ? 'ring-12 ring-amber-400 animate-pulse -mt-12 z-30' : 'z-10'} transition-all duration-700 ease-in-out" on:click={handleClick} on:mousemove={handleMouseMove} on:mouseleave={handleMouseLeave} style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg); transition: transform 0.1s ease-out;">
	<img src={image} alt="Playing card" class="w-full h-full object-contain" />
</div>
