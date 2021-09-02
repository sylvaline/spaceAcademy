import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function Login() {

    const [userCreated, setUserCreated] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)
  

    const [errMsg, setErrMsg] = useState('')

    const fix = ()=>{
        setErrMsg("")
    }
    

    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password ){
            setErrMsg("Please fill all the inputs")
            return false
        }
        

        const new_message = {
            password,
            email,
            
        }

        fix()

        
    }

   
        return (
                <Layout>
                    <div className="login">
                <div className="login_form_div">

                    <div className="form_intro">
                    <h3>Login</h3>
                    <p>Login is required to continue</p>
                    </div>
                   
                   <form className="" onSubmit={handleSubmit}>
                   <div className="form_style">
                   <input type="email" placeholder="Email:" value={email} name="email " onChange={(e)=>setEmail(e.target.value)} />
                   </div>
    
                   <div className="form_style">
                   <input type="password" placeholder="Password:" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} />
                   </div>

                   <div className="form_footer">
                   <p className="form_footer_left"><input type="checkbox"  value={checkbox} name="password" onChange={(e)=>setCheckbox(!checkbox)} />
                   <label htmlFor="">Keep logged in</label>
                   </p>
                   
                   </div>
                   
                   <div className="form_btn">
                   <button> Login now</button>
                   </div>

               </form>
               <div className="form_footer">
                    <p className="form_footer_right">Don't have an account yet? <span><Link to="/signup">Sign up</Link> </span></p>
                   </div>
               </div>
               </div>
            </Layout>
               
        )
   
}

export default Login

