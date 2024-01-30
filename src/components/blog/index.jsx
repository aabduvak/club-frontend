import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { slugify } from "../../utils";

const BlogGrid = ({ data, classOption }) => {
    const publishedDate = new Date(data.published_at);
    
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timeZone: 'Europe/Istanbul'
      };
      
    const formattedPushlishDate = publishedDate.toLocaleDateString('tr-TR', options);
    
    return (
        <div className="blog-card">
            <div className={`thumb bg-light text-center ${classOption}`}>
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                    <img
                        src={`${data.media.gridImage}`}
                        alt="img"
                    />
                </Link>
            </div>
            <div className="blog-content">
                <span className="blog-meta date">{formattedPushlishDate}</span>
                <h3 className="title">
                    <Link
                        to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
                    >
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

BlogGrid.defaultProps = {
    classOption: "thumb",
};

export default BlogGrid;
