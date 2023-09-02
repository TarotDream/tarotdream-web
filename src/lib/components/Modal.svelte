<script lang="ts">
  import { showModal, modalName } from "$lib/stores";
  import { defaultModal, dreamRegenerateModal } from "$lib/constants/strings";
  import DefaultModal from "$lib/components/modal/DefaultModal.svelte";
  import DreamRegenerationModal from "./modal/DreamRegenerationModal.svelte";

  const modalMapper = new Map( [
    [defaultModal, DefaultModal],
    [dreamRegenerateModal ,DreamRegenerationModal]
  ]);
</script>

{#if $showModal}
  <div class="fixed top-0 left-0 right-0 w-full h-full bg-gray-400 opacity-80" />
  <div class="fixed top-0 left-0 right-0 flex justify-center items-center w-full h-full">
    <svelte:component this={modalMapper.get($modalName)} />
  </div>
{/if}