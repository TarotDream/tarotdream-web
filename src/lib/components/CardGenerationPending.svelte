<script lang="ts">
	import { DoubleBounce } from 'svelte-loading-spinners';
	import { PRIMARY } from '$lib/constants/colors';

	export let spinnerParentElementWidth: number;
</script>

<div class="flex flex-col gap-4">
	<DoubleBounce color={PRIMARY} size={spinnerParentElementWidth * 0.7} />
	<div class="flex flex-col justify-center items-center gap-1">
		<h2 class="text-lg font-bold text-center">열심히 꿈을 해석 중이에요</h2>
		<h3 class="text-sm font-semibold text-gray-400">1분 내로 만들어집니다!</h3>
	</div>
</div>