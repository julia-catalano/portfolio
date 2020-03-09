import { Link } from 'gatsby'
import React from 'react'

const ProjectCardLeft = (props) => {
  return (
    <div className="card-container">
      <img className="card-image" source={props.imageUrl} alt={props.imageAlt}/>
      <div className="card-content">
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p>{props.description}</p>
        <p>stack: {props.technologies}</p>
        <p>team: {props.team}</p>
        <p>
        <a href={props.github}>github</a>
        </p>
        <p>
          { props.deployed ? <a href={props.deployed}></a> : null }
        </p>
      </div>
    </div>
  )
}

export default ProjectCardLeft
