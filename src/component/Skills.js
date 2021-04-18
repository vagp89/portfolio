import React from 'react'
import "./Skills.css"
import Particles from "react-particles-js";

const Skills = () => {
  return (
    <div className="skills-section" id="my-skills">
      <Particles
        className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "square",
                stroke:{
                width: 6,
                color: "#ff75a0"
                }
              }
            }
           }}
          />
     <h1 className="skill-title"> Skill Set</h1>
     <div class="container">
        <div class="bar front advanced" data-skill="CSS3"></div>
        <div class="bar front expert" data-skill="HTML5"></div>
        <div class="bar front advanced" data-skill="Ruby"></div>
        <div class="bar back intermediate" data-skill="TDD"></div>
        <div class="bar front advanced" data-skill="Ruby on Rails"></div>
        <div class="bar back intermediate" data-skill="React JS"></div>
        <div class="bar learning" data-skill="React Native"></div>
        <div class="bar back basic" data-skill=" SQL"></div>
        <div class="bar back intermediate" data-skill="Git"></div>
        <div class="bar back intermediate" data-skill="Github"></div>
        <div class="bar front advanced" data-skill="Bootstrap"></div>
        <div class="bar back intermediate" data-skill="Heroku"></div>
        <div class="bar back intermediate" data-skill="React-stripe-js"></div>
        <div class="bar back intermediate" data-skill="Material-U"></div>
        <div class="bar back intermediate" data-skill="React-currency-format"></div>
      </div>
    </div>
  )
}

export default Skills
