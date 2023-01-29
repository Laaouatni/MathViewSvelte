<script>
  export let data;

  import MathCard from "./MathCard.svelte";
  import MathRow from "./MathRow.svelte";
  import Number from "./Number.svelte";
</script>

<MathCard>
  <div
    class="grid gap-2 items-center"
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
        <hr class="h-[2px] bg-black rounded-full border-none" />
      {/if}
    {/each}
  </div>
</MathCard>
