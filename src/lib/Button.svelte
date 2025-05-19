<script lang="ts">
	let text: string = $state("BUTTON TEXT");
</script>

<div class="buttonctx">
	<button>
		{text.toUpperCase()}
	</button>
</div>
