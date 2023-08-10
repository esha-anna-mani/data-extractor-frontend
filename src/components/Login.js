import React,{ useState } from "react";
import { Link, useHistory }from "react-router-dom";
import "./signup.css"

const Signin=()=>{
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history = useHistory()
    
    return(
        <div className="back-img">
             <div className="mycard">
                <div className="card auth-card input-field">
                    <div className="ca-tit">
                        <span>LOGIN</span>
                    </div>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="butt-div">  
                        <button className="btn waves-effect waves-light #64b5f6 blue darken-1 cus-btn" >Signin</button>
                        <p className="nav-link"><Link to="/signup">Don't have an account?</Link></p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Signin