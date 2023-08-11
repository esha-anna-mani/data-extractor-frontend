import React,{ useState } from "react";
import {Link, useHistory} from "react-router-dom"
import "./signup.css"

const Signup=()=>{
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const history = useHistory()
    return(
        <div className="back-img">
            <div className="mycard">
                <div className="card auth-card input-field">
                    <div className="ca-tit">
                        <span>SIGN UP</span>
                    </div>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="butt-div">
                        <button className="waves-effect waves-light btn cus-btn" >Signup</button>
                        <p className="nav-link"><Link to="/login">Already have an account?</Link></p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Signup  