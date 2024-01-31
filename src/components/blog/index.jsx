import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const BlogGrid = ({ data, classOption }) => {
    const eventDate = new Date(data.date);
    const currentDate = new Date();
    const [hours, minutes] = data.time.split(":").slice(0, 2);
    
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);
    
    const formattedDate = eventDate.toLocaleDateString('tr-TR');
    const formattedTime = `${hours}:${minutes}`
    
    return (
        <React.Fragment>    
            <div className="blog-card">
                <div className={`thumb bg-light text-center ${classOption}`}>
                    <img
                        src={`${data.photo}`}
                        alt="img"
                        style={{cursor: 'pointer'}}
                        onClick={toggle}
                    />
                </div>
                <div className="blog-content">
                    <span className="blog-meta date">📅 {formattedDate} | {formattedTime}</span>
                    <h3 className="title" 
                        onClick={toggle}
                        style={{cursor: 'pointer'}}>
                        {data.title}
                    </h3>
                </div>
            </div>
            
            {showModal && (
                <Modal isOpen={showModal}>
                    <ModalHeader toggle={toggle}>{data.title}</ModalHeader>
                
                    <ModalBody>
                        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowWrap: 'break-word' }}>    
                            {data.content}
                        </pre>
                        <br />
                        <p>📍 {data.place}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="gray" className="border" onClick={toggle}>
                            Kapat
                        </Button>
                        
                        {data.url && eventDate > currentDate &&(
                            <a
                                className={`${classOption}`}
                                href={data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button color="primary"> 
                                    Başvur
                                </Button>
                            </a>
                        )}
                        
                        {(!data.url || eventDate <= currentDate) &&(
                            <Button color="primary" disabled> 
                                Başvur
                            </Button>
                        )}
                    </ModalFooter>
              </Modal>
            )}
        </React.Fragment>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

BlogGrid.defaultProps = {
    classOption: "thumb",
};

export default BlogGrid;
