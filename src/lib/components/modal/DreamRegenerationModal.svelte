<script lang="ts">
	import { PRIMARY } from "$lib/constants/colors";
  import { SyncLoader } from "svelte-loading-spinners";
</script>


<div class="flex flex-col justify-center items-center gap-1 p-4 rounded-xl bg-white">
  <SyncLoader color={PRIMARY}/>
  <h2 class="text-xl text-primary font-bold">카드를 다시 그리고 있어요!</h2>
  <p class="text-xs">30초 내로 만들어집니다.</p>
</div>