import React from "react";
import Modal from 'react-bootstrap/Modal';
import { BsCheckLg, BsPersonPlus } from "react-icons/bs";

function AddContact({ show, onHide }) {
    return (

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <Modal show={show} onHide={onHide}>
                <div className="modal-content">
                    <Modal.Header closeButton>
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add new contact <BsPersonPlus /></h1>
                    </ Modal.Header >
                    <Modal.Body>

                        <div className="element_width ">
                            <label for="contact"></label>
                            <input className="input regular" type="text" name="contact" placeholder="Contact's identifier:" />
                            <button type="button" className="btn btn-info">add <BsCheckLg /></button>

                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </div>

    );
}

export default AddContact;
