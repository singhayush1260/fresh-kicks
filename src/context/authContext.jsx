import { createContext, useEffect, useReducer } from "react";


const AuthContext=createContext();

const authReducer=(state, action)=>{
 switch(action.type){
    case 'LOGIN': return {user:action.payload}
    case 'LOGOUT': localStorage.removeItem("USER");  return {user:null}
    default : return state
} 
}

const AuthContextProvider=({children})=>{

useEffect(()=>{
  const user=JSON.parse(localStorage.getItem('USER'));
    if(user){
         dispatch({type:'LOGIN',payload:user}) 
      }
    },[])

    const initialValue={user:null}
    
    const[authData, dispatch]=useReducer(authReducer, initialValue)

    return(
        <AuthContext.Provider value={{authData, dispatch}}>
              {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthContextProvider}