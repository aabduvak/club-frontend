import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutContainer from "../containers/about";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hakkımızda - Üsküdar Üniversitesi Teknoloji Kulübü" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Technovasyon"
                        excerpt="2020 yılı Ekim ayında kurulan Üsküdar Üniversitesi Teknoloji Kulübü, kurulduğu yıldan itibaren alanında uzman birbirinden değerli konuşmacılar, eğitimciler ve katılımcılarla birçok etkinlik düzenleyerek üniversitemizin en büyük kulüplerinden biri haline gelmiştir."
                        image="./images/banner/1.png"
                    />
                    <BrandContainer />
                    <AboutContainer />
                    <TestimonialReverse />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
