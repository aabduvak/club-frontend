import { useEffect, useRef } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import Parallax from "parallax-js";

const HomeAboutContainer = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="HAKKIMIZDA"
                                title="Üsküdar Üniversitesi 
                                <span class='text-primary'>
                                    Teknoloji
                                </span> Kulübü"
                            />
                            <span className="date-meta">
                                Kuruluş: 2020<span className="hr"></span>
                            </span>
                            <p className="mb-5">
                                2020 yılı Ekim ayında kurulan Üsküdar Üniversitesi Teknoloji Kulübü, kurulduğu yıldan itibaren alanında uzman birbirinden değerli konuşmacılar, eğitimciler ve katılımcılarla birçok etkinlik düzenleyerek üniversitemizin en büyük kulüplerinden biri haline gelmiştir.
                            </p>
                            <p className="high-light mb-8">
                                Yapılan etkinlikler ve eğitimlerle geleceğine yön vermek isteyen öğrencileri bir araya getiren kulübümüz, okul içinde ve dışında etkin faaliyet göstererek çeşitli alanlarda projeler üretmektedir.
                            </p>
                            <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Daha fazla"
                                path="/about"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 order-first order-lg-last col-lg-6 mb-7 offset-xl-1">
                        <div
                            className="about-photo scene text-center text-lg-left"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/about/1.png`}
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="about-shape"
                src={`${process.env.PUBLIC_URL}/images/about/shape.png`}
                alt="bg-shape"
            />
        </div>
    );
};

export default HomeAboutContainer;
