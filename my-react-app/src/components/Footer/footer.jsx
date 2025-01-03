import logowhite122w from "../../assets/Logo/logo-white122w.png";
import logowhite244w from "../../assets/Logo/logo-white244w.png";

function Footer() {
    return (
        <footer>
            <img
                src={logowhite122w}
                alt="Logo de Kasa"
                srcset={`${logowhite244w} 2x`}
            />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;