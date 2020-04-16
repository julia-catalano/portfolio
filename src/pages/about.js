import React from "react"
import { Link } from "gatsby"
import Julia from '../images/julia.jpg'
import Joni from '../images/joni.png'
import Indy from '../images/indy.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-container">
      <div className="about-card">
        <div className="about-card-image-div">
          <img className="about-image" src={Julia}/>
        </div>
        <div className="about-card-content-julia">
          <p className='about-card-name'>Julia</p>
          <p className="about-card-description-julia">I'm a naturally curious writer of prose turned writer of code. I'm excited by the ability to pull from diverse sources to solve large problems - a practice coding, analytical writing, and teaching yoga all share. I completed the Grace Hopper Program in 2019, and the NYU MA in English in 2019. Currently coding in JavaScript, but excited to learn!</p>
          <p className="about-card-description-p2">Everything I approach I do so with curiosity, empathy, and resilience. I see technology as a tool to empower and connect people. I'm always looking to work with bright, kind, diverse teams to find dynamic solutions to the complex problems people face in their daily lives. Have an idea in mind?
            Let's <a href="mailto:jcc814@nyu.edu">chat!</a>
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className='about-card-image-div'>
          <img className="about-image" src={Joni} />
        </div>
        <div className="about-card-content">
          <p className="about-card-name">Joni</p>
          <p className="about-card-description">Joni is a Guatemalan street pup. She's obsessed with people, Prospect Park and chihuahuas.</p>
        </div>
      </div>
      <div className="about-card">
        <div className="about-card-image-div">
          <img className="about-image" src={Indy} />
        </div>
        <div className="about-card-content">
          <p className="about-card-name">Indy</p>
          <p className="about-card-description">Indy is an Oakland cat. She's obsessed with Joni. Joni tolerates her.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
