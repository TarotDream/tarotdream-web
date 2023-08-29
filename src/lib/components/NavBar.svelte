<script lang="ts">
	import { DREAM_MENU, HOME_MENU, PROFILE_MENU } from '$lib/constants/strings';
	import { destinationAsURI } from '$lib/utils';
	import { onDestroy } from 'svelte';

	import Draw from '$lib/assets/Draw.svelte';
	import Home from '$lib/assets/Home.svelte';
	import Profile from '$lib/assets/Profile.svelte';

	export let currentClickedMenu = 'default';

	$: isFocusedMenu = (menu: string): string =>
		menu === currentClickedMenu ? 'text-control' : 'text-gray-400';

	onDestroy(() => {
		currentClickedMenu = 'default';
	});
</script>

<div
	class="absolute bottom-0 flex justify-between items-center w-full h-16 px-12 drop-shadow bg-white"
>
	<a href={destinationAsURI([DREAM_MENU])} class="text-control {isFocusedMenu(DREAM_MENU)}"
		><Draw /></a
	>
	<a href={destinationAsURI([HOME_MENU])} class="text-control {isFocusedMenu(HOME_MENU)}"
		><Home /></a
	>
	<a href={destinationAsURI([PROFILE_MENU])} class="text-control {isFocusedMenu(PROFILE_MENU)}"
		><Profile /></a
	>
</div>
