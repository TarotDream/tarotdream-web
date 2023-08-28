<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { goto } from '$app/navigation';

	onMount(() => {
		goto('/splash');
	});
</script>

<div class="w-full sm:max-w-sm h-screen sm:mx-auto overflow-y-auto bg-white font-sans">
	<slot />
</div>
