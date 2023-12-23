<script>
    import Options from "../../components/options.svelte";
    import Prompter from "../../components/prompter.svelte";
    import Preview from "../../components/preview.svelte";
</script>

<section id="editor">

    <Options />
    <Prompter />
    <Preview />
</section>

<style>
    #editor {
        display: grid;
        grid-template-rows: 1fr 1fr 8fr;
    }
</style>