import PropTyps from "prop-types";

const TeamCard = ({ data }) => {
    return (
        <div className="team-card">
            <div className="thumb">
                <img src={data.photo} alt="img" style={{borderRadius: '50%'}} />
            </div>
            <div className="content">
                <h3 className="title">{data.name}</h3>
                <span>{data.designation}</span>
            </div>
        </div>
    );
};

TeamCard.propTypes = {
    data: PropTyps.object,
};

export default TeamCard;
