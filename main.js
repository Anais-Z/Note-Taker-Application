//accessing the text input
const note = document.querySelector('input[name=theNote]')

//accessing the submit button
const submit = document.querySelector('#submit')

//accessing the note section div element
const noteSection = document.querySelector('.view-notes')

//button's action when it's clicked
submit.addEventListener('click', () =>{
    //creating a promise to check if value given is not empty
    let promise = new Promise((resolve, reject) => {

        if(note.value != ''){
            resolve(note.value)
        }else{
            resolve('Enter the field')
        }

    })

    //calling the promise
    promise.then((note) => {
        //calling the functions to create and add note
        let officialNote = createNote(note)

        addNote(officialNote)

    }).catch((errorMessage) => {

    })
} )

//creating the note

const createNote = (note) =>{
    //creating the div
    const divNote = document.createElement('div')
    //creating a paragraph
    const theNote = document.createElement('p')
    //note's value will become the text for paragraph
    theNote.innerText = note

    //creating a delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'DELETE'

    //creating the view button
    const viewButton = document.createElement('button')
    viewButton.innerText = 'VIEW'

    //appending paragraph into div
    divNote.append(theNote)
    divNote.append(deleteButton)
    divNote.append(viewButton)

    //creating a blue border for the div
    divNote.style.border = "2px solid blue"

    //returning the div
    return divNote
}

//appending the new note to document
const addNote = (note) => {
    noteSection.append(note)
}
