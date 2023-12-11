<script>
  import Preview from "./preview.svelte";
  import History from "./history.svelte";
</script>

<section id="display">
  <div id="grid-item">
    <Preview />
  </div>

  <div id="grid-item">
    <History />
  </div>
</section>

<style>
  #display {
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr;
  }
</style>
