import React, {useEffect} from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";

function Home() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])

  return (
    <Layout nav>
      <div className="home">
        <div className="home_inner">
          <div className="intro_sections">
            <div className="intro_left">
              <h1>Build your business, hobby or Career</h1>
              <p>
                Online certified courses with in-depth and practical lessons in
                over 100 subjects. Sign up for free, and reveal the MORE in you!
              </p>
              <button>
                <Link to="/course">Learn Web Development</Link>
              </button>
            </div>
            <div className="intro_right">
              <img src="\image\home-banner-V4.png" alt="" />
            </div>
          </div>
          <div className="course_list">
            <CourseList title="Our popular courses" />
          </div>
          <div className="about_diploma">
            <h2>Earn a certified Diploma qualification</h2>
            <div className="about_diploma_inner">
              <div className="image_side">
                <img src="\image\cert-Homepage.png" alt="Certificate" />
              </div>
              <div className="diploma_info">
                <p>
                  Demonstrate your new skills and gain a step up in your career
                  with a Shaw Academy globally recognised certification.
                </p>
                <p>Globaly recognised</p>
              </div>
            </div>
          </div>

          <div className="how_it_works">
            <h2>How it works</h2>
            <div className="how_it_works_inner">
              
              <div className="step1">
                <div className="step_no_div">
                  <p className="step_no">01</p>
                </div>
                <div className="step_disc">
                  <h3>Pick a Course</h3>
                  <p>Start a Shaw Academy course of your choice for free.</p>
                </div>
              </div>
              <div className="step1 pull_up">
                <div className="step_no_div">
                  <p className="step_no">02</p>
                </div>
                <div className="step_disc">
                  <h3>Attend online classes</h3>
                  <p>You’ll have 2 interactive classes/week at your preferred time.</p>
                </div>
              </div>
              <div className="step1">
                      <div className="step_no_div">
                      <p className="step_no">03</p>
                      </div>
                      <div className="step_disc">
                          <h3>
                          Apply your skills</h3>
                      <p>Play Quizzes & complete weekly assignments.</p>
                      </div>
                  </div>

                  <div className="step1 pull_up">
                      <div className="step_no_div">
                      <p className="step_no">04</p>
                      </div>
                      <div className="step_disc">
                          <h3>

                          Get your certificate</h3>
                      <p>Show your growth and level up your career.</p>
                      </div>
                  </div>
            </div>
            <button>
                <Link to="/course">Start learning now</Link>
              </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
