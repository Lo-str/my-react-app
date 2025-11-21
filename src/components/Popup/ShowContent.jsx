import { useState } from "react"

function ShowContent({content, onClick}) {  
  return(
    <div className="card">
      <p className="card__content">{content}</p>
      <button className="card__btn" onClick={onClick}>"Show less"</button>
    </div>
  )
}
