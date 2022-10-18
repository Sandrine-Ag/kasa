import down from "../../assets/vectorDown.png"
import up from "../../assets/vectorUp.png"
import { useState} from "react"

function Collapse ( { title, content } ) {
    const [ active, setActive ] = useState (false);
    return (
        <div className="container">
            <div className="collapse" onClick={() => setActive(!active)}>
                <h3> {title} </h3>
                { active === true ? 
                <img className="down" 
                src = {down} 
                alt = "contenu affiché" /> :
                <img className="up"
                src = {up}
                alt = "contenu caché" />
                }
            </div>
            {active === true && 
            <div className="content">
                <p> {content} </p>
            </div>}

        </div>
    )
}

export default Collapse ;