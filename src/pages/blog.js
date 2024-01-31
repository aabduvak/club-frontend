import React, {useEffect, useState} from "react";
import BlogItemContainer from "../containers/blog/blog-item";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogPage = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://technovasyon.pythonanywhere.com/api/v1/events');
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
        <React.Fragment>
            <Layout>
                <SEO title="Etkinlikler – Üsküdar Üniversitesi Teknoloji Kulübü" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Kulüp Etkinlikleri"
                        excerpt="Teknoloji Kulübü olarak düzenlediğimiz etkinliklerle bir araya gelerek teknoloji dünyasındaki yenilikleri keşfediyor ve deneyimlerimizi paylaşıyoruz. Katılın, öğrenin ve teknolojiyle dolu bir dünyada kendinizi keşfedin!"
                        image="./images/blog/banner.png"
                    />
                    <BlogItemContainer data={data} />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
