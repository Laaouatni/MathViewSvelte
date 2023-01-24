<script>
  export let data;
  import Number from "./Number.svelte";
</script>

<div>
  {#each data.values as item}
    <Number value={item} />
  {/each}
</div>
