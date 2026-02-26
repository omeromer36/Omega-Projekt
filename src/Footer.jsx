import "./Footer.css"
import logo from "./assets/logo.jpeg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="footer-links">
                    <h4>Shop</h4>
                    <ul>
                        <li>Boxhandschuhe</li>
                        <li>Bandagen</li>
                        <li>Shorts</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Information</h4>
                    <ul>
                        <li>Über uns</li>
                        <li>Kontakt</li>
                        <li>Impressum</li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 MANKEY MMA – Bester Online Shop für Kampfsportler
            </div>
        </footer>
    )
}

export default Footer