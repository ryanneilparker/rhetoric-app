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
    display: grid;
    align-items: top;
    justify-items: center;
    height: 90vh;
    width: 100vw;
    margin: 2rem 0 0 0;
    padding: 0;
  }

  #container {
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    height: 80%;
    width: 80%;
    margin: 0;
    padding: 0;
    border: 1px solid grey;
    border-radius: 20px;
  }
</style>
