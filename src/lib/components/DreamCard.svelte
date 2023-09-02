<script lang="ts">
	import type { dreamCard } from "$lib/apis/types";
	import { DREAM_MENU } from "$lib/constants/strings";
  import { destinationAsURI, navigateTo, numberToString, timestampToY4M2D2 } from "$lib/utils";


  export let dreamCardData : dreamCard;
  const { imageUrl, dreamTitle, created, dreamId } = dreamCardData;
</script>

<div class="flex flex-col w-full gap-1">
  {#if imageUrl === null}
    <div class="flex justify-center items-center w-full h-96 bg-gray-200 text-white font-bold">
      <p>{dreamTitle}</p>
    </div>
  {:else}
    <img src={imageUrl} alt={dreamTitle} class="w-full h-96 p-2 object-cover hover:object-contain rounded-xl bg-gray-200">
  {/if}
  <div>
    <h2 class="text-black font-semibold">{dreamTitle}</h2>
    <p class="text-gray-600 text-xs">{timestampToY4M2D2(created)}</p>
  </div>
</div>