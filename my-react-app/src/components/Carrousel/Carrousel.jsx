import { useState } from 'react';
import "./Carrousel.scss";


function Carrousel({lodgement}){
    const [activeIndex, setActiveIndex] = useState(0); //Initialisation state et sa fonction set
    if (lodgement){
        const pictures = lodgement.pictures;            // récupération de l'array d'images pour le carrousel
        const length = pictures.length;
    
        const prevImg = () => {
            setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1);  // conditionnel pour ne pas déclencher d'erreurs lorsque les limites de l'array sont atteintes
            };
        const nextImg = () => {
            setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1); 
            };
        return length>1?(        // Ne pas afficher les fleches ni le nombre d'images si seulement 1
            <div className="carrousel">
                <i id="previousImage" onClick={prevImg} className="fa fa-solid fa-chevron-left"></i>
                <img src={pictures[activeIndex]} alt="intérieur du logement"/>
                <span id="activeImage">{activeIndex+1}/{length}</span>
                <i id="nextImage" onClick={nextImg} className="fa fa-solid fa-chevron-right"></i>
            </div>
        ):( 
            <div className="carrousel">
                <img src={pictures[activeIndex]} alt="intérieur du logement"/>
            </div>
        );
    }

}

export default Carrousel;