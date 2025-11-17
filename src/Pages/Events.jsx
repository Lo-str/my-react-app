function Events(){
    let count = 0
    const handleEvent = (name) => {
        if (count < 3){
            count ++
            console.log(`${name}, you clicked me ${count} times!`)
        } else {
            console.log(`${name}, stop clicking me!`)
        }
    }
    return(
        <div>
            <button className="home-btn" onClick={() => handleEvent("lo")}>Click me!</button>
        </div>
    )
}

export default Events