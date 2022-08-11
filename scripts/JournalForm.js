export const JournalForm = () => {
    return `
        <form class="entryForm">
            <fieldset class="fieldset1">
                <label for="entryDate">Date</label>
                <input type="date" name="entryDate" class="entryForm_date">
            </fieldset>
            <fieldset class="fieldset2">
                <label for="entryConcepts">Concepts covered</label>
                <input type="textarea" name="entryConcepts" class="entryForm_concepts">                
            </fieldset>
            <fieldset class="fieldset3">
                <label for="entryJournal">Journal Entry</label>
                <textarea name="entryJournal" class="entryForm_journal"></textarea>
            </fieldset>
            <fieldset class="fieldset4">
                <label for="entryMood">Mood for the day</label>
                <select name="entryMood" class="entryForm_mood">
                    <option value="happy">Happy</option>
                    <option value="fine">Fine</option>
                    <option value="Ok">Ok</option>
                    <option value="sad">Sad</option>
                </select>
            </fieldset>
            <button type="button" name="entryRecord" class="entryForm_Record">Record Journal Entry</button>
        </form>
    `
}