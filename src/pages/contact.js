import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="İletişim - Üsküdar Üniversitesi Teknoloji Kulübü" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="İletişim Bilgilerimiz"
                        excerpt=""
                        image="./images/contact/1.png"
                    />
                    <ContactContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
