import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import{auth} from './firebase.js'
import{ showMessage } from './showMessage.js'

const singinform = document.querySelector('#login-form')

singinform.addEventListener('submit' , async e =>{
    e.preventDefault()

    const email = singinform['login-email'].value
    const password = singinform['login-password'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)

    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
    modal.hide()

    showMessage('Welcome ' + credentials.user.email)
        
    } catch (error) {

        console.log(error.code)

        if(error.code === "auth/wrong-password"){
            showMessage('Wrong password', 'error')
        }else if (error.code === "auth/user-not-found"){
            showMessage('User not found' , 'error')
        }else{
            showMessage(error.code, ' error')
        }

    }

})