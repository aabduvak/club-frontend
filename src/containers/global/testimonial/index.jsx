import { useEffect, useRef } from "react";
import SectionTitle from "../../../components/section-title";
import SwiperCore, { Navigation } from "swiper";
import Parallax from "parallax-js";

SwiperCore.use([Navigation]);
const TestimonialContainer = () => {
    const swiperOption = {
        loop: false,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
    };
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="testimonial-section section-py position-relative">
            <img
                className="tetimonial-shape"
                src={`${process.env.PUBLIC_URL}/images/testimonial/shape.png`}
                alt=""
            />
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-7 col-lg-6 mb-7">
                        <div
                            className="testimonial-photo scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/testimonial/1.png`}
                                    alt="Buznex"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="testimonial-wrap">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="Hakkımızda"
                                title="Vizyon ve Misyonumuz"
                            />
                            <p>
                                <span className="text-primary fw-bold">Vizyonumuz</span>
                                <br />
                                Ülkemizi başta teknoloji ve mühendislik alanlarında olmak üzere
                                birçok alanda küresel çapta en iyi seviyeye getirmek üzere,
                                &quot;Milli Teknoloji Hamlesi&quot; çatısı altında çalışmalar yürütmek ve projeler üretmek.
                            </p>
                            <p>
                                <span className="text-primary fw-bold">Misyonumuz</span>
                                <br />
                                Uluslararası niteliklerde, sektörde öncü olabilecek, teorik ve uygulama becerisi yüksek olan ve bu becerilerini tasarım, üretim, uygulama ve AR-GE çalışmalarında başarılı bir biçimde kullanabilen, analitik düşünebilen, ortak çalışma yapabilecek bireyler yetiştirmesine katkı sağlamak
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialContainer;
