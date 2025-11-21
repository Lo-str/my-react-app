function ShowContent(props) {  
  return(
    <div className="card">
      
      <ul>
        {props.tech.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <p>{props.writeUp.goal}</p>
      <p>{props.writeUp.learned}</p>
      <p>{props.writeUp.role}</p>
      <p>{props.toSum}</p>

      <button 
        className="card__btn" 
        onClick={props.onClick}
      >
        Show 
      </button>
    </div>
  )
}

export default ShowContent