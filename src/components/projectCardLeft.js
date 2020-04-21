import { Link } from 'gatsby'
import React from 'react'
import CindrImg from '../images/cindrScreenshot.png'
import TomatoImg from '../images/graceShopperScreenshot.png'
import ArrowImg from '../images/arrow.png'

const ProjectCardLeft = (props) => {
  return (
    <div className="card-container">
      <div className='card-image-div'>
      <img className="card-image" src={props.title === 'cindr' ? CindrImg : TomatoImg } alt={props.imageAlt}/>
      </div>
      <div className="card-content-wrapper-left">
        <p className="project-text-item-title">{props.title}</p>
        <p className="project-text-item-description">{props.description}</p>
        <div className="card-link">
        <p className="project-text-item-stack">{props.technologies}</p>
        <p className="project-text-item-link-container">
          <a className="project-link" href={props.github}>GITHUB</a>
          { props.deployed ? <a className="project-link" href={props.deployed}>VISIT</a> : null }
          </p>
        <p className="project-text-item-team">{props.team}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardLeft
