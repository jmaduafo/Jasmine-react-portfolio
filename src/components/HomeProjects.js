import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../component-style/projects.css"
import selectedWorks from '../utils/worksData'

const HomeProjects = () => {

  let worksDisplay = selectedWorks.map((works, index) => {
    return (
      <div className='selected-contents' key={index}>
        
        <div className='selected-image-count'>
          <LazyLoadImage src={works.image} alt={works.description}/>
          <div className='selected-count'>
            <p><span>0{works.id}</span> /04</p>
          </div>
        </div>
        <div className='selected-right'>
          <div className='selected-absolute-title'>
            <div className='selected-title'>
              <h2>{works.title}</h2>
            </div>
            <div className='selected-desc'>
              <p>{works.projectDescription}</p>
            </div>
          </div>
          <div className='selected-year-roles'>
            <div className='selected-year'>
              <p>{works.year}</p>
            </div>
            <div className='selected-roles'>
              {works.roles.map((role, index) => {
                return(
                <p key={index}>{role}</p>
                )
              })}
            </div>
          </div>
        </div>
      </div>    
    )
  })

  return (
    <div className='selected-projects-container'>
      <div className='selected-projects'>
        {worksDisplay}
      </div>
    </div>
  )
}

export default HomeProjects