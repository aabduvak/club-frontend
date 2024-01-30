import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Team from "../../../components/team";

const TeamContainer = ({ classOption }) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://technovasyon.pythonanywhere.com/api/v1/team-short');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
    }, []);
    
    return (
        <div className={`team-section overflow-hidden ${classOption}`}>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="team-content-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="EKİBİMİZ"
                                title="Perde <span class='text-primary'>Arkasındaki</span> İnsanlar"
                                excerptClassOption="mb-5"
                                excerpt="Biz, çeşitli yeteneklere sahip ve teknolojiye tutkulu bir ekip olarak bir araya geldik. Kulübümüzün yönetiminde liderlik edenlerden, etkinlikleri organize edenlere kadar, her birimiz kendi alanımızda uzmanız ve aynı hedefe doğru ilerliyoruz."
                            />
                            <p className="high-light mb-8">
                                
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Daha Fazla"
                                path="/team"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="new-team-members">
                            {data &&
                                data.map((single, key) => {
                                    return <Team key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TeamContainer.propTypes = {
    classOption: PropTypes.string,
};

TeamContainer.defaultProps = {
    classOption: "section-pb",
};

export default TeamContainer;
