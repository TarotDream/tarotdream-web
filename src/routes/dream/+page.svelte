<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import CardGenerationPending from '$lib/components/CardGenerationPending.svelte';
	import CardGenerationFail from '$lib/components/CardGenerationFail.svelte';
	import { DREAM_MENU } from '$lib/constants/strings';
	
	import { postDream } from '$lib/apis/api';
	import type { AxiosResponse } from 'axios';
	import type { CommonResponse, dreamCard } from '$lib/apis/types';

	import { navigateTo, numberToString, destinationAsURI } from "$lib/utils"
	import { postDreamURI } from "$lib/constants/apis"

	let content = '';
	let directiveParentElementWidth : number;

	let cardGenerationStarted = false;
	let promiseOfCardGeneration : Promise<AxiosResponse<CommonResponse<dreamCard>, any>>

	const cardGenerationHandler = (content:string, uriDestination: string) => {
		cardGenerationStarted = true;
		return (e: Event) => {
			promiseOfCardGeneration = postDream<dreamCard>(uriDestination, {dreamStory : content}, {headers : {'Content-Type' : 'application/json'}});
		};
	};

</script>

<div class="page-wrapper flex flex-col justify-center items-center px-4" bind:offsetWidth={directiveParentElementWidth}>
	{#if cardGenerationStarted}
		{#await promiseOfCardGeneration}
			<CardGenerationPending spinnerParentElementWidth={directiveParentElementWidth}/>
		{:then generatedCard}
			{navigateTo(destinationAsURI([DREAM_MENU, numberToString(generatedCard.data.response.dreamId)]))}
		{:catch}
			<CardGenerationFail iconParentElementWidth={directiveParentElementWidth}/>
		{/await}
	{:else}
		<div class="relative flex flex-col items-center justify-center gap-2 w-full h-full mb-16">
			<h2 class="font-bold text-lg">당신의 꿈 이야기를 들려주세요</h2>
			<div class="relative w-full">
				<textarea
					class="resize-none bg-gray-200 w-full p-2 rounded-xl focus:outline-none"
					cols="30"
					rows="5"
					placeholder="(예시) 자동차 사고가 난 꿈 / 첫사랑을 다시 만나는 꿈"
					maxlength="200"
					bind:value={content}
				/>
				<div class="absolute bottom-2 right-2 flex gap-2">
					<span class="text-gray-400">{content.length} /</span>
					<span class="text-secondary">200</span>
				</div>
			</div>
			<button
				class="absolute bottom-16 w-full h-14 drop-shadow bg-control rounded-xl text-white"
				on:click={cardGenerationHandler(content, postDreamURI())}>카드 받아보기</button
			>
		</div>
	{/if}
	<NavBar currentClickedMenu={DREAM_MENU} />
</div>
