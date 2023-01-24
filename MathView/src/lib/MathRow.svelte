<script>
  export let data;
  import Number from "./Number.svelte";
</script>

<div class="flex gap-2 items-center p-4 rounded-2xl hover:scale-95 hover:shadow-lg hover:border transition">
  {#each data.values as item, index}
    <Number value={item} />
    {#if index !== data.values.length - 1}
      <span>{data.operation}</span>
    {/if}
  {/each}
</div>
