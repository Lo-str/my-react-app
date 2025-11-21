import {useState} from "react"
import Popup from "../Popup/Popup.jsx"
import ShowContent from "../Popup/ShowContent.jsx"

function Projects(props){
  const [show, setShow] = useState(false)
  const [popupImg, setPopupImg] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  
  function HideContent(){
    setShow(false)
  }

  function OpenPopup(img){
    setPopupImg(img)
    setIsOpen(true)
  }

  function ClosePopup(){
    setIsOpen(false)
    setPopupImg(null)
  }

  return (
    <>
      <div className="project">
        <h2 
          onMouseEnter={() => OpenPopup(props.image)} 
          className="projectName"
        >
          {props.name}
        </h2>

        {isOpen &&(
          <Popup
            image={popupImg}
            onMouseLeave={ClosePopup}
          />
        )}

        {/* To add:
        - fa-github inline with Project name */}
        <a className="projectRepo" href={props.repo} target="_blank">
          Github
        </a>
        <br />

        {/* To add: 
        - Move button under text when display is block
        - Columns
        - Images for preview*/}
        <button 
          className="btn" 
          onClick={() => setShow(true)}
        >
          Show more
        </button>

        {show && (
          <ShowContent
            tech={props.tech}
            writeUp={props.writeUp}
            toSum={props.toSum}
            onClick={HideContent}
          />
        )}

          <article className="projectTech">
            <h3 className="tech">Tech Used</h3>
            <ul>
              {props.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
              ))}
            </ul>
          </article>

          <div className="projectWriteUp">
            <h3 className="writeUp">Write Up</h3>
            <h4 className="goal">What the project does</h4>
            <p>{props.writeUp.goal}</p>

            <h4 className="learned">What I learned</h4>
            <p>{props.writeUp.learned}</p>

            <h4 className="role">My role</h4>
            <p>{props.writeUp.role}</p>

            <h4 className="challenges">Challenges I encountered</h4>
            <ul>
              {props.writeUp.challenges.map((challenges, i) => (
              <li key={i}>{challenges}</li>
              ))}
            </ul>

            <p className="projectSummary">{props.toSum}</p>
          </div>
      </div>
    </> 
  )
}

export default Projects