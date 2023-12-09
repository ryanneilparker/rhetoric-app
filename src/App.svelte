<script>
  import Options from "./lib/options.svelte";
  import Preview from "./lib/preview.svelte";
  import History from "./lib/history.svelte";
  import Prompter from "./lib/prompter.svelte";
</script>

<main>
  <section id="app">
    <div id="grid-item">
      <Options />
    </div>

    <div id="grid-item" class="display">
      <div id="grid-item">
        <Preview />
      </div>

      <div id="grid-item">
        <History />
      </div>
    </div>

    <div id="grid-item">
      <Prompter />
    </div>
  </section>
</main>

<style>
  #app {
    border: 1px solid grey;
    border-radius: 20px;
    height: 90vh;
    width: 80vw;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
  }

  .display {
    display: grid;
    grid-template-columns: 8fr 2fr;
  }
</style>
