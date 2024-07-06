import { firebaseLogout, registerWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from '../../../firebase/providers'
import {checkingCredentials, login, logout} from './authSlice'

export const checkingAuthenticaion = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWithGoogle();


        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))

    }
} 

export const startEmailPasswordRegister = ({email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
        const {ok, uid, photoURL, errorMessage} =  await registerWithEmailPassword({email, password, displayName})



        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({
            email,
            displayName,
            uid,
            photoURL,
            errorMessage

        }))
    }
}

export const startEmailPasswordLogin = ({email, password}) => {
    return async(dispatch) =>{
        dispatch(checkingCredentials());

        const {ok, uid, displayName, photoURL, errorMessage} = await(signInWithEmailPassword({email, password}));
        
        if(!ok) return dispatch(logout({errorMessage}));
        
        dispatch(login({
            ok,
            uid,
            displayName,
            photoURL,
            email
        }))
    }
}


export const startFirebaseLogout = () => {
    return async(dispatch) => {
        await firebaseLogout();
        dispatch(logout());
    }
}