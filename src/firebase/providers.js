import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
         const result = await signInWithPopup(FirebaseAuth, googleProvider)

         const {displayName, email, photoURL, uid} = result.user;

         return {
            ok: true,
            displayName,
            email,
            photoURL, 
            uid,
         }
    } catch (error) {

        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage,
            

        }
    }
}

export const registerWithEmailPassword = async({email, password, displayName}) => {
    try{
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName})
        
        return{
            ok: true,
            uid, photoURL, displayName 
            
        }
    }
    catch(error){
        
        return{
            ok: false,
            errorMessage: 'user already exists'
        }
    }

}



export const signInWithEmailPassword = async({email, password}) => {
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)

        const {uid, photoURL, displayName} = resp.user;
        
        return{
            ok: true,
            uid, photoURL, displayName
        }
        
    }
    catch(error){
        return{
            ok: false,
            errorMessage: 'username does not exist'
        }
    }
}

export const firebaseLogout = async() => {
    return await FirebaseAuth.signOut();
}