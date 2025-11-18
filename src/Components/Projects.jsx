import "./Projects.css"
import {useState} from "react"
// import projectPic from "../assets/";

function Projects(props){
  const [show, setShow] = useState(true)

  return (
  <>
    <div className="project">
      <h2 className="projectName">{props.name}</h2>
      <a className="projectRepo" href={props.repo} target="_blank">Github</a>
      <br />
      {show ? "Show less" : "Show more"}
      <button className="btn" onClick={() => setShow((show) => !show)}></button>
      <div className="projectContent" style={{display: show ? "block" : "none"}}>
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
      {/* {showMore ? props.tech && props.writeUp && props.toSum : props.name && props.repo} */}
    </div>
  </>
  )
  }

  export default Projects; // Can't export more than one function per file using default