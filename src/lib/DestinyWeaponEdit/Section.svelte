<!-- svelte-ignore a11y-label-has-associated-control -->
<script lang="ts">
	export let title: string;
</script>

<label class="flex flex-row items-center">
	<span class="text text-gray-500 w-24">{title}</span>
	<slot />
</label>
