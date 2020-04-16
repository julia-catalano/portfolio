import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewYork from "../images/newyork.jpg"
import Email from "../images/email.png"
import LinkedIn from "../images/linkedin.png"
import GitHub from '../images/github.png'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-container">
      <div className="contact-content-container">
        <p className="contact-content">Interested in collaborating?</p>
        <p className="contact-content-line2">Have a question?</p>
        <p className="contact-content-p2">Feel free to drop a line!</p>
        <div className="contact-icons">
          <a href="mailto:jcc814@nyu.edu">
            <img className="logo-icon" src={Email} />
          </a>
          <a href='https://www.linkedin.com/in/juliacatalano/'>
            <img className="logo-icon" src={LinkedIn} />
          </a>
          <a href='https://github.com/julia-catalano'>
            <img  className="logo-icon" src={GitHub} />
          </a>
        </div>
      </div>
      <img className="new-york" src={NewYork} />
    </div>
  </Layout>
)

export default Contact
