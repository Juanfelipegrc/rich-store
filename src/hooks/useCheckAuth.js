import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/slices/auth/authSlice";



export const useCheckAuth = () => {
  
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async(user) => {
        
        if(!user){
          return  dispatch(logout());
        } 


        const {uid, displayName, photoURL, email} = user;


        dispatch(login({
            uid,
            displayName,
            photoURL,
            email
        }))
      })
    }, [])

    return status
    
}
