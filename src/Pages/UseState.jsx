// React Hook:
// Spefcial function that allows functional components to use React features without writing class components.

// useState() = a React hook that allows the creation of a stateful variable AND a setter function to update its value in the virtual DOM 
// Syntax --> [name, setName] = useState();


//Ex:
// first import useState

import {useState} from "react"

// When pressing the button, we want the text to change.

function UseState(){
    const [name, setName] = useState("guest")
    const updateName = () => {
        setName("Lo")
    }
    const[age, setAge] = useState(0)
    const increaseAge = () => {
        setAge(age +1)
    }
    const[isEmployed, setIsEmployed] = useState(false)
    const toggleEmployment = () => {
        if (toggleEmployment){
            setIsEmployed(false)
        } else{
            setIsEmployed(true)
        }
    }
    return(
        <div>
            <button onclick={updateName}>Set Name</button> 
            <h2>Name: {name}</h2>
            <br />
            <button onClick={increaseAge}>Increase age</button>
            <h2>Age: </h2>
            <br />
            <button onclick={toggleEmployment}>Toggle employment</button>
            <h2>I am ${isEmployed ? "employed" : "not employed"}</h2>
        </div>
    )
}

export default UseState