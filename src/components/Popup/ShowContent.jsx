import {useState} from "react"
function ShowContent(props) {
  return(
    <div>
      <ul>
        {props.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <p>{props.writeUp.goal}</p>
      <p>{props.writeUp.learned}</p>
      <p>{props.writeUp.role}</p>
      <p>{props.toSum}</p>
    </div>
  )
}

export default ShowContent
