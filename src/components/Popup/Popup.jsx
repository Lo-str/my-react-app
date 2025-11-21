import { useState } from "react"

function Popup({image, onMouseEnter, onMouseLeave}) {
  // const [warning, setWarning] = useState(true)
  
  return(
    <div 
      className="popup"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <image className="img" src={image} alt={alt} />
    </div>
  )
}

export default Popup
