<script>
  import Options from "./lib/options.svelte";
  import Display from "./lib/display.svelte";
  import Prompter from "./lib/prompter.svelte";
</script>

<main>
  <section id="container">
    <div id="grid-item">
      <Options />
    </div>

    <div id="grid-item">
      <Display />
    </div>

    <div id="grid-item">
      <Prompter />
    </div>
  </section>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }

  #container {
    border: 1px solid grey;
    border-radius: 20px;
    height: 90vh;
    width: 80vw;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
  }
</style>
