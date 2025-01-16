import React from "react";
import Accommodations from "../../components/AccommodationsList";
import Banner from "../../components/Banner/banner";

/**
 * Composant affichant la page d'accueil
 * @return JSX.element
 */

function Home() {
    return (
        <div className="home">
            <Banner
                image="banner1240w"
                title="Chez vous, partout et ailleurs"
                alt="Montagne au bord de l'eau"
            />
            <Accommodations />
        </div>
    );
}

export default Home;