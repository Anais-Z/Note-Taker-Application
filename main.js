//accessing the text input
const note = document.querySelector('input[name=theNote]')

//accessing the submit button
const submit = document.querySelector('.submit')

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

    }).catch((errorMessage) => {

    })
} )



