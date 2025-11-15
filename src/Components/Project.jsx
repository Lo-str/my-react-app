import "./Project.css"
import projectPic from "../assets/";

function Project(props){

    return (
    <>
      <div className="project">
        <h1>Lo's Portfollio</h1>
        <img src={projectPic} alt="Project Picture" className="projectImg" />
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
          <p>{writeUp.goal}</p>

          <h4 className="learned">What I learned</h4>
          <p>{writeUp.learned}</p>

          <h4 className="role">My role</h4>
          <p>{writeUp.role}</p>

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

export default Project; // Can't export more than one function per file using default