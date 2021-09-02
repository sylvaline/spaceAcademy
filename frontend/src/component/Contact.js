import React, {useEffect} from 'react'
import ContactForm from "./ContactForm";
// import MapSection from './Maps'
import { Link } from "react-router-dom";
import Layout from './Layout';

function Contact() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
    
    return (
      <Layout nav>
          <div className="contact_us">
          <h1>Contact Us</h1>
      <div className="contact_us_inner_window">
        <div className="address">
        <div className="logo">
            <Link to="/">
                {/* <img src="\image\spacelogo.png" alt="" /> */}
                <h2>Space Academy</h2>
                </Link>
            </div>
            <p>
            <a
                  href="mailto:okekesylvaline.com?subject=From Space Innovation Tech Hub websit"
                  alt="Email Space Innovation Tech Hub"
                >
                  admin@spaceinnovationTH.com
                </a>
            </p>
            <p>
            <a
                  href="tel:08167424880"
                  alt="call Space Innovation Tech Hub"
                >
                  08025363537
                </a>
            </p>
            <p><p >No 36 Uke wende, High Level, Makurdi. Benue State.</p></p>
            <p>
            <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
            </p>
        </div>
        <div className="contact_form">
          
            <ContactForm />
          
        </div>
      </div>

      {/* mobile */}

      <div className="contact_us_inner_mobile">
        
        <div className="contact_form">
          
          <p className="main_address">No 36 Uke wende, High Level, Makurdi. Benue State.</p>
          
            <ContactForm />
          
        </div>
        <div className="address">
        <div className="logo">
            <Link to="/">
                {/* <img src="\image\spacelogo.png" alt="" /> */}
                <h2>Space Academy</h2>
                </Link>
            </div>
            <p>
            <a
                  href="mailto:okekesylvaline.com?subject=From Space Innovation Tech Hub websit"
                  alt="Email Space Innovation Tech Hub"
                >
                  admin@spaceinnovationTH.com
                </a>
            </p>
            <p>
            <a
                  href="tel:08167424880"
                  alt="call Space Innovation Tech Hub"
                >
                  08025363537
                </a>
            </p>
            <p>
            <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
            </p>
        </div>
        <div className="map">
        {/* <MapSection location={location} zoomLevel={17} /> */}
        </div>
      </div>
    </div>
      </Layout>
    )
}

export default Contact
