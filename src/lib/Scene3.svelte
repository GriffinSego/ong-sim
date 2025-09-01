<script lang="ts">
	import { state } from './State.svelte';
	import Banner from './Banner.svelte';
	import Button from './Button.svelte';
	import exassimg from '../assets/char/exass.png';
</script>

<Banner
	label="The price of oil is $60/bbl (average revenue of $45, or 75% of the
WTI price). You have 20 rigs and 410 wells; a stock price of $150 per share;
trailing 12 months revenue of $10B, $3.6B in earnings with EPS of $12. Debt is currently $140B; free cash flow is $13M and CAPEX is
$900m. Annual dividend is 4%. Production last year was 600k bbl/day."
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
