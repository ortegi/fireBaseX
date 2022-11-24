
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "./firebase.js"
import {showMessage} from './showMessage.js'

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async e  => {
    e.preventDefault()
    const email = signInForm['login-email'].value
    const password = signInForm['login-password'].value




    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password)  //envia las credenciales a firebase
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signInModal'))
        modal.hide()

        showMessage('Welcome ' + credentials.user.email)
        
    }catch (error){
        if(error.code === 'auth/wrong-password'){
            showMessage("wrong password",error)
        }else if (error.code === 'auth/user-not-found'){
            showMessage('user Not found', 'error')
        }else {
            showMessage(error.message, 'error')
        }

    }



     
})