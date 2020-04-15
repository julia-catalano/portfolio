import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../images/logocrop.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage-container" style={{ marginBottom: `1.45rem` }}>
      <img className="homepage-image" src={Logo}/>
      <div className="homepage-content">
          <p className="homepage-name">JULIA</p>
          <p className="homepage-name">CATALANO</p>
          <p className="homepage-detail">// software engineer</p>
          <p className="homepage-detail">// yoga instructor</p>
          <p className="homepage-detail">// MA, English</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
