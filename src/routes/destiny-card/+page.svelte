<script type="ts">
	import { cardEl } from '$lib/stores/destiny';
	import DestinyWeaponCard from '$lib/DestinyWeaponCard/Card.svelte';
	import Form from '$lib/DestinyWeaponEdit/Form.svelte';
	import { toPng } from 'html-to-image';

	const handleDownload = () => {
		if ($cardEl) {
			toPng($cardEl).then((dataUrl) => {
				const linkEl = document.createElement('a');
				linkEl.download = 'card';
				linkEl.href = dataUrl;
				linkEl.click();
			});
		}
	};
</script>

<section class="flex gap-8 justify-center">
	<main>
		<DestinyWeaponCard />
	</main>

	<aside>
		<Form />
	</aside>
</section>

<button on:click={handleDownload}>Download</button>

<svelte:head>
	<title>데스티니 2 무기 만들기</title>
</svelte:head>

<style>
	@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css');
</style>
