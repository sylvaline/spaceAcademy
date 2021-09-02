import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function Login() {

    const [userCreated, setUserCreated] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')
    const [address, setAddress] = useState('')

    const [checkbox, setCheckbox] = useState(false)
  

    const [errMsg, setErrMsg] = useState('')

    const fix = ()=>{
        setErrMsg("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!fullName || !email || !phone || !address){
            setErrMsg("Please fill all the inputs")
            return false
        }
        

        const new_message = {
            fullName,
            email,
            phone,
            address
        }

        fix()

        
    }

   
        return (
                <Layout>
                    <div className="login">
                <div className="login_form_div">
                    <div className="form_intro">
                    <h3>Sign up</h3>
                    <p>It's 100% FREE</p>
                    </div>
                   
                   <form className="" onSubmit={handleSubmit}>
                   <div className="form_style">
               <input type="phone" placeholder="Phone:" value={phone} name=" phone" onChange={(e)=>setPhone(e.target.value)} />
               </div>
                   <div className="form_style">
                   <input type="email" placeholder="Email:" value={email} name="email " onChange={(e)=>setEmail(e.target.value)} />
                   </div>

                   <div className="form_style">
               <input type="text" placeholder="fullName:" value={fullName} name="fullName " onChange={(e)=>setFullName(e.target.value)} />
               </div>

               <div className="form_style">
               <input type="text" placeholder="Address:" value={address} name="address " onChange={(e)=>setAddress(e.target.value)} />
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
                   <button> Sign Now</button>
                   </div>

               </form>
               <div className="form_footer">
                       <p>Already have an account? <span><Link to="/login">Login </Link> </span></p>
                   </div>
               </div>
               </div>
            </Layout>
               
        )
   
}

export default Login

