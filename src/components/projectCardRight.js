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
        <div className="card-link">
          <p className="project-text-item-link-container">
          <img className="arrow-image" src={ArrowImg} alt={"an arrow pointing to the right"}/>
          <a className="project-link" href={props.github}>github</a>
          { props.deployed ? <a className="project-link" href={props.deployed}>visit</a> : null }
          </p>
        </div>
        <p className="project-text-item-stack">{props.technologies}</p>
        <p className="project-text-item-team">{props.team}</p>
      </div>
      <div className='card-image-div'>
        <img className="card-image" src={props.title === 'ALACK' ? AlackImg : StoopImg} alt={props.imageAlt}/>
      </div>
    </div>
  )
}

export default ProjectCardRight
