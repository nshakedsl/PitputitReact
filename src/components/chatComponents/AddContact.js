import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BsCheckLg, BsPersonPlus } from "react-icons/bs";
import { UserContext } from "../../ctx/userContext"

function AddContact({ show, onHide, setShow }) {
    const [contact, setContact] = useState('')

    const Userctx = useContext(UserContext)

    const handleAddContact = () => {
        let newContact = Userctx.userList.find((user) => user.userName === contact)
        if (newContact) {
            const uniqueId = Date.now().toString();
            let newDialog = { dialogId: uniqueId, user1: Userctx.userName, user2: newContact.userName, messages: [] }
            newContact.dialogList.push(newDialog)
            Userctx.setUser(user => {
                let temp = { ...user }
                temp.dialogList.push(newDialog);
                return temp;
            })
            setShow(false)
        } else {
            console.log("User dosen't exists");
            // TODO: Namma put error message- User dosen't exists
        }
    };

    return (

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <Modal show={show} onHide={onHide}>
                <div className="modal-content">
                    <Modal.Header closeButton>
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add new contact <BsPersonPlus /></h1>
                    </ Modal.Header >
                    <Modal.Body>

                        <div className="element_width ">
                            <label htmlFor="contact"></label>
                            <input className="input regular" value={contact} type="text" name="contact"
                                placeholder="Contact's identifier:" onChange={(e) => setContact(e.target.value)} />
                            <button type="button" onClick={handleAddContact} className="btn btn-info">add <BsCheckLg /></button>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </div>

    );
}

export default AddContact;
