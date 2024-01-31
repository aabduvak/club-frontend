import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ekibimiz - Üsküdar Üniversitesi Teknoloji Kulübü" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Perde Arkasındaki İnsanlar"
                        excerpt="Biz, çeşitli yeteneklere sahip ve teknolojiye tutkulu bir ekip olarak bir araya geldik. Kulübümüzün yönetiminde liderlik edenlerden, etkinlikleri organize edenlere kadar, her birimiz kendi alanımızda uzmanız ve aynı hedefe doğru ilerliyoruz."
                        image="./images/team/5.png"
                    />
                    <TeampPageContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
