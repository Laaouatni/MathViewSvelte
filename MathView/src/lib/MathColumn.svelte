<script>
  import MathRow from "./MathRow.svelte";
  export let data;
  import Number from "./Number.svelte";
  console.log(data);
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
      <hr />
    {/if}
  {/each}
</div>
