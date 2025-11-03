<script lang="ts">
	import { state, resetState } from './State.svelte';
	import Banner from './Banner.svelte';
	import Button from './Button.svelte';
	import exassimg from '../assets/char/exass.png';
</script>

<Banner
	label="Congratulations! It is Q1 {new Date().getFullYear() +
		1}, and you have just been appointed CEO of OyleCo Inc, an oil and gas
company focusing on upstream oil and gas, based in Houston TX, with 37 wells
spread across the Permian Basin. Winning this position is exciting, but the euphoria is
wearing off quickly in the wake of announcements that the Permian Basin has hit peak
oil, indicating that production will start to decline until stock are depleted across the
entire basin."
	image={exassimg}
	visible={state.scene == 1.1}
></Banner>
<p class="text-red-700 font-extrabold text-3xl my-24">
	The new CEO needs to steer the company through these trying times.
</p>
<Button
	label="BEGIN"
	loading={false}
	loadingTime={5000}
	delay={500 * Math.random()}
	callback={() => {
		resetState();
		state.scene = 2;
	}}
/>
