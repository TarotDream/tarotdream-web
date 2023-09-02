<script lang="ts">
	import { toastMessage } from '$lib/stores';
	import { fade } from 'svelte/transition';

	$: {
		if ($toastMessage) {
			setTimeout(() => {
				$toastMessage = null;
			}, 2000);
		}
	}
</script>

{#if $toastMessage}
	<button
		on:click={() => {
			$toastMessage = null;
		}}
		transition:fade
		style="z-index: 1000;"
		class="fixed left-0 right-0 bottom-8 mx-8 flex items-center justify-center rounded-3xl bg-black p-3 text-center text-white opacity-80 md:mx-auto md:max-w-sm"
	>
		{$toastMessage}
	</button>
{/if}
