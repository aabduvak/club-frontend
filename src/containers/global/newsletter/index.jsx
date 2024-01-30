import React from "react";
import Newsletter from "../../../components/newsletter";
import SectionTitle from "../../../components/section-title";

const NewsletterArea = () => {
    return (
        <div className="news-letter-section section-pb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                        <SectionTitle
                            classOption="title-section mb-10 text-center"
                            subTitle="BÜLTEN"
                            title="Haberler <span class='text-primary'>Bültenine</span> &amp;
                            <br class='d-none d-xl-block' /> Abone Olun"
                        />
                    </div>
                    <div className="col-xl-8 col-lg-10 mx-auto">
                        <Newsletter mailchimpUrl="http://technovasyon.us21.list-manage.com/subscribe/post?u=3a3c44fa0765cfc84a0b2f784&amp;id=82208fe521&amp;f_id=0011ebe6f0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterArea;
