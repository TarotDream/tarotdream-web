<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import { DREAM_MENU } from '$lib/constants/strings';
	import { BLACK_600 } from '$lib/constants/colors';
	import type { CommonResponse, DreamCard } from '$lib/apis/types';
	import Icon from '$lib/components/Icon.svelte';

	export let data;
	
	const { dream } : { dream : CommonResponse<DreamCard> | null} = data;
</script>

{#if dream !== null}
	<div class="page-wrapper">
		<!-- card image -->
		<div class="absolute top-0 w-full h-[440px]">
			{#if dream.response.imageUrl !== 'null'}
				<img src={dream.response.imageUrl} alt={dream.response.dreamTitle} class="w-full h-full object-contain" />
			{:else}
				<div class="w-full h-full bg-gray-400" />
			{/if}
		</div>
		<div class="w-full h-[440px]" />
		<!-- other content -->
		<div class="flex flex-col gap-4 p-4">
			<!-- title & created_at -->
			<div class="flex flex-col">
				<h1 class="font-bold">{dream.response.dreamTitle}</h1>
				<p class="text-xs font-semibold">{dream.response.created}</p>
			</div>
			<!-- content -->
			<p class="break-words">{dream.response.posssibleMeanings}</p>
		</div>
		<!-- buttons -->
		<div class="flex flex-col gap-4 w-full p-4">
			<button class="w-full h-14 bg-control text-white rounded-xl drop-shadow">카드 다시 받기</button>
			<div class="flex gap-4">
				<button class="flex-1 w-full h-14 rounded-xl bg-white border border-gray-200 drop-shadow"
					>카드 저장하기</button
				>
				<button
					class="flex justify-center items-center w-14 h-14 border border-gray-200 rounded-xl drop-shadow bg-white"
					><Icon icon="share-2" fill={BLACK_600} /></button
				>
			</div>
		</div>

		<NavBar currentClickedMenu={DREAM_MENU} />
	</div>
{/if}