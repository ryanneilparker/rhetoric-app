<script>

</script>

<section id="options">
    <select id="tone" name="tone">
        <option disabled selected>Select Tone</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
        <option value="Professional">Professional</option>
    </select>

    <select id="structure" name="structure">
        <option disabled selected>Select Structure</option>
        <option value="Listicle">Listicle</option>
        <option value="How-To/Guide">How-To/Guide</option>
        <option value="Opinion/Editorial">Opinion/Editorial</option>
    </select>

    <select id="style" name="style">
        <option disabled selected>Select Style</option>
        <option value="Conversational">Conversational</option>
        <option value="Informative">Informative</option>
        <option value="Engaging">Engaging</option>
    </select>

    <select id="voice" name="voice">
        <option disabled selected>Select Voice</option>
        <option value="Authoritative">Authoritative</option>
        <option value="Friendly">Friendly</option>
        <option value="Educational">Educational</option>
    </select>

    <select id="purpose" name="purpose">
        <option disabled selected>Select Purpose</option>
        <option value="Educational">Educational</option>
        <option value="Instructional">Instructional</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Thought Leadership">Thought Leadership</option>
    </select>
</section>

<style>
    #options {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1rem;

        padding: 1rem;

        /* debug */
        border: 1px solid red;
    }
</style>