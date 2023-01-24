<script>
  export let value;
  import MathColumn from "./MathColumn.svelte";
  import MathRow from "./MathRow.svelte";
</script>
<!-- 
{#if value.operation === "/"}
  <MathColumn data={value} />
{:else}
  <MathRow data={value} />
{/if} -->
<MathRow data={value} />

