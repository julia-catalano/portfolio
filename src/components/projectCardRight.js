import { Link } from 'gatsby'
import React from 'react'
import AlackImg from '../images/alackScreenshot.png'

const ProjectCardRight = (props) => {
  return (
<div className="card-container">
      <div className="card-content-wrapper-right">
        <h3>{props.title}</h3>
        <h5 className="project-text-item">{props.date}</h5>
        <p className="project-text-item">{props.description}</p>
        <p className="project-text-item">stack: {props.technologies}</p>
        <p className="project-text-item">team: {props.team}</p>
        <div className="card-link">
          <p className="project-text-item">
          <a href={props.github}>github > </a>
          </p>
          <p className="project-text-item">
            { props.deployed ? <a href={props.deployed}>deployed > </a> : null }
          </p>
        </div>
      </div>
      <div className='card-image-div'>
        <img className="card-image" src={props.title === 'alack' ? AlackImg : null} alt={props.imageAlt}/>
      </div>
    </div>
  )
}

export default ProjectCardRight
