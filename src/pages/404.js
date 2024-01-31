import React from "react";
import ScrollToTop from "../components/scroll-to-top";	
import PageBanner from "../containers/global/page-banner";
import SEO from "../components/seo";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const Error404 = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Sayfa Bulunmadi - Üsküdar Üniversitesi Teknoloji Kulübü" />
                <div className="wrapper">
					<Header />
					<PageBanner
                        title="Üzgünüz :("
                        excerpt="Aradığınız sayfa bulunamadı"
                        image="./images/blog/banner.png"
                    />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Error404;
