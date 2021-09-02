import React, { useState } from 'react'

function ContactForm() {

    const [contact_sent, setContact_sent] = useState(false)

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const [errMsg, setErrMsg] = useState('')

    const fix = ()=>{
        setContact_sent(true)
        setErrMsg("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!name || !email || !phone || !message){
            setErrMsg("Please fill all the inputs")
            return false
        }
        

        const new_message = {
            name,
            email,
            phone,
            message
        }

        fix()

        console.log(new_message)
    }

    if(contact_sent){
        return (
            <div className="form_div">
            <h2>Thanks for contacting us {name}!</h2>
        </div>
        )
    } else{
        return (
            
               <div className="form_div">
                   
               <form className="" onSubmit={handleSubmit}>
               <div className="form_style">
               <input type="text" placeholder="Name:" value={name} name="name " onChange={(e)=>setName(e.target.value)} />
               </div>
               <div className="form_style">
               <input type="email" placeholder="Email:" value={email} name="email " onChange={(e)=>setEmail(e.target.value)} />
               </div>
               <div className="form_style">
               <input type="phone" placeholder="Phone:" value={phone} name=" phone" onChange={(e)=>setPhone(e.target.value)} />
               </div>
               <textarea cols="30" rows="10" placeholder="Message:"value={message} name="message" onChange={(e)=>setMessage(e.target.value)}></textarea>
               {errMsg.length > 0 ? <div className="err_msg"><p><span>*</span>{errMsg}</p></div>:''}
               <div className="form_btn">
               <button >Send Message</button>
               </div>
           </form>
           </div>
        )
    }
}

export default ContactForm
