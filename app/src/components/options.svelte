<script>

</script>

<section id="options">
    <select id="tone" name="tone">
        <option disabled selected>Select Tone</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
        <option value="Professional">Professional</option>
        <option value="Friendly">Friendly</option>
        <option value="Authoritative">Authoritative</option>
        <option value="Informative">Informative</option>
        <option value="Humorous">Humorous</option>
        <option value="Serious">Serious</option>
    </select>

    <select id="structure" name="structure">
        <option disabled selected>Select Structure</option>
        <option value="Listicle">Listicle</option>
        <option value="How-To/Guide">How-To/Guide</option>
        <option value="Opinion/Editorial">Opinion/Editorial</option>
        <option value="Chronological">Chronological</option>
        <option value="Problem-Solution">Problem-Solution</option>
        <option value="Comparison-Contrast">Comparison and Contrast</option>
        <option value="Cause-Effect">Cause and Effect</option>
        <option value="Persuasive">Persuasive</option>
    </select>

    <select id="style" name="style">
        <option disabled selected>Select Style</option>
        <option value="Conversational">Conversational</option>
        <option value="Informative">Informative</option>
        <option value="Engaging">Engaging</option>
        <option value="Formal">Formal</option>
        <option value="Informal">Informal</option>
        <option value="Creative">Creative</option>
        <option value="Poetic">Poetic</option>
    </select>
    
    <select id="voice" name="voice">
        <option disabled selected>Select Voice</option>
        <option value="First Person">First Person</option>
        <option value="Second Person">Second Person</option>
        <option value="Third Person">Third Person</option>
        <option value="Omniscient">Omniscient</option>
    </select>

    <select id="purpose" name="purpose">
        <option disabled selected>Select Purpose</option>
        <option value="Educational">Educational</option>
        <option value="Instructional">Instructional</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Thought Leadership">Thought Leadership</option>
        <option value="Informational">Informational</option>
        <option value="persuasive">Persuasive</option>
        <option value="Inspirational">Inspirational</option>
        <option value="To Connect">To Connect</option>
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