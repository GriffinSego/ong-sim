<script lang="ts">
</script>

<!--This lazy workaround forces tailwind to export the needed classes which are used in the game programmatically and not explicitly, because they would not otherwise be included in the build. I know that this gives a warning but it's necessary for the game to render correctly.-->
<div
	class="w-0 h-0 p-0 m-0 fixed invisible opacity-100 top-0 left-0 hidden col-span-3 col-span-2 col-span-1 col-span-4 col-span-5 col-span-6 row-span-2 row-span-3 row-span-4 row-span-5 row-span-6"
></div>
