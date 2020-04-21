import { Link } from 'gatsby'
import React from 'react'
import AlackImg from '../images/alackScreenshot.png'
import StoopImg from '../images/stoop.jpg'
import ArrowImg from '../images/arrow.png'

const ProjectCardRight = (props) => {
  return (
<div className="card-container">
      <div className="card-content-wrapper-right">
        <p className="project-text-item-title">{props.title}</p>
        <p className="project-text-item-description">{props.description}</p>
        <p className="project-text-item-stack">{props.technologies}</p>
        <div className="card-link">
          <p className="project-text-item-link-container">
          <a className="project-link" href={props.github}>GITHUB</a>
          { props.deployed ? <a className="project-link" href={props.deployed}>VISIT</a> : null }
          </p>
        </div>
        <p className="project-text-item-team">{props.team}</p>
      </div>
      <div className='card-image-div'>
        <img className="card-image" src={props.title === 'alack' ? AlackImg : StoopImg} alt={props.imageAlt}/>
      </div>
    </div>
  )
}

export default ProjectCardRight
