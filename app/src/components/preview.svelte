<script>
  let htmlContent = `
  <h1>Heading 1</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam unde libero optio quis quasi eveniet culpa molestiae, expedita corporis laudantium nulla quisquam corrupti doloremque repellendus maiores eos, ipsa reprehenderit?</p>
  <h2>Heading 2</h2>
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
  <h3>Heading 3</h3>
  <ol>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ol>
  `
</script>

<section id="preview">
  <div class="content">
    {@html htmlContent}
  </div>
</section>
  
  <style>
    #preview {
      display: grid;

      margin-top: 1rem;
      padding: 2rem 4rem 2rem 4rem;

      background-color: grey;

      /* debug */
      border: 1px solid green;
    }

    .content {
      padding: 1rem;
      background-color: white;
    }
  </style>
