

// export default Projects
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './project.scss'
import { useState, useEffect } from 'react'
// import Img1 from '../../assets/projectsimg/5.png'
// import Img2 from '../../assets/projectsimg/3.png'
import ProjectGallery from './ProjectGallery';

const Projects = () => {
const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
const timeoutId = setTimeout(() => {
setLetterClass('text-animate-hover')
}, 3000)
return () => clearTimeout(timeoutId)
}, [])

  return (
    <div className="project-container"style={{ position: 'sticky',   }} >
  <div className="project-title">
  <div className="text-zone">
  <h1>
  <AnimatedLetters
  letterClass={letterClass}
  strArray={['p', 'r', 'o', 'j', 'e', 'c', 't', 's', '', '.']}
  idx={15}
  />
  </h1>
      </div>
      

    

      <div className="Project1">
     
      <ProjectGallery />
    </div>
    </div>

      <Loader type="pacman" />
      </div>
     
  )
}
  
  export default Projects
