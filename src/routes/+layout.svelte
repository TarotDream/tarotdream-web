<script lang="ts">
	import '../app.css';
</script>

<div class="w-full sm:max-w-sm h-screen sm:mx-auto bg-white font-sans">
	<slot />
</div>

<!-- Dealing with Mixed Content Issue : Need To Be Improved -->
<svelte:head>
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
</svelte:head>