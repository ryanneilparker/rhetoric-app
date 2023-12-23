<script>
    import Options from "../../components/options.svelte";
    import Prompter from "../../components/prompter.svelte";
    import Preview from "../../components/preview.svelte";

    let generatedPayload = {};

    function handlePayload(event) {
        console.log('Handling payload...')

        generatedPayload = event.detail;
    }
</script>

<section id="editor">
    <Options />
    <Prompter on:payloadGenerated={handlePayload}/>
    <Preview />
</section>

<style>
    #editor {
        display: grid;
        grid-template-rows: 1fr 1fr 8fr;
    }
</style>