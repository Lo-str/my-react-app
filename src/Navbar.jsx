import {Link} from "react-router-dom";
function Navbar(){
    return (
        <>
            <nav>
                <ul>
                    <li><link to="/">Home</link></li>
                    <li><link to="/about">About</link></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;