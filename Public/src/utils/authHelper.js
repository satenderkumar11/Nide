import {
    signInWithPopup,
    signOut
} from "firebase/auth"

import {auth , googleProvider} from './firebase'

export const googleSignIn = async () => {
    try{
        await signInWithPopup(auth, googleProvider)
    }
    catch(error){
        console.log(error)
    }
}


export const logOut = async () => {
    try{
        await signOut(auth)
    }
    catch(error){
        console.log(error)
    }
}