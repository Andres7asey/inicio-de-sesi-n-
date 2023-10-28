import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"

import{ auth } from './firebase.js'

import{ showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth,email, password)
        console.log(userCredentials)

        //cierro de modal de signUp
        const signModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signModal)
        modal.hide()

        showMessage("welcome " + userCredentials.user.email) 

    } catch (error) {

        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'){
            showMessage("Email already in use")
        }else if (error.code === 'auth/invalid-email'){
            showMessage("Invalid Email")
        }else if(error.code ==='auth/weak-password'){
            showMessage("Password is too weak")
        }else {
            showMessage("somerthing went wrong")    
        }

    }

})
