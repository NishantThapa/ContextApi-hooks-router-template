import React,{useState} from  'react'
import {LocaleProvider} from './ContextApi'
export function ContextProvider({ children }) {
 const [loginCredits, setloginCredits] = useState()
 const [loginState, setloginState] = useState(false);
 const onChange=(e)=>{
    setloginCredits({...loginCredits,[e.target.name]:e.target.value})
 }
 const LoginCheck =()=>{
    setloginState(true)
 }

    const defaultContext = {
        loginCredits,
        setloginCredits,
        onChange,
        LoginCheck,
        loginState
     }

    
    
    return (
         <LocaleProvider value={defaultContext}>{ children }</LocaleProvider>
    )
}
