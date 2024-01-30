import React, { useState, useEffect } from "react";
import Intro from "../../../components/intro";

const IntroContainer = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://technovasyon.pythonanywhere.com/api/v1/sliders');
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
        <div className="section position-relative">
            <div className="hero-shape1">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`}
                    alt="shape"
                />
            </div>
            <div className="hero-shape2">
                <img
                    src={`${process.env.PUBLIC_URL}/images/slider/shape/shape2.png`}
                    alt="shape"
                />
            </div>
            {data ? (
                <Intro data={data[0]} />
                ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
};

export default IntroContainer;
