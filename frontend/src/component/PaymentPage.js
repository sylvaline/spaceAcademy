import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function PaymentPage() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])
  return (
    <Layout>
      <div className="payment_page">
        <div className="payment_header_top">
        <h2>
          <Link to="/">Space Academy</Link>
        </h2>
        <h2 className="checkout">Checkout</h2>
        </div>
       <div className="payment_header">
       <p>Already a Customer?</p>
        <p> Sign In!</p>
       </div>
        <div className="payment_body">
        <div className="payment_body_title">
        <p>Your Details</p>
        </div>
        <form className="" >
                   <div className="form_style">
                     <label htmlFor="">Name</label>
                   <input type="text" disabled="true" value={"Sylvaline Okeke"} name="email"  />
                   </div>
    
                   <div className="form_style">
                   <label htmlFor="">Email</label>
                   <input type="text" disabled="true" value={"okekesylva@gmail.com"} name="password" />
                   </div>

                   <div className="form_style">
                   <label htmlFor="">Course</label>
                   <input type="text" disabled="true" value={"Introduction to Web Development"} name="email " />
                   </div>
    
                   <div className="form_style">
                     <label htmlFor="">Course Duration</label>
                   <input type="text" disabled="true" value={"6 Weeks"} name="password" />
                   </div>

                   <div className="form_style">
                     <label htmlFor="">Course Amount</label>
                   <input type="text" disabled="true" value={"$100"} name="password" />
                   </div>
                   
                   <div className="form_btn">
                   <button> Continue to Payment</button>
                   </div>

               </form>
        </div>
      </div>
    </Layout>
  )
}

export default PaymentPage
