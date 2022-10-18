import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import bannerimg from "../assets/bannerHome.png"



function Accueil() {
    return (
        <div className="Accueil">
            <Banner
            text = "Chez vous, partout et ailleurs"
            image = {bannerimg}
            imageDesc = "Paysage Montagneux"  
            />
            
            <Card />
        </div>
    )
}

export default Accueil;