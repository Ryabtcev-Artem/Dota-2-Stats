import "./Header.scss";
import logo from "../../public/images/main-logo.webp";
import signIn from "../assets/headerImages/sign-in.svg";
export default function Header() {
    return (
        <header className="header container">
            <img
                loading="lazy"
                width={50}
                height={50}
                className="header__logo"
                src={logo}
                alt=""
            />
            <nav className="header__menu">
                <a href="#" className="header__link active">
                    Heroes
                </a>
                <a href="#" className="header__link">
                    Meta
                </a>
                <a href="#" className="header__link">
                    Meta Escape
                </a>
            </nav>
            <a href="#" className="header__sign-in">
                <img width={24} height={24} src={signIn} alt="sign in" />
            </a>
        </header>
    );
}
