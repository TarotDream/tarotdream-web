<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import { PROFILE_MENU } from '$lib/constants/strings';
</script>

<div class="page-wrapper flex flex-col justify-center items-center px-4">
	<h1 class="font-bold">준비중입니다!</h1>
	<NavBar currentClickedMenu={PROFILE_MENU} />
</div>
