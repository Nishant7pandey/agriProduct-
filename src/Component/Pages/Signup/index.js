import React,{useState} from 'react';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../configure/initialiseFirebase";
import { useNavigate } from 'react-router';

import "./styles.css"

const Signup = () => {
    const[name,setName] = useState("");
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const[checkbox,setCheckbox]=useState(false);
    const[confirmPassword,setConfirmPassword]=useState("");
    const navigate = useNavigate();
    const signUp =async(e)=>{
        e.preventDefault();
        if(password===confirmPassword){
            // alert(true);
            try {
                const docRef = await setDoc(doc(db, "usersData", email), {
                 name: name,
                 email: email,
                 password: password
                });
          
                navigate("/");
              } catch (e) {
                alert("Error occored");
                console.error("Error adding document: ", e);
              }
          
        }
        else{
            alert("Password is not equal to confirmPassword, Please make same");
        }
        console.log(name,email,password,checkbox,confirmPassword);
    }
    return (
        <div className='signupPage'>

        <form className="row g-3 registration-form" id="signup-form" onSubmit={signUp}>
        <h1 className="col-md-12 display-4 sign-up-title">Sign Up</h1>
        
        <div className="col-md-6">
            <label for="signup-Full-name" className="form-label">Full name</label>
            <input type="text" className="form-control" id="signup-Full-name" value={name} onChange={(e)=>setName(e.target.value)}  required autoComplete="off"/>
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>
        
        <div className="col-md-6">
            <label for="signup-email" className="form-label">Email</label>
            <div className="input-group has-validation">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                </div>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="signup-email" aria-describedby="inputGroupPrepend"
                    required autoComplete="off"/>
                
            </div>
        </div>
        
        <div className="col-md-6">
            <label for="signup-password" className="form-label">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="signup-password" required autoComplete="off"/>
            
        </div>
        <div className="col-md-6">
            <label for="signup-confirm-password" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="signup-confirm-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required autoComplete="off"/>
            
        </div>
        <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={checkbox} onChange={()=>setCheckbox(!checkbox)} id="invalidCheck" required />
                <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                </label>
                
            </div>
        </div>
        <div className="col-12 button-wrapper">
            <button className="btn btn-dark" type="submit" >Sign Up</button>
        </div>
    </form>
        </div>
    );
}

export default Signup;
