import { useState,useEffect } from "react";
import {auth} from '../../firebaseConnection';
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function Private ({children}) {

    const [loading,setLoading] = useState(true);
    const [singed,setSigned] = useState(false);

    useEffect(()=> {
        async function checkLogin () {
            const unsub = onAuthStateChanged(auth, (user)=> {

                if (user) {
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    }
                    
                    localStorage.setItem("detalheusuario", JSON.stringify(userData))

                    setLoading(false)
                    setSigned(true)
                } 
                else{
                    setLoading(false);
                    setSigned(false);
                    
                }
            })

        }
        checkLogin();


    },[])

    if(loading) {
        return(<div>

        </div>);
    }

    if(!singed) {
        return <Navigate to="/"/>

    }
    
   
    return children;

}