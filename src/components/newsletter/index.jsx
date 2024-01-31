import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CustomForm = () => {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://technovasyon.pythonanywhere.com/api/v1/newsletter", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: formData,
            });

            if (response.ok) {
                setShowModal(true);
                form.reset();
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <Fragment>
            <form className="news-letter-form d-flex" onSubmit={handleSubmit}>
                <input
                    id="email"
                    className="form-control"
                    type="email"
                    placeholder="Email giriniz"
                    name="mail"
                    required
                />
                <button className="search-btn" type="submit" >
                    abone ol
                </button>
            </form>
            
            {showModal && (
                <Modal isOpen={showModal}>
                    <ModalHeader toggle={toggle}>Bülten Aboneliği</ModalHeader>
                    <ModalBody>
                        Tebrikler 🎉<br />Haberler bültenine abone oldunuz!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Kapat
                        </Button>
                    </ModalFooter>
              </Modal>
            )}
        </Fragment>
    );
};

const Newsletter = (props) => {
    return (
        <CustomForm />
    );
};

export default Newsletter;
