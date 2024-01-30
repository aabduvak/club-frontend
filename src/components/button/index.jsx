import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ classOption, text, path}) => {
    const isExternalLink = path.startsWith("http");

    return (
        <React.Fragment>
            <Link
                to={{pathname: isExternalLink ? path : process.env.PUBLIC_URL + path}}
                className={`${classOption}`}
            >
                {text}
            </Link>
        </React.Fragment>
    );
};

Button.propTypes = {
    classOption: PropTypes.string,
    text: PropTypes.string,
    path: PropTypes.string,
};
Button.defaultProps = {
    classOption: "btn",
};

export default Button;
