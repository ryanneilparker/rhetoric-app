<script>
  export let options = [];
  export let display_func = (a) => a;
  export let label = "";
  export let index = null;
  export let value;

  $: {
    value = options[index];
  }
</script>

<select bind:value={index}>
  <option value={null} disabled selected hidden>{label}</option>
  {#each options as option, i}
    <option value={i}>{display_func(option)}</option>
  {/each}
</select>

<style>
  select {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 100%;
  }

  select:hover {
    border-color: #646cff;
  }

  select:focus,
  select:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
