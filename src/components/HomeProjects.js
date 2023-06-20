import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../component-style/projects.css"

const HomeProjects = () => {
  const selectedWorks = [
    {
      "id": 1,
      "title": "Pixie",
      "description": "pretty woman posing",
      "year": "2023",
      "roles": ["frontend", "backend", "creative direction", "web design"],
      "image": "../../images/pixie6.jpg",
      "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa, fermentum eget nisi et, volutpat varius felis. Maecenas molestie purus quis nisl imperdiet, sed tempor dui feugiat."
    },
    {
      "id": 2,
      "title": "Baud Labs",
      "description": "man with vr glasses",
      "year": "2023",
      "roles": ["frontend", "creative direction", "web design"],
      "image": "../../images/vr-glasses-mobile.jpg",
      "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa, fermentum eget nisi et, volutpat varius felis. Maecenas molestie purus quis nisl imperdiet, sed tempor dui feugiat."
    },
    {
      "id": 3,
      "title": "Blog App",
      "description": "design of mobile blog",
      "year": "2023",
      "roles": ["frontend", "backend", "creative direction", "web design"],
      "image": "",
      "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa, fermentum eget nisi et, volutpat varius felis. Maecenas molestie purus quis nisl imperdiet, sed tempor dui feugiat."
    },
    {
      "id": 4,
      "title": "Orbit",
      "description": "inspirational musician",
      "year": "2023",
      "roles": ["frontend", "web design"],
      "image": "",
      "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa, fermentum eget nisi et, volutpat varius felis. Maecenas molestie purus quis nisl imperdiet, sed tempor dui feugiat."
    },
  ]

  let worksDisplay = selectedWorks.map((works, index) => {
    return (
      <div className='selected-contents' key={index}>
        <div className='selected-absolute-title'>
          <div className='selected-title'>
            <h2>{works.title}</h2>
          </div>
          <div className='selected-desc'>
            <p>{works.projectDescription}</p>
          </div>
        </div>
        <div className='selected-image-count'>
          <LazyLoadImage src={works.image} alt={works.description}/>
          <div className='selected-count'>
            <p><span>0{works.id}</span> /04</p>
          </div>
        </div>
        <div className='selected-year-roles'>
          <div className='selected-year'>
            <p>{works.year}</p>
          </div>
          <div className='selected-roles'>
            {works.roles.map(role => {
              return(
              <p>{role}</p>
              )
            })}
          </div>
        </div>
      </div>    
    )
  })

  return (
    <div className='selected-projects'>
      {worksDisplay}
    </div>
  )
}

export default HomeProjects