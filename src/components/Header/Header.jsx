import "./Header.scss";
import logo from "../../../public/images/main-logo.webp";
import signIn from "../../assets/headerImages/sign-in.svg";
import { NavLink } from "react-router-dom";

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
                <NavLink to="/" end className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}>
                    Heroes
                </NavLink>
                <NavLink to="/meta" className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}>
                    Meta
                </NavLink>
                <NavLink
                    to="/meta-escape"
                    className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
                >
                    Meta Escape
                </NavLink>
            </nav>
            <a href="#" className="header__sign-in">
                <img width={24} height={24} src={signIn} alt="sign in" />
            </a>
        </header>
    );
}
