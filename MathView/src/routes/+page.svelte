<script>
  import mathToJson from "../scripts/mathToJson";
  import Math from "../lib/Math.svelte";

  let result = mathToJson("1/2");
  console.log(result);
</script>

<div class="overflow-auto p-4">
  <Math value={result} />
</div>
