<script lang="ts">
	import { toastMessage } from '$lib/stores';
	import { fade } from 'svelte/transition';

	$: {
		if ($toastMessage.length > 0) {
			setTimeout(() => {
				$toastMessage = '';
			}, 2000);
		}
	}
</script>

{#if $toastMessage.length > 0}
	<button
		on:click={() => {
			$toastMessage = '';
		}}
		transition:fade
		style="z-index: 1000;"
		class="fixed top-20 left-0 right-0 mx-auto w-fit p-2 text-xs text-white font-semibold rounded-xl bg-secondary opacity-80"
	>
		{$toastMessage}
	</button>
{/if}
