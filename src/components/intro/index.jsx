import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Parallax from "parallax-js";

const Intro = ({ data }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="hero-slider">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-slide-content">
                            <h2
                                className="title animated"
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            ></h2>
                            <Button
                                classOption="btn btn-lg animated delay1 btn-dark btn-hover-dark me-4 mb-3 mb-sm-0"
                                text="Kayıt Formu"
                                path="https://forms.gle/cbm7PwyVw9wXM5ZV7"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div
                            className="hero-img scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    className="animated"
                                    src={`${data.image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
