import { Link } from "react-router-dom";
import "./Nav.scss";

function NavBar(){
    return(
    <nav>
        <Link  to="/./">Accueil</Link>
        <Link  to="/about">A propos</Link>
    </nav>);
}

export default NavBar