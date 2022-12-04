import React,{useState,useContext,useEffect} from "react";
import ItsLogin from "../Pages/ItsLogin/index";

import './Header.css';
import myContext from "../../context";


const Header = () => {
  const[names,setNames]=useState('');
  const[request,setRequest]=useState(false)

  const auth = useContext(myContext);
  useEffect(() => {
    const a =async()=>{
      
      const getName =await JSON.parse(localStorage.getItem('Local_storage_key'));
      if(getName) {
        setNames(getName);
        setRequest(true);
      }
    }
    a();
    
  }, []);
  auth.name = names;

  return (
    <div>

      {request &&  <ItsLogin name={auth.name} request={request} setRequest={setRequest} /> }
      
      <div className="navigation-bar">
          <div className="navigation-container">
            <div className="navigation-brand">
              <a href="/">Agriculture Products</a>
            </div>
            
            <div className="navigation-signup">
              <a href="/Login">Login</a>
              <a href="/Signup">SignUp</a>


            </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
