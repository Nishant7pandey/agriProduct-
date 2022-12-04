import React,{useState,useContext} from 'react';
import {db} from "../../../configure/initialiseFirebase";
import {
  getDoc,doc
} from "firebase/firestore";
import "./styles.css";
import { useNavigate } from 'react-router';
import myContext from '../../../context';

const Login = () => {
	const[email,setEmail]=useState('');
	const[password,setPassword]=useState("");
	// const[status,setStatus]=useState("");
	const navigate=useNavigate();
	const auth =useContext(myContext);
	
	const login =async(e)=>{
		e.preventDefault();
    
      const userRef =  doc(db, "usersData", email);
      const dataRef = await getDoc(userRef);
      if(dataRef.exists() && dataRef.data().password===password ){
		// auth.status = true;
		auth.name = dataRef.data().name;
		localStorage.setItem('Local_storage_key',JSON.stringify(dataRef.data().name));

        // setLog(true);
		// setName(dataRef.data().name);
        navigate('/');

      }
      else{
       alert('Please! fill correct email and password') 
      }
	}
    return (
        <div className='loginPage'>
            <form className="login-form" id="login-form" onSubmit={login}>
			<h1 className="display-4 login-title">Login</h1>
			
			<div className="mb-3">
				<label for="login-email" className="form-label">Email address</label>
				<input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label for="login-password" className="form-label">Password</label>
				<input type="password" className="form-control" id="login-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
			</div>
			<div className="button-wrapper">
				<button type="submit" className="btn btn-dark" >Log In</button>
			</div>
		</form>
	</div>

        
    );
}

export default Login;
