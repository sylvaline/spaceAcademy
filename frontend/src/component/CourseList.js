import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function CourseList({title}) {
  return (
   
      <div className="course_list">
        <div className="course_list_inner">
        <h2>{title}</h2>
        <br />

        <div class="row">
          <div class="column">
            <div class="card">
              <img
                src="\image\fashion-design-20.png"
                alt="Web Development"
                style={{ width: "100%" }}
              />
              <div class="container">
                <Link to="/course"><h2>Web Development</h2></Link>
                <p class="title">Beginner to advanced</p>
                <p>60,638 Graduates</p>
               
                <p className="enroll_btn">
                <Link to="/payment">Enroll Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="\image\writing-20.png"
                alt="Android Development"
                style={{ width: "100%" }}
              />
              <div class="container">
              <Link to="/course"><h2>Android Development</h2></Link>
                
                <p class="title">Beginner to advanced</p>
                <p>30,064 Graduates</p>
                
                <p className="enroll_btn">
                <Link to="/payment">Enroll Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="\image\interior-design-20.png"
                alt="Android Development"
                style={{ width: "100%" }}
              />
              <div class="container">
              <Link to="/course"><h2>Android Development</h2></Link>
               
                <p class="title">Beginner to advanced</p>
                <p>30,064 Graduates</p>
                
                <p className="enroll_btn">
                <Link to="/payment">Enroll Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="\image\marketing.png"
                alt="Android Development"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Android Development</h2>
                <p class="title">Beginner to advanced</p>
                <p>30,064 Graduates</p>
                
                <p className="enroll_btn">
                <Link to="/payment">Enroll Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="\image\photography-1.png"
                alt="Android Development"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Android Development</h2>
                <p class="title">Beginner to advanced</p>
                <p>30,064 Graduates</p>
                
                <p className="enroll_btn">
                <Link to="/payment">Enroll Now</Link>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img
                src="\image\tech-coding-20.png"
                alt="Java Development"
                style={{ width: "100%" }}
              />
              <div class="container">
                <h2>Java Development</h2>
                <p class="title">Beginner</p>
                <p>60,638 Graduates</p>
               
                <p className="enroll_btn">
                <Link to="/payment">Enroll Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
   
  );
}

export default CourseList;
