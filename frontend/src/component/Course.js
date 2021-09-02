import React, {useEffect} from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import CourseList from "./CourseList";
import Accordion from "./Accordion";

function Course() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])

  return (
    <Layout nav>
      <div className="course">
        <div className="course_nav">
          <div className="course_nav_inner">
            <div className="empty_div"></div>
            <ul>
              <li className="course_li">
                <NavLink activeClassName="nav_active" exact to="#overview">
                  Overview
                </NavLink>
              </li>
              <li className="course_li">
                <NavLink activeClassName="nav_active" exact to="#content">
                  Content
                </NavLink>
              </li>
              <li className="contact course_li">
                <NavLink activeClassName="nav_active" exact to="#review">
                  Review
                </NavLink>
              </li>
              <li className="course_li">
                <NavLink activeClassName="nav_active" exact to="#benefits">
                  Benefits
                </NavLink>
              </li>
              <li className="course_li">
                <NavLink activeClassName="nav_active" exact to="#price">
                  Price
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="overview" className="overview">
          <div className="overview_top">
            <div className="overview_img">
              <img src="\image\marketing.png" alt="" />
            </div>
            <div className="overview_desc">
              <h2>Online Coding & Technology Course</h2>
              <p>
                Learn the basics of front-end web development online, using
                coding techniques and explore innovative technologies of the
                21st century and their implications in industry.
              </p>
              <p className="enroll_btn">Limited time offer</p>
              <button>Start Learning Now</button>
            </div>
          </div>
          <div className="overview_banner">
            <div className="overview_banner_inner">
              <div className="overview_banner_left">
                <div className="">
                  <i>60, 638</i>
                  <p>Graduates</p>
                </div>
                <div className="">
                  <i>
                    <i className="fas fa-layer-group"></i>
                  </i>
                  <p>All Levels</p>
                </div>
                <div className="">
                  <i>
                    <i className="fas fa-certificate"></i>
                  </i>
                  <p>Certified</p>
                </div>
              </div>
              <div className="overview_banner_right">
                <div className="overview_banner_right_icon"></div>
                <div className="overview_banner_right_desc">
                  <h5>35% Most of this week’s places have been filled.</h5>
                  <p>Start your course now to guarantee your place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course_and_certificate_section">
          <div className="course_section">
            <div className="class_overview">
              <h2>Coding & Technology Class Overview</h2>
              <ul>
                <li>
                  Identify trending technologies of the Fourth Industrial
                  Revolution
                </li>
                <li>
                  Design various architectures for computing systems, including
                  databases and IoT
                </li>
                <li>
                  Design your first mobile application prototype using
                  Justinmind
                </li>
                <li>
                  Design your first website using HTML and CSS with popular
                  coding tools
                </li>
                <li>
                  Add additional functionality to your website using the basics
                  of JavaScript
                </li>
              </ul>
            </div>
            <div id="content" className="content">
              <h2>Coding & Technology Class Content</h2>
              <Accordion />
            </div>
          </div>
          <div className="certificate_section"></div>
        </div>

        <div id="reviews" className="reviews">
          <h2>Reviews</h2>
          <div className="review_card">
            <div className="">
            <p>
              It is so helpful to go back and practice what I have learned from
              the recordings and your help along the way has been outstanding.
              Thank you so much.
            </p>
            <p>
              4.6 <span>*</span>
            </p>
            </div>
            <div className="">
            <p>
              It is so helpful to go back and practice what I have learned from
              the recordings and your help along the way has been outstanding.
              Thank you so much.
            </p>
            <p>
              4.6 <span>*</span>
            </p>
            </div>
          </div>
        </div>
        <div className="you_might_also_like">
          <div className="card_content">
            <CourseList title="You might also like" />
          </div>
        </div>

        <div id="benefits" className="benefits">
          <h2>Course Benefits</h2>
          <div className="review_card">
            <div className="">
           
              <img src="" alt="" />
            
            <div className="benefits_desc">
            <h5>University approved</h5>
            <p>University certified courses.</p>
            </div>
            </div>

            <div className="">
           
              <img src="" alt="" />
            
            <div className="benefits_desc">
            <h5>University approved</h5>
            <p>University certified courses.</p>
            </div>
            </div>

            <div className="">
           
              <img src="" alt="" />
            
            <div className="benefits_desc">
            <h5>University approved</h5>
            <p>University certified courses.</p>
            </div>
            </div>
          </div>
        </div>
        <div id="price" className="price"></div>
      </div>
    </Layout>
  );
}

export default Course;
