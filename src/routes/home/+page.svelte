<script lang="ts">
	import type { CommonResponse, dreamCard } from '$lib/apis/types.js';
	import DreamCard from '$lib/components/DreamCard.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { HOME_MENU } from '$lib/constants/strings';

	export let data : {dreams : CommonResponse<dreamCard[]>};

</script>

<div class="page-wrapper flex flex-col px-4">
	<div class="flex flex-col gap-3 w-full">
		{#if data.dreams === null}
			<h1 class="font-bold">준비중입니다!</h1>
		{:else}
			<div class="flex flex-col gap-4 pt-4 pb-20">
				{#each data.dreams.response as dream}
					<DreamCard dreamCardData={{...dream}} />
				{/each}
			</div>
		{/if}
	</div>
	<NavBar currentClickedMenu={HOME_MENU} />
</div>
