import React, {useEffect, useState} from "react";
import BlogData from "../../../data/blog.json";
import SectionTitleTwo from "../../../components/section-title-two";
import BlogGrid from "../../../components/blog";

const HomeBlog = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://technovasyon.pythonanywhere.com/api/v1/blogs');
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
        <div className="blog-section section-pb">
            <div className="container">
                <SectionTitleTwo
                    classOption="title-section mb-lg-10 pb-lg-1"
                    subTitle="ETKİNLİKLERİMİZ"
                    title="Son <span class='text-primary'>Yapılan</span> Etkinlikler"
                    excerptClassOption="mt-lg-10 pt-lg-3 mb-10 mb-lg-0"
                    excerpt="Teknoloji Kulübü olarak düzenlediğimiz etkinliklerle bir araya gelerek teknoloji dünyasındaki yenilikleri keşfediyor ve deneyimlerimizi paylaşıyoruz. Katılın, öğrenin ve teknolojiyle dolu bir dünyada kendinizi keşfedin!"
                />
                <div className="row mb-n7">
                    {data &&
                        data.slice(0, 3).map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-lg-4 col-sm-6 mb-7"
                                >
                                    <BlogGrid
                                        classOption="null"
                                        key={key}
                                        data={single}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
