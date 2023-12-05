<script>
  let blogContent = "Oops, looks like there's nothing to see here...";

  async function handleSubmit(event) {
    const formData = new FormData(event.target);
    const prompt = formData.get("prompt");

    try {
      const response = await fetch("http://localhost:8000/generate_blog", {
        method: "POST",
        body: prompt,
      });

      if (response.ok) {
        const data = await response.json();
        blogContent = data.blog_content; // Update blogContent variable with new content
      } else {
        console.error("Failed to generate blog content");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<main>
  <section id="app">
    <div id="display">
      <p>{blogContent}</p>
    </div>
    <div id="prompter">
      <form on:submit|preventDefault={handleSubmit}>
        <input type="text" name="prompt" id="prompt" />
        <button type="submit">Submit</button>
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
