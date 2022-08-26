<script type="ts">
	import DestinyWeaponCard from '$lib/DestinyWeaponCard/Card.svelte';
	import Form from '$lib/DestinyWeaponEdit/Form.svelte';
</script>

<section class="flex gap-8 justify-center">
	<main>
		<DestinyWeaponCard />
	</main>

	<aside>
		<Form />
	</aside>
</section>

<svelte:head>
	<title>데스티니 2 무기 만들기</title>
</svelte:head>
