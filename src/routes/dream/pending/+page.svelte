<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import { DoubleBounce } from 'svelte-loading-spinners';
	import { PRIMARY } from '$lib/constants/colors';
	import { DREAM_MENU } from '$lib/constants/strings';

	let spinnerParentElementWidth: number;
</script>

<div
	class="page-wrapper flex flex-col justify-center items-center px-4"
	bind:offsetWidth={spinnerParentElementWidth}
>
	<div class="flex flex-col gap-4">
		<DoubleBounce color={PRIMARY} size={spinnerParentElementWidth * 0.7} />
		<h2 class="text-lg font-bold text-center">열심히 꿈을 해석 중이에요</h2>
	</div>
	<NavBar currentClickedMenu={DREAM_MENU} />
</div>
