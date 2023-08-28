import './cer.scss'
import Img18 from '../../assets/projectsimg/21.png'
import Img19 from '../../assets/projectsimg/20 .png'
import Img20 from '../../assets/projectsimg/20.png'
import Loader from 'react-loaders'
const Resume = () => {
  return (
    <div className="resume-container">
      <div className="box1">
      <div className="diploma">
        <img src={Img20} alt="Certificate" height="400" width="600" />
      </div>

      <div className="diploma">
        <img src={Img18} alt="" height="600" width="500" />
      </div>

      <div className="diploma">
        <img src={Img19} alt="codecer" height="400" width="600" />
      </div>
     
    
    
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Resume
