<script lang="ts">
	import { weapon } from '$lib/stores/destiny';
	import Stats from '$lib/DestinyWeaponCard/Stats.svelte';
	import Perks from './Perks.svelte';
	import Level from './Level.svelte';
	import Description from './Description.svelte';
</script>

<main class="flex">
	<article class="flex w-96 flex-col tabular-nums">
		<div class="header flex flex-col gap-1 bg-fuchsia-900 py-2 px-4 relative">
			<h1 class="text-2xl font-bold text-white">{$weapon.name}</h1>
			<div class="flex flex-row justify-between">
				<h2 class="text-gray-300">{$weapon.weaponType}</h2>
				<span class="text-gray-400">{$weapon.rarity}</span>
			</div>
			<div
				class="absolute border-t-[1.5rem] border-r-[1.5rem] border-b-[1.5rem] border-l-[1.5rem] border-transparent border-r-gray-800 border-t-gray-800 top-0 right-0"
			/>
			<div class="absolute w-4 h-4 bg-white rounded-full top-0 right-0 m-[.4rem]" />
		</div>
		<div class="main flex flex-col bg-gray-900">
			<Description />
			<Level />
			<Stats />
			<Perks />
		</div>
	</article>
</main>
