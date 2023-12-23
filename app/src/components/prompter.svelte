<script>
    import {createEventDispatcher} from 'svelte';

    const dispatcher = createEventDispatcher();

    function generatePayload() {
        console.log('Generating payload...');

        const tone = document.getElementById('tone').value;
        const structure = document.getElementById('structure').value;
        const style = document.getElementById('style').value;
        const voice = document.getElementById('voice').value;
        const purpose = document.getElementById('purpose').value;
        const promptText = document.getElementById('promptText').value;

        const payload = {
            tone,
            structure,
            style,
            voice,
            purpose,
            promptText,
        };

        console.log(payload);

        console.log('Dispatching payload generated event...')

        dispatcher('payloadGenerated', payload);
    }
</script>

<section id="prompter">
    <input type="text" id="promptText" placeholder="Enter prompt text" />
    <button on:click={generatePayload}>Generate</button>
</section>

<style>
    #prompter {
        display: grid;
        grid-template-columns: 8fr 2fr;

        margin-top: 1rem;
        padding: 1rem;

        /* debug */
        border: 1px solid blue;
    }
</style>