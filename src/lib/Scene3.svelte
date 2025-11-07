<script lang="ts">
	import { state } from './State.svelte';
	import Banner from './Banner.svelte';
	import Button from './Button.svelte';
	import exassimg from '../assets/char/exass.png';
</script>

<Banner
	label="The price of oil is $60/bbl (average revenue of $45, or 75% of the
WTI price). You have 1 rig (which can be used 3x per quarter) and 37 wells, a stock price of $150 per share in a market with 3M shares and market cap of $450M, annual dividend is $5.25/share (3.5%),
trailing 12 months revenue of $148M, and $57M in earnings with EPS of $18. Debt is currently $140M; cash on hand is $13M. Production last year was 8.5MBOE/day."
	image={exassimg}
	visible={state.scene == 3}
></Banner>
<p class="text-red-700 font-extrabold text-3xl my-24">
	The new CEO needs to steer the company through these trying times.
</p>
<Button
	label="OK"
	loading={false}
	loadingTime={5000}
	delay={500}
	callback={() => {
		state.scene = 4;
	}}
/>
