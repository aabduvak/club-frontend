import PropTyps from "prop-types";

const Team = ({ data }) => {
    return (
        <div className="new-team-members-list">
            <img src={data.photo} alt="images" style={{width: '140px', height: 'auto', borderRadius: '50%'}}/>
            <h3 className="title">{data.name}</h3>
            <span>{data.designation}</span>
        </div>
    );
};

Team.propTypes = {
    data: PropTyps.object,
};

export default Team;