<script>
  // potentially put mvp api calls here...
</script>

<main>
  <section id="app">
    <div id="display">
      <p>Renedered blog content goes here !!!</p>
    </div>
    <div id="prompt">
      <form action="">
        <input type="text" name="text" id="text" />
        <input type="submit" name="submit" id="submit" />
      </form>
    </div>
  </section>
</main>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #display {
    height: 500px;
    width: 500px;
    border: solid 1px white;
    border-radius: 20px;
    margin-bottom: 2rem;
  }

  #prompt {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
