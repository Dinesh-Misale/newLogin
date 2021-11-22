import React from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Login =() => {
  return(
    <div className="main-div">
      <form className="login-form"   action = "/profile" method="get">
        <FontAwesomeIcon icon={faUser} style={{color : "grey",width: "50%",height : "30%", margin : "40px 0 40px 85px"}}/>
        <input className="input-fields" type="text" required />
        <label className="label-fields uers-label"><span> Enter User Name </span></label>
        <input className="input-fields" type="password" required />
        <label className="label-fields password-label"><span> Enter Passowrd </span> </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;