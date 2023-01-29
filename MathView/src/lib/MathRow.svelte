<script>
  export let data;

  import MathCard from "./MathCard.svelte";
  import MathColumn from "./MathColumn.svelte";
  import Number from "./Number.svelte";
  import Operation from "./Operation.svelte";
</script>

<MathCard>
  <div class="flex gap-2 items-center">
    {#each data.values as item, index}
      {#if typeof item === "object"}
        {#if item.operation === "/"}
          <MathColumn data={item} />
        {:else}
          <svelte:self data={item} />
        {/if}
      {:else}
        <Number value={item} />
      {/if}

      {#if index !== data.values.length - 1}
        <Operation value={data.operation} />
      {/if}
    {/each}
  </div>
</MathCard>
