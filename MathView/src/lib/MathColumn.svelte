<script>
  export let data;
  import MathRow from "./MathRow.svelte";
  import Number from "./Number.svelte";
</script>

<div
  class="grid gap-4 items-center p-3 rounded-xl hover:shadow-lg border w-max transition"
>
  {#each data.values as item, index}
    {#if typeof item === "object"}
      {#if item.operation === "/"}
        <svelte:self data={item} />
      {:else}
        <MathRow data={item} />
      {/if}
    {:else}
      <Number value={item} />
    {/if}

    {#if index !== data.values.length - 1}
      <hr class="h-px bg-black rounded-full border-none" />
    {/if}
  {/each}
</div>
