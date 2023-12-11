<script>
  import Select from "./components/select.svelte";

  let customInstructions = "";

  let selectedTone = null;
  let selectedStructure = null;
  let selectedStyle = null;
  let selectedVoice = null;
  let selectedPurpose = null;

  async function generateBlog() {
    const selectedOptions = {
      tone: selectedTone,
      structure: selectedStructure,
      style: selectedStyle,
      voice: selectedVoice,
      purpose: selectedPurpose,
    };

    const data = {
      selectedOptions,
      customInstructions,
    };

    try {
      console.log(data);
      const response = await fetch(
        "http://localhost:8000/api/v1/generate-blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Blog generated:", result);
      } else {
        console.error("Failed to generate blog:", response.statusText);
      }
    } catch (error) {
      console.error("Error generating blog:", error);
    }
  }
</script>

<section id="prompter">
  <input
    bind:value={customInstructions}
    type="text"
    placeholder="Add custom instructions here..."
  />
  <button on:click={generateBlog}>Generate</button>
</section>

<style>
  #prompter {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    height: 100%;
    padding: 0 1em 0 1em;
    border-top: 1px solid grey;
  }

  input {
    height: 2em;
    padding: 0.5em 1em 0.5em 1em;
    margin: 0.5em;
    border-radius: 1em;
    border: none;
    outline: none;
  }

  button {
    margin-right: 0.5em;
  }
</style>
