import "./Projects.css"
import {useState} from "react"
// import projectPic from "../assets/";

function Projects(props){
  const [showMore, setShowMore] = useState(false)
  const content = 
  // {showMore ? props.text: `${text.substring(0, 250)}`}
  // {showMore ? "Show more" : "Show less"}

  return (
  <>
    <div className="project">
        {/* <img src={projectPic} alt="Project Picture" className="projectImg" /> */}
        <h2 className="projectName">{props.name}</h2>
        <a className="projectRepo" href={props.repo} target="_blank">Github</a>

      <div className="projectContent">{props.content}
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
      </div>
      {showMore ? props.title : props.fullContent}
      <button className="btn" onClick={() => setShowMore(!showMore)}></button>
      {showMore ? "Show more" : "Show less"}
      <div>{Projects}</div>
    </div>
  </>
  )
  }

  export default Projects; // Can't export more than one function per file using default