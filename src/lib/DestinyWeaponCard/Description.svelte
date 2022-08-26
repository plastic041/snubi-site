<script lang="ts">
	import { weapon } from '$lib/stores/destiny';
</script>

<div class="px-4 py-2 border-b border-b-gray-600">
	<p class="text-white">
		{$weapon.description}
	</p>
</div>

<style>
	p {
		word-break: keep-all;
		overflow-wrap: break-word;
	}
</style>
