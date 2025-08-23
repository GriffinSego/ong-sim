<script lang="ts">
	import { state, ephemeralState } from './State.svelte';
	import Infographic from './Infographic.svelte';
	import Button from './Button.svelte';
	import Statrow from './Statrow.svelte';
	import Banner from './BannerSm.svelte';
	import * as util from './Util.svelte';
	import exassimg from '../assets/char/exass.png';
	import ExecutiveDashboard from './ExecutiveDashboard.svelte';
	import ActionMenu from './ActionMenu.svelte';
	import Map from './Map.svelte';
</script>

<div class="flex flex-col items-center">
	<Banner />
	<ExecutiveDashboard />
	<div class="flex-grow"></div>
	<div id="news"></div>
</div>
