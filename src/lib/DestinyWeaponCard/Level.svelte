<script lang="ts">
	import { weapon } from '$lib/stores/destiny';
</script>

<div
	id="level-container"
	class="flex flex-row items-center divide-x-2 divide-gray-500 border-b border-b-gray-500 px-4 text-white"
>
	<span class="mr-4 text-[3rem] font-extrabold tracking-[-0.2rem]">{$weapon.level}</span>
	<div id="slot-type-container" class="flex flex-row gap-2 pl-4">
		<span class="text-lg">{$weapon.slot}</span>
	</div>
</div>
