<script lang="ts">
	import { weapon } from '$lib/stores/destiny';
</script>

<div class="flex flex-col text-lg text-gray-300">
	{#each $weapon.perks as perk}
		<div class="class flex flex-row gap-3 px-4 py-3">
			<div class="h-8 w-8 rounded bg-white" />
			<span>{perk.name}</span>
		</div>
	{/each}
	<!-- <div class="class flex flex-row gap-3 bg-gray-800 px-4 py-2">
		<div class="h-8 w-8 rounded bg-white" />
		<span>Aggresive Burst</span>
	</div>
	<div class="class flex flex-row gap-3 px-4 py-2">
		<div class="h-8 w-8 rounded border-2 border-white" />
		<span>Tunnel Vision</span>
	</div>
	<div class="class flex flex-row gap-3 px-4 py-2">
		<div class="h-8 w-8 rounded border-2 border-white" />
		<span>Wellspring</span>
	</div>
	<div class="class flex flex-row gap-3 px-4 py-2 pb-3">
		<div class="h-8 w-8 rounded border-2 border-white" />
		<span>Psychohack</span>
	</div> -->
</div>
