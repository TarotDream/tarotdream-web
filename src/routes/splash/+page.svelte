<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { navigateTo } from '$lib/utils';

	let isInputRevealed = false;

	const inputRevealTimer = () =>
		setTimeout(() => {
			isInputRevealed = true;
			headerMarginBottom.set(window.innerHeight * 0.45);
		}, 1500);

	const headerMarginBottom = tweened(0, { duration: 800, easing: cubicOut });

	const navigatorController = (destination: string) => {
		return (e: Event) => {
			navigateTo(destination);
		};
	};

	onMount(() => {
		inputRevealTimer();
	});
</script>

<div class="relative flex justify-center items-center w-full h-full bg-primary">
	<h1
		class="w-full text-center text-4xl text-white font-bold"
		style:margin-bottom="{$headerMarginBottom}px"
	>
		꿈보다 해몽
	</h1>
	{#if isInputRevealed}
		<div class="absolute flex flex-col items-center gap-2 w-full px-11" in:fade>
			<h2 class="w-full text-2xl text-white font-bold text-left">안녕하세요,</h2>
			<div class="flex gap-2 w-full">
				<input
					type="text"
					class="w-full bg-transparent border-b border-white focus:outline-none text-center text-lg text-white"
					value="익명"
				/>
				<h2 class="text-xl font-bold text-white">님!</h2>
			</div>
		</div>
		<div class="absolute bottom-28" in:fade>
			<button
				class="flex justify-center items-center w-72 h-14 rounded-xl bg-white drop-shadow text-black-600 text-lg font-bold"
				on:click={navigatorController('home')}>시작하기</button
			>
		</div>
	{/if}
</div>
