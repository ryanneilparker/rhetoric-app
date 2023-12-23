<script>
  import { onMount } from 'svelte';
  export let generatedContent = "";

  onMount(() => {
    generatedContent = "<h1>Let's make magic happen!</h1>";
  })
</script>

<section id="preview">
  <div class="content">
    {@html generatedContent}
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
