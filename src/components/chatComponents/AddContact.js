import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BsCheckLg, BsPersonPlus } from "react-icons/bs";
import { UserContext } from "../../ctx/userContext"

function AddContact({ show, onHide, setShow }) {
    const [error, setError] = useState('');
    const [contact, setContact] = useState('')
    const Userctx = useContext(UserContext)
    const [shakeError, setShakeError] = useState(false);

    const shakeAction = () => {
        setShakeError(true);
        setTimeout(() => { setShakeError(false); }, 500);
    }

    const inputChange = (e) => {
        setContact(e.target.value)
        setError('');
    }


    const handleAddContact = () => {
        let isPresent = Userctx.user.dialogList.find(element => element.user2 === contact)
        if (contact != Userctx.userName && !isPresent) {
            let newContact = Userctx.userList.find((user) => user.userName === contact)
            if (newContact) {
                const uniqueId = Date.now().toString();
                let newDialog = { dialogId: uniqueId, user1: Userctx.userName, user2: newContact.userName, messages: [] }
                newContact.dialogList.push(newDialog)
                Userctx.setUser(user => {
                    let temp = { ...user }
                    console.log('temp: ', temp);
                    temp.dialogList.push(newDialog);
                    return temp;
                })
                setContact('')
                setShow(false)
            } else {

                setError('User does not exists❗');
                shakeAction();


            }
        }
        else {
            setError('Illegal person to add❗');
            shakeAction();
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
                                placeholder="Contact's identifier:" onChange={inputChange} />
                            <div id="anim" className={shakeError ? 'shake' : ''}>
                                <div className="textError">{error}</div>
                            </div>



                            <button type="button" onClick={handleAddContact} className="btn btn-info">add <BsCheckLg /></button>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </div>

    );

}

export default AddContact;
