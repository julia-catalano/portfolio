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
        <div className="about-card-content">
          <p className='about-card-name'>Julia</p>
          <p className="about-card-description">lorem ipsum</p>
        </div>
      </div>
      <div className="about-card">
        <div className='about-card-image-div'>
          <img className="about-image" src={Joni} />
        </div>
        <div className="about-card-content">
          <p className="about-card-name">Joni</p>
          <p className="about-card-description">Joni is a Guatemalan street pup. She's obsessed with the park and chihuahuas.</p>
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
