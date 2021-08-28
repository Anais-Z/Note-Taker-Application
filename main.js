//accessing the text input
const note = document.querySelector('input[name=theNote]')

//accessing the submit button
const submit = document.querySelector('#submit')

//accessing the note section div element
const noteSection = document.querySelector('.view-notes')

//accessing the document body
const body = document.body

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



    //creating the view button
    const viewButton = document.createElement('button')
    viewButton.innerText = 'VIEW'

    //appending paragraph into div
    divNote.append(theNote)
    divNote.append(viewButton)

    //creating a blue border for the div
    divNote.style.border = "2px solid blue"

    viewNote(divNote)

    //returning the div
    return divNote
}

//appending the new note to document
const addNote = (note) => {
    noteSection.append(note)
}

const viewNote = (div) =>{

    let viewsButton = div.querySelector('button')

    let divParagraph = div.querySelector('p')
    
        viewsButton.addEventListener('click', () => {
            theModal(divParagraph.innerText)
            console.log('ww')
        })
    

}

const theModal = (noteText) => {
    //creating the main div for the modal
    const modal = document.createElement('div')
    modal.setAttribute('style', 'position: fixed; top: 0; left: 0; height: 100%; width: 100%; background-color:  rgba(0,0,0,.5); display: flex; justify-content: center; align-items: center;')
    
    //creating a div to place the text of the note
    const modalWindow = document.createElement('div')
    modalWindow.innerText = noteText
    modalWindow.setAttribute('style', 'position: relative; background-color: white; padding: 4em 2em;')

    modal.append(modalWindow)
    body.append(modal)
}

