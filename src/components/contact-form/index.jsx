import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ContactForm = () => {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://technovasyon.pythonanywhere.com/api/v1/message", {
                method: "POST",
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
            <form
                id="contactForm"
                className="row"
                onSubmit={handleSubmit}
            >
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Adınız*"
                        required
                    />
                </div>
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        required
                    />
                </div>

                <div className="col-12 mb-9">
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        cols="30"
                        rows="10"
                        placeholder="Mesaj"
                        required
                    ></textarea>
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Gönderildi!"
                    >
                        Gönder
                    </button>
                </div>
            </form>
                       
            {showModal && (
                <Modal isOpen={showModal}>
                    <ModalHeader toggle={toggle}>Mesaj Gönderimi</ModalHeader>
                
                    <ModalBody>
                        Mesajiniz başarılı bir şekilde gönderildi! Sizinle en kisa zamanda iletişime geçeceğiz.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            kapat
                        </Button>
                    </ModalFooter>
              </Modal>
            )}
        </Fragment>
    );
};

export default ContactForm;
