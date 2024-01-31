import React from "react";

import ContactForm from "../../components/contact-form";
import ContactInfo from "../../components/contact-info";
import ContactData from "../../data/contact.json";

const ContactContainer = () => {
    return (
        <section className="contact-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-6 col-lg-6 mb-7">
                        <div className="contact-title-section">
                            <h3 className="title">Bizimle İletişime Geçin</h3>
                            <p>
                                Teknoloji Kulübü hakkında daha fazla bilgi almak, etkinliklerimize katılmak veya herhangi bir sorunuzu iletmek için bizimle iletişime geçmekten çekinmeyin. İletişim formunu doldurarak veya doğrudan aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
                            </p>
                        </div>

                        <ContactForm />
                    </div>

                    <div className="col-xl-5 col-lg-6 mb-7 offset-xl-1">
                        <div className="contact-address text-center">
                            {ContactData &&
                                ContactData.map((single, key) => {
                                    return (
                                        <ContactInfo key={key} data={single} />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;
