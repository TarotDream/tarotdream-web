<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';

	let content = '';
</script>

<div class="page-wrapper flex justify-center items-center">
	<div class="relative flex flex-col items-center justify-center gap-2 w-full h-full mb-16">
		<h2 class="font-bold text-lg">당신의 꿈 이야기를 들려주세요</h2>
		<div class="relative w-full">
			<textarea
				class="resize-none bg-gray-200 w-full p-2 rounded-xl focus:outline-none"
				cols="30"
				rows="5"
				placeholder="자동차 사고가 난 꿈"
				maxlength="200"
				bind:value={content}
			/>
			<div class="absolute bottom-2 right-2 flex gap-2">
				<span class="text-gray-400">{content.length} /</span>
				<span class="text-secondary">200</span>
			</div>
		</div>
		<button class="absolute bottom-16 w-full h-14 drop-shadow bg-control rounded-xl text-white"
			>카드 받아보기</button
		>
	</div>
	<NavBar currentClickedMenu="dream" />
</div>
