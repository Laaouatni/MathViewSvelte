<script>
  export let value;

  import MathColumn from "./MathColumn.svelte";
  import mathToJson from "../scripts/mathToJson";
  import MathRow from "./MathRow.svelte";
  
  $: data = mathToJson(value);
</script>

{#if value.operation === "/"}
  <MathColumn {data} />
  {:else}
  <MathRow {data} />
{/if}
