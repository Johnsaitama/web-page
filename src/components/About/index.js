import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          As an exceptionally ambitious front-end developer with a strong desire
          to make a significant impact in the tech industry, I am actively
          seeking an enriching and challenging role within an established and
          respected tech company, where I can leverage the latest cutting-edge
          technologies and collaborate on diverse and innovative projects that
          not only push the boundaries of web development but also contribute
          positively to the company's growth and success.<p></p> I hold a
          certificate from a prestigious bootcamp called Promineo Tech, which
          has equipped me with comprehensive and hands-on training in front-end
          development, further solidifying my technical acumen and passion for
          creating impactful user experiences.
        </p>
        <p>
          Also,I possess a diverse skill set that includes expertise in
          programming, problem-solving, jQuery, Bootstrap, GitHub, debugging,
          React.js, web development, responsive web design, Cascading Style
          Sheets (CSS), front-end development, HTML, JavaScript, and software
          development.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faGithub} color="#000000" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#00BAFF" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#ffd700" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faBootstrap} color="#7F00FF" />
          </div>
        </div>
      </div>
    </div>
      <Loader type="pacman" />
      </>
  )
}

export default About
