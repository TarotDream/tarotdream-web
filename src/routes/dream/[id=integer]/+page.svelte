<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import { DREAM_MENU, INSTAGRAM_DOMAIN, NEUTRAL_MENU } from '$lib/constants/strings';
	import { BLACK_600 } from '$lib/constants/colors';
	import type { CommonResponse, dreamCard } from '$lib/apis/types';
	import Icon from '$lib/components/Icon.svelte';
	import { destinationAsURI, numberToString, timestampToY4M2D2 } from "$lib/utils"
	import AppBar from '$lib/components/AppBar.svelte';
	import { postDreamImage } from '$lib/apis/api.js';
	import { TAROT_DREAM_DOMAIN, postDreamImageURI } from '$lib/constants/apis.js';
	import { mountModal, destroyModal, invalidateUriCache, downloadImageByUri, isDevieMobile, navigateTo } from "$lib/utils";
	import { dreamRegenerateModal } from "$lib/constants/strings"
	import { toastMessage } from '$lib/stores.js';

	export let data;
	
	const { dream } : { dream : CommonResponse<dreamCard> | null } = data;
	let response = dream?.response;
	let imageUrl = response?.imageUrl;

	const fetchDreamImage = (dreamId : string) => {
		return async (e:Event) => {
			mountModal(dreamRegenerateModal)
			try {
				const { data } = await postDreamImage<dreamCard>(postDreamImageURI(), { dreamId }, { headers: {"Cache-Control" : "no-store"}});
				imageUrl = invalidateUriCache(data.response.imageUrl)
			} catch(err) {
				console.log('ERR : generating new dream image / ' + err);
			}
			destroyModal();
		}
	}

	const downloadImageHandler = (imageUrl : string | undefined) => {
		return async (e : Event) =>  {
			if (!isDevieMobile()) {
				if(imageUrl === undefined) {
					$toastMessage = "이미지 다운로드가 실패했습니다"
				}
				else {
					try {
						await downloadImageByUri(imageUrl, document);
						$toastMessage = "이미지 다운로드가 완료되었습니다";
					} catch(err) {
						$toastMessage = "이미지 다운로드가 실패했습니다"
						console.log("[Error] Downloading image / " + err);
					}
				}
			}
		}
	} 

	const shareImageHandler = (dreamUri : string) => {
		return async(e:Event) => {
			try {
				await navigator.clipboard.writeText(dreamUri);
				$toastMessage = "클립보드에 주소를 복사했습니다";
				setInterval(() => {
					navigateTo(INSTAGRAM_DOMAIN);
				}, 2000)
			} catch(err) {
				$toastMessage = "주소 복사 실패"
				console.log("[Error] Copying ClipBoard / " + err);
			}
		}
	}
</script>

{#if response}
	<div class="page-wrapper">
		<AppBar hasBack={true} title={response.dreamTitle}/>
		<!-- card image -->
		<div class="w-full h-[440px]">
			{#if imageUrl !== undefined}
				<img src={imageUrl} alt={response.dreamTitle} class="w-full h-full object-contain" id="dream-image" />
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
			<button class="w-full h-14 bg-control text-white rounded-xl drop-shadow" on:click={fetchDreamImage(numberToString(response.dreamId))}>카드 다시 받기</button>
			<div class="flex gap-4">
				<button class="flex-1 w-full h-14 rounded-xl bg-white border border-gray-200 drop-shadow truncate" 
					id="save-dream"
					on:click={downloadImageHandler(imageUrl)}
					>카드 저장하기
				</button>
				<button
					class="flex justify-center items-center w-14 h-14 border border-gray-200 rounded-xl drop-shadow bg-white"
					id="share-dream"
					on:click={shareImageHandler(destinationAsURI([TAROT_DREAM_DOMAIN, DREAM_MENU, numberToString(response.dreamId)], false))}
					><Icon icon="share-2" fill={BLACK_600} />
				</button>
			</div>
		</div>

		<NavBar currentClickedMenu={NEUTRAL_MENU} />
	</div>
{/if}