import React from 'react'
import  "./About.css";
import video4 from "../video/video4.mp4"


const About = () => {
  return (
    <div className="about-section" id="about-me">
      <div className="v-header ">
        <div className="fullscreen-video">
          <video className="video " src={video4} autoPlay loop muted />
        </div>
        <div className="overlay-section">
          <div className="box-content">
            <h1 className="box-h">Victoria Gonzales</h1>
            <p className="box-p">Hello I'm a Junior Developer👋🏽 I'm  excited to help you with my work as Frontend, Backend or Full stack Jr Developer.

              <p>I love develops products or services that represent an creative and innovative solution through technology.</p>
              <p>I consider that I have a set of talents that are valuables. I'm critical thinking, problem-solving oriented, and I have strong sense of adaptability.   My dynamic energy and the desire to learn and be an excellent professional are my main motivations,
              I'm self-motivated, and resilient person that considered that "if you really want to achieve something in your life, you really have to persuit it".</p>
              <p> I'm excited to contribute with my strengths and proficiency, learn and continue growing professionally.</p>

            </p>
          </div>
       </div>
       </div>

    </div>
  )
}

export default About;
