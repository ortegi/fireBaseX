import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getDocs, collection  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import {auth, db} from  './app/firebase.js'
import './app/signUpForm.js'
import './app/logout.js'
import {loginCheck} from './app/loginCheck.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import { setupPost } from './app/postList.js'


onAuthStateChanged(auth, async (user) =>{   //mira a ver si estamos dentro o fuera de la applicacion 

    if (user){
        const querySnapShot =  await getDocs(collection(db,'posts'));
        setupPost(querySnapShot.docs)


    } else{
        setupPost([])

    }
    loginCheck(user)
   
})