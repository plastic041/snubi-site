<script lang="ts">
	import { weapon } from '$lib/stores/destiny';
	import Section from './Section.svelte';
</script>

<form class="flex flex-col gap-1">
	<Section title="이름">
		<input type="text" bind:value={$weapon.name} class="border px-2 py-1" />
	</Section>
	<Section title="종류">
		<input type="text" bind:value={$weapon.weaponType} class="border px-2 py-1" />
	</Section>
	<Section title="등급">
		<input type="text" bind:value={$weapon.rarity} class="border px-2 py-1" />
	</Section>
	<Section title="레벨">
		<input type="text" bind:value={$weapon.level} class="border px-2 py-1" />
	</Section>
	<Section title="무기 종류">
		<input type="text" bind:value={$weapon.slot} class="border px-2 py-1" />
	</Section>
	{#each $weapon.stats as { name, value }}
		<Section title={name}>
			<div class="flex items-center justify-between flex-1 gap-2">
				<input type="range" class="border px-2 py-1 flex-1" bind:value min="0" max="999" />
				<input
					type="number"
					class="w-14 text-right border appearance-none-webkit px-2"
					bind:value
					min="0"
					max="999"
				/>
			</div>
		</Section>
	{/each}
</form>
