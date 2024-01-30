import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}>
                        Hakkımızda
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/team"}>
                        Ekibimiz
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                        Etkinlikler
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                        İletişim
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
