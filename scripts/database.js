/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// const database = {
//     "entries": [
//         {
//             id: 1,
//             date: "07/24/2025",
//             concept: "HTML & CSS",
//             entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//             mood: "Fine"
//         },
//         {
//             id: 2,
//             date: "07/31/2025",
//             concept: "Functions",
//             entry: "We talked about iteration.",
//             mood: "Sad"
//         },
//         {
//             id: 3,
//             date: "08/02/2025",
//             concept: "HTML & CSS",
//             entry: "We talked about HTML tags.",
//             mood: "Ok"
//         },
//         {
//             id: 4,
//             date: "08/04/2025",
//             concept: "Functions",
//             entry: "We talked about exporting and importing functions.",
//             mood: "Happy"
//         }
//     ]
// }


export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(entries => {})
}

const database = {
    entries: []
}

// /*
//     You export a function that provides a version of the
//     raw data in the format that you want
// */
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}
