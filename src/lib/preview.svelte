<script>
  import { marked } from "marked";

  export let markdownContent =
    "# Test\n## Lorem Ipsum \n   Lorem ipsum dolor \nsit amet consectetur adipisicing elit. \n## Nam, perferendis culpa! \nId numquam ex alias suscipit sed quo at enim a perspiciatis\n ## nostrum! Atque dolore, \n ##debitis officia veniam eveniet error\n## d \n?\njjjjjjjjjjjjjjjjjjjjjjjjjjjjj\n## jjjjjjjjjj\n ## jjjjjjjjjjjjjj\n ## jjjjjjjjjjj\nnsit amet consectetur adipisicing elit. \n## Nam, perferendis culpa! \nId numquam ex alias suscipit sed quo at enim a perspiciatis\n ## nostrum! Atque dolore, \n ##debitis officia veniam eveniet error\n## d \n?\njjjjjjjjjjjjjjjjjjjjjjjjjjjjj\n## jjjjjjjjjj\n ## jjjjjjjjjjjjjj\n ## jjjjjjjjjjj\n ";
</script>

<section id="preview">
  <div class="markdown">
    {@html marked(markdownContent)}
  </div>
</section>

<style>
  #preview {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }

  .markdown {
    border: 1px solid grey;
    height: 700px;
    overflow-y: scroll;
    padding: 0rem 4rem 0rem 4rem;
  }
</style>
