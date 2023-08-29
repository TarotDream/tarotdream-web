<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import { DREAM_MENU } from '$lib/constants/strings';
	import { BLACK_600 } from '$lib/constants/colors';
	import type { DreamCardResponse } from '$lib/apis/types';
	import Icon from '$lib/components/Icon.svelte';

	let dreamCard: DreamCardResponse = {
		id: '1',
		title: '브레이크가 고장난 자동차',
		created_at: '2023.02.03',
		content: `통제력을 잃는 불안감: 이 꿈은 때로는 개인이 주변 상황을 제어하지 못하거나 예기치 않은 상황에 처한 불안을 나타낼 수 있습니다. 브레이크가 고장나고 자동차가 제어 불능 상태로 전진하면, 당신이 주변 상황을 통제하지 못하거나 불확실한 상황에서 불안을 느끼고 있는지를 나타낼 수 있습니다.
스트레스와 압박: 브레이크가 고장난 자동차를 타고 달리는 꿈은 때로는 스트레스와 압박감을 나타낼 수 있습니다. 일상적인 도전이나 압박감 때문에 마치 제어를 잃고 어려운 상황에 처한 듯한 느낌을 줄 수 있습니다.
불안정한 변화: 이 꿈은 때로는 개인의 삶에서 예기치 않은 변화나 불확실성을 나타낼 수 있습니다. 브레이크가 고장난 자동차는 일상에서의 예기치 않은 변화를 상징할 수 있으며, 이러한 변화에 대한 불안을 표현할 수 있습니다.`,
		imageUri: 'null',
		keywords: ['불안감']
	};
</script>

<div class="page-wrapper">
	<!-- card image -->
	<div class="absolute top-0 w-full h-[440px]">
		{#if dreamCard?.imageUri !== 'null'}
			<img src={dreamCard.imageUri} alt={dreamCard.title} class="w-full h-full object-contain" />
		{:else}
			<div class="w-full h-full bg-gray-400" />
		{/if}
	</div>
	<div class="w-full h-[440px]" />
	<!-- other content -->
	<div class="flex flex-col gap-4 p-4">
		<!-- title & created_at -->
		<div class="flex flex-col">
			<h1 class="font-bold">{dreamCard.title}</h1>
			<p class="text-xs font-semibold">{dreamCard.created_at}</p>
		</div>
		<!-- content -->
		<p class="break-words">{dreamCard.content}</p>
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
