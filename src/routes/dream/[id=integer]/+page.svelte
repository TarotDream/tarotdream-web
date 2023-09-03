<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import { NEUTRAL_MENU } from '$lib/constants/strings';
	import { BLACK_600 } from '$lib/constants/colors';
	import type { CommonResponse, dreamCard } from '$lib/apis/types';
	import Icon from '$lib/components/Icon.svelte';
	import { numberToString, timestampToY4M2D2 } from "$lib/utils"
	import AppBar from '$lib/components/AppBar.svelte';
	import { postDreamImage } from '$lib/apis/api.js';
	import { postDreamImageURI } from '$lib/constants/apis.js';
	import { invalidateAll } from '$app/navigation';
	import { mountModal, destroyModal } from "$lib/utils";
	import { dreamRegenerateModal } from "$lib/constants/strings"

	export let data;
	
	const { dream } : { dream : CommonResponse<dreamCard> | null} = data;

	$: response = dream?.response;

	const fetchDreamImage = (dreamId : string) => {
		return async (e:Event) => {
			mountModal(dreamRegenerateModal)
			try {
				const { data } = await postDreamImage<dreamCard>(postDreamImageURI(), { dreamId }, { headers: {"Cache-Control" : "no-store"}});
				response = data.response;
			} catch(err) {
				console.log('ERR : generating new dream image / ' + err);
			}
			destroyModal();
		}
	}
</script>

<!-- TODO : when dream data is null, have to show other UI -->
{#if response !== undefined}
	<div class="page-wrapper">
		<AppBar hasBack={true} title={response.dreamTitle}/>
		<!-- card image -->
		<div class="w-full h-[440px]">
			{#if response.imageUrl !== 'null'}
				<img src={response?.imageUrl} alt={response.dreamTitle} class="w-full h-full object-contain" />
			{:else}
				<div class="w-full h-full bg-gray-400" />
			{/if}
		</div>
		<div class="w-full h-1 bg-gray-200" />
		<!-- other content -->
		<div class="flex flex-col gap-4 p-4">
			<!-- title & created_at -->
			<div class="flex flex-col">
				<h1 class="font-bold">{response.dreamTitle}</h1>
				<p class="text-sm font-semibold">{timestampToY4M2D2(response.created)}</p>
			</div>
			<!-- content -->
			{#each response.possibleMeanings as meanings}
				<p class="break-words">{meanings}</p>
			{/each}
		</div>
		<!-- buttons -->
		<div class="flex flex-col gap-4 w-full p-4">
			<button class="w-full h-14 bg-control text-white rounded-xl drop-shadow" on:click={fetchDreamImage(numberToString(dream.response.dreamId))}>카드 다시 받기</button>
			<div class="flex gap-4">
				<button class="flex-1 w-full h-14 rounded-xl bg-white border border-gray-200 drop-shadow truncate"
					>카드 저장하기</button
				>
				<button
					class="flex justify-center items-center w-14 h-14 border border-gray-200 rounded-xl drop-shadow bg-white"
					><Icon icon="share-2" fill={BLACK_600} /></button
				>
			</div>
		</div>

		<NavBar currentClickedMenu={NEUTRAL_MENU} />
	</div>
{/if}
