import "./Projects.css"
import {useState} from "react"
// import projectPic from "../assets/";

function Projects(props){
  const [name, setName] = useState("Click to open!")
  const [display, setDisplay] = useState(false)
  
  function handleClick(){
    setName(was => was === "Click to open!" ? "Click to close!" : "Click to open!")
    
    setDisplay(was => !was);
    }

    return (
    <>
      <div className="project">
        {/* <img src={projectPic} alt="Project Picture" className="projectImg" /> */}
        <h2 className="projectName">{props.name}</h2>
        <a className="projectRepo" href={props.repo} target="_blank">Github</a>
        
        <article className="projectTech">
          <h3 className="techTitle">Tech Used</h3>
          <ul>
            {props.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
            ))}
          </ul>
        </article>
        <div className="projectWriteUp">
          <h3 className="writeUpTitle"></h3>
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
        <button className="projectShow" onClick={handleClick(display)}>{name}</button>
        <div>{Projects}</div>
      </div>
    </>
    )
  }

  export default Projects; // Can't export more than one function per file using default