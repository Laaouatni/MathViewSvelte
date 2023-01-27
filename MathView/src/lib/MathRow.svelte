<script>
  export let data;
  
  import MathColumn from "./MathColumn.svelte";
  import Number from "./Number.svelte";
</script>

<div
  class="flex gap-2 items-center p-3 rounded-xl hover:shadow-lg border w-max transition"
>
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
      <span>{data.operation}</span>
    {/if}
  {/each}
</div>
