<script lang="ts">
	import { weapon } from '$lib/stores/destiny';
</script>

<div
	class="grid grid-cols-[45%_55%] items-center gap-x-2 border-b border-b-gray-500 px-4 py-2 [&>dt]:text-lg [&>dt]:text-gray-400 [&>dd]:text-lg [&>dd]:text-white"
>
	{#each $weapon.stats as { name, value, hasMeter }}
		{@const meterWidth = `${value}%`}
		<dt class="col-span-1 text-right">{name}</dt>
		<dd class="col-span-1 flex flex-row items-center gap-2 pr-8">
			{#if hasMeter}
				<div class="relative flex flex-1">
					<div class="h-4 flex-1 bg-gray-700" />
					<div class="absolute h-4 flex-1 bg-gray-100 meter" style:--meter-width={meterWidth} />
				</div>
			{/if}
			<span>{value}</span>
		</dd>
	{/each}
</div>

<style>
	.meter {
		width: var(--meter-width);
	}
</style>
