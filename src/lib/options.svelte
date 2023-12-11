<script>
  import Select from "./components/select.svelte";
  let tone;
  let structure;
  let style;
  let voice;
  let audiencePurpose;

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

  const audiencePurposeOptions = [
    { text: "Educational/Instructional" },
    { text: "Entertainment" },
    { text: "Thought Leadership" },
  ];
</script>

<section id="options">
  <div class="grid-item">
    <h2>Rhetoric</h2>
  </div>

  <div class="grid-item">
    <Select
      options={toneOptions}
      display_func={(o) => o.text}
      label="Tone"
      bind:value={tone}
    />
  </div>

  <div class="grid-item">
    <Select
      options={structureOptions}
      display_func={(o) => o.text}
      label="Structure"
      bind:value={structure}
    />
  </div>

  <div class="grid-item">
    <Select
      options={styleOptions}
      display_func={(o) => o.text}
      label="Style"
      bind:value={style}
    />
  </div>

  <div class="grid-item">
    <Select
      options={voiceOptions}
      display_func={(o) => o.text}
      label="Voice"
      bind:value={voice}
    />
  </div>

  <div class="grid-item">
    <Select
      options={audiencePurposeOptions}
      display_func={(o) => o.text}
      label="Purpose"
      bind:value={audiencePurpose}
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
