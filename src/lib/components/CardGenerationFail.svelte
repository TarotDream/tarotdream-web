<script lang="ts">
  import Icon from "$lib/components/Icon.svelte"
	import { PRIMARY } from '$lib/constants/colors';

	export let iconParentElementWidth: number;
</script>

<div class="flex flex-col gap-4">
	<Icon fill={PRIMARY} size={iconParentElementWidth * 0.7} icon="alert-triangle" />
	<h2 class="text-lg font-bold text-center">해석이 실패했어요.. 다시 시도해주세요!</h2>
</div>