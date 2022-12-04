import { findByLabelText } from '@testing-library/react';
import React,{useState,useContext,useEffect} from 'react';
import myContext from "../../../context"
import "./styles.css"
const ItsLogin = ({name,setRequest}) => {
    // const[request,setRequest]=useState(false)
    const auth = useContext(myContext);
    const logout =(e)=>{
        
        e.preventDefault();
        // auth.status=false;
        localStorage.removeItem("Local_storage_key");
        setRequest(false)
    }
   
    return (
        <div className='LoginPage'>
           <div>Welcome {name}</div>
           <div className='freeShip'>free shipping over these thing at 999</div>
        <button className='btnStyle' onClick={logout}>LogOut</button>
        </div>
        
    );
}

export default ItsLogin;
