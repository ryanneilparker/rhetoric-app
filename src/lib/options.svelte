<script>
  import Select from "./components/select.svelte";

  const toneOptions = [
    { text: "Casual" },
    { text: "Formal" },
    { text: "Professional" },
  ];

  const structureOptions = [
    { text: "Listicle" },
    { text: "How-To/Guide" },
    { text: "Opinion/Editorial" },
  ];

  const styleOptions = [
    { text: "Conversational" },
    { text: "Informative" },
    { text: "Engaging" },
  ];

  const voiceOptions = [
    { text: "Authoritative" },
    { text: "Friendly" },
    { text: "Educational" },
  ];

  const purposeOptions = [
    { text: "Educational" },
    { text: "Instructional" },
    { text: "Entertainment" },
    { text: "Thought Leadership" },
  ];
</script>

<section id="options">
  <div class="grid-item">
    <h2>Rhetoric</h2>
  </div>

  <div class="grid-item">
    <Select options={toneOptions} display_func={(o) => o.text} label="Tone" />
  </div>

  <div class="grid-item">
    <Select
      options={structureOptions}
      display_func={(o) => o.text}
      label="Structure"
    />
  </div>

  <div class="grid-item">
    <Select options={styleOptions} display_func={(o) => o.text} label="Style" />
  </div>

  <div class="grid-item">
    <Select options={voiceOptions} display_func={(o) => o.text} label="Voice" />
  </div>

  <div class="grid-item">
    <Select
      options={purposeOptions}
      display_func={(o) => o.text}
      label="Purpose"
    />
  </div>
</section>

<style>
  #options {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 10px;
    border-bottom: 1px solid grey;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1em;
  }
</style>
