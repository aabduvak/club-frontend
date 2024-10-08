import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";
import Logo from "../../logo";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div className={`offcanvas-modal ${show ? "show" : ""}`}>
            <div className="offcanvas-dialog">
                <div className="menu-content">
                    <div className="offcanvas-header">
                        <Logo
                            classOption="offcanvas-logo d-inline-block"
                            image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                        />
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <nav id="offcanvasNav" className="offcanvas-menu">
                        <ul>
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
                                <NavLink to={process.env.PUBLIC_URL + "/event"}>
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
                </div>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;
