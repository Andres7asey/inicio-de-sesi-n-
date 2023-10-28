import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import{ auth } from './app/firebase.js'
import {loginCheck} from './app/loginCheck.js'

import './app/singupform.js';
import './app/signinform.js'
import './app/logauth.js'



onAuthStateChanged(auth, async (user) => {  
    if(user){
        loginCheck(user)
    } else {
        loginCheck(user)
    }
})



