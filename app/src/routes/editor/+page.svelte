<script>
    import Options from "../../components/options.svelte";
    import Prompter from "../../components/prompter.svelte";
    import Preview from "../../components/preview.svelte";
    import { sendPayloadToAPI } from "$lib/generate.js";

    let generatedPayload = {};
    let generatedContent = '';

    async function handlePayload(event) {
        console.log('Handling payload...')

        generatedPayload = event.detail;
        const response = await sendPayloadToAPI(generatedPayload);
        generatedContent = response.generatedContent;
    }
</script>

<section id="editor">
    <Options />
    <Prompter on:payloadGenerated={handlePayload}/>
    <Preview {generatedContent} />
</section>

<style>
    #editor {
        display: grid;
        grid-template-rows: 1fr 1fr 8fr;
    }
</style>