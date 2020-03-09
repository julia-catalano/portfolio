import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCardLeft from '../components/projectCardLeft'
import ProjectCardRight from '../components/projectCardRight'
import ProjectData from './projectData'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the projects space</h1>
    <div>
      {ProjectData.map((project,index) => {
          if (index % 2 === 0) {
            return <ProjectCardRight title={project.title} date ={project.date} imageUrl = {project.imageUrl} imageAlt ={project.imageAlt} description={project.description} technologies={project.technologies} team={project.team} github={project.github} deployed={project.deployed}/>
          } else {
            return <ProjectCardLeft title={project.title} date ={project.date} imageUrl = {project.imageUrl} imageAlt = {project.imageAlt} description={project.description} technologies={project.technologies} team={project.team} github={project.github} deployed={project.deployed}/>
          }
        }
      )}
    </div>
  </Layout>
)

export default Projects
