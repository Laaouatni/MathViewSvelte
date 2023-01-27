<script>
  export let value;

  import MathColumn from "./MathColumn.svelte";
  import MathRow from "./MathRow.svelte";
  import mathToJson from "./scripts/mathToJson.js";

  $: data = mathToJson(value);
</script>

{#if data.operation === "/"}
  <MathColumn {data} />
{:else}
  <MathRow {data} />
{/if}
