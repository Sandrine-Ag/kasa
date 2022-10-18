import { Link } from "react-router-dom";
import Data from "../../data/Logement.json"

function Card () {
    return (
        <div className="Card">
            {Data.map ((el) => (
                <Link to = {  `logement/${el.id}`}
                key = {el.id}
                className = "log"
                >
                    <img src = {el.cover } alt = {el.title} />
                    <p> {el.title} </p>
                </Link>
            ))}
        </div>
    )
}

export default Card;