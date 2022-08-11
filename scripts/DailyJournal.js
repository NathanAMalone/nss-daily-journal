import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"

export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>
            ${ JournalForm() }
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}