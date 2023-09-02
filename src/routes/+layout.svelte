<script lang="ts">
	import Toast from '$lib/components/Toast.svelte';
	import '../app.css';
</script>

<div class="w-full sm:max-w-sm h-screen sm:mx-auto bg-white font-sans">
	<slot />
</div>

<Toast />