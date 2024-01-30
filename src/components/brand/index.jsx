import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brand = ({ data, classOption }) => {
    return (
        <div className="single-brand" style={{height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link 
                to={{pathname: data.url}}
                className={`${classOption}`} >
                <img src={data.image} alt={`${data.title}`} style={{display: "block"}} />
            </Link>            
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

Brand.defaultProps = {
    classOption: ""
}
export default Brand;
