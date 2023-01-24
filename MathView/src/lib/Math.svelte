<script>
  import mathToJson from "../scripts/mathToJson";
  import MathRow from "./MathRow.svelte";

  let result = mathToJson("1+2+3+4");
</script>

<MathRow data={result}/>
