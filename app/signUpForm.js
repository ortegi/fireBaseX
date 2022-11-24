
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth} from './firebase.js'
import {showMessage} from './showMessage.js'
const signUpForm = document.querySelector('#signUp-form')

signUpForm.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = signUpForm['signUp-email'].value
    const password = signUpForm['signUp-password'].value

    console.log(email, password)


    
   try{
    const userCredentials = await createUserWithEmailAndPassword( auth, email, password)    //funcion que necesita tres 
    console.log(userCredentials)

    //close modal register
    const signUpModal = document.querySelector('#signUpModal')
    const modal = bootstrap.Modal.getInstance(signUpModal)
    modal.hide()
    showMessage("Welcome " + userCredentials.user.email)

   

   }catch (error){
    console.log(error.message)
    console.log(error.code)
    if (error.code === 'auth/email-already-in-use'){
        showMessage('Email already in use', 'error')
    }
    else if(error.code === 'auth/invalid-email'){
        showMessage('Invalid email', 'error')
    }else if (error.code === 'auth/weak-password'){
        showMessage('Week password', 'error')
    }else if(error.code){
        showMessage(error.code, 'error')
    }
   }

})