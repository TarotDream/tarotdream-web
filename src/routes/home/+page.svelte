<script lang="ts">
	import type { CommonResponse, dreamCard } from '$lib/apis/types.js';
	import DreamCard from '$lib/components/DreamCard.svelte';
	import AppBar  from '$lib/components/AppBar.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { HOME_MENU } from '$lib/constants/strings';

	export let data : {dreams : CommonResponse<dreamCard[]>};

</script>

<!-- TODO : need to fetch dream data implementing infinite-loader -->
<div class="page-wrapper flex flex-col px-4">
	<div class="flex flex-col gap-3 w-full pb-20 pt-4">
		{#if data.dreams === null}
			<h1 class="font-bold">준비중입니다!</h1>
		{:else}
			<div class="flex flex-col gap-4">
				{#each data.dreams.response as dream}
					<DreamCard dreamCardData={{...dream}} />
				{/each}
			</div>
		{/if}
	</div>
	<NavBar currentClickedMenu={HOME_MENU} />
</div>
