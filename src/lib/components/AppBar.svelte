<script lang="ts">
  import Icon from "$lib/components/Icon.svelte"
  import { navigateTo } from "$lib/utils";
  import { moveBack } from "$lib/constants/strings"
  
  export let hasBack : boolean;
  export let title : string;

  const navigateController = () => {
    return (e : Event) => navigateTo(moveBack);
  }
</script>

<div class="fixed top-0 left-0 right-0 flex justify-between items-center w-full sm:max-w-sm h-16 px-6 mx-auto border-b-4 border-gray-200 bg-white">
  {#if hasBack}
    <button class="w-fit h-fit z-10" on:click={navigateController()}>
      <Icon icon="chevron-left" size={36}/>
    </button>
  {/if}
  <h1 class="absolute left-0 right-0 w-full mx-auto sm:w-64 text-center text-xl font-bold truncate">{title}</h1>
</div>

<div class="w-full h-16" /> 
