import React, {useEffect, useState} from "react";
import TeamCard from "../../components/team-card";

const TeampPageContainer = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://technovasyon.pythonanywhere.com/api/v1/teams');
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
        <div className="service-section section-py">
            <div className="container">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n7">
                    {data &&
                        data.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col col-md-6 col-lg-4 col-xl-3 text-center mb-7"
                                >
                                    <TeamCard key={key} data={single} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default TeampPageContainer;
