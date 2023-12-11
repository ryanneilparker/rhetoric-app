<script>
  export let options = [];
  export let display_func = (o) => o.text;
  export let label = "";
  export let selectedValue = null;

  function handleChange(event) {
    const selectedIndex = event.target.value;
    selectedValue = selectedIndex !== null ? parseInt(selectedIndex, 10) : null;
  }
</script>

<select bind:value={selectedValue} on:change={handleChange}>
  <option value={null} disabled hidden>{label}</option>
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
