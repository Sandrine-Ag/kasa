import { Link } from "react-router-dom";


function Erreur () {
    return (
        <div className="Erreur">
            <h1 className="titreErreur">404</h1>
            <p className="descErreur">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="linkErreur" to = "*">Retourner sur la page d'accueil</Link> 
        </div>
    )
}

export default Erreur;