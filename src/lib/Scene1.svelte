<script lang="ts">
	import mm from '../assets/mainmenu.png';
	import Button from '../lib/Button.svelte';
	import { state } from './State.svelte';
</script>

<div class="flex flex-col items-center z-10">
	<img src={mm} alt="Dan" class="z-20 size-[60vh] mb-20" />
	<Button
		label="Play Game"
		loading={false}
		loadingTime={5000}
		delay={500}
		callback={() => {
			state.scene = 1.1;
		}}
	/>
</div>

<div
	class="grid lg:hidden fixed top-0 left-0 w-screen h-screen z-50 place-items-center bg-black/90"
	id="screensizewarning"
>
	<div class="bg-orange-500 bg-opacity-90 p-10 rounded-lg shadow-lg text-center mx-6">
		<h2 class="text-4xl font-black mb-4">Screen Size Warning</h2>
		<p class="mb-4 text-xl font-semibold">
			This game is best experienced on a device with a larger screen. Please switch to a
			tablet or desktop for the optimal experience. This game is not designed for mobile phone
			screens. You can dismiss this message and try anyway, but the layout will likely make
			the game unplayable. You are strongly suggested to heed this warning.
		</p>
		<p class="text-sm text-white">Thank you for understanding!</p>
		<br />
		<br />
		<br />
		<Button
			label="Dismiss"
			loading={false}
			loadingTime={0}
			delay={0}
			callback={() => {
				// Just hide the overlay by setting its z-index lower
				const overlay = document.getElementById('screensizewarning');
				if (overlay) {
					(overlay as HTMLElement).style.zIndex = '-1';
				}
			}}
		/>
	</div>
</div>
<div
	class="hidden lg:grid xl:hidden fixed top-0 left-0 w-screen h-screen z-50 place-items-center bg-black/90"
	id="screensizenotice"
>
	<div class="bg-amber-500 bg-opacity-90 p-10 rounded-lg shadow-lg text-center mx-6">
		<h2 class="text-4xl font-black mb-4">Screen Size Notice</h2>
		<p class="mb-4 text-2xl font-semibold">
			This game is best experienced on a device with a larger screen. Your screen is slightly
			narrower than our recommended size. This is not expected to cause issues at your current
			screen width, but the game will look nicer if you switch to a device with a slightly
			wider screen.
		</p>
		<br />
		<p class="text-xl text-white">Thank you for understanding!</p>
		<br />
		<br />
		<Button
			label="Dismiss"
			loading={false}
			loadingTime={0}
			delay={0}
			callback={() => {
				// Just hide the overlay by setting its z-index lower
				const overlay = document.getElementById('screensizenotice');
				if (overlay) {
					(overlay as HTMLElement).style.zIndex = '-1';
				}
			}}
		/>
	</div>
</div>
