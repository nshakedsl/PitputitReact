import React, { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { BsCheckLg, BsPersonPlus } from "react-icons/bs";
import { UserContext } from "../../ctx/userContext"
import { useNavigate } from 'react-router-dom';

function AddContact({ show, onHide, setShow }) {
    const [error, setError] = useState('');
    const [contact, setContact] = useState('')
    const Userctx = useContext(UserContext)
    const navigate = useNavigate();
    const [shakeError, setShakeError] = useState(false);

    const shakeAction = () => {
        setShakeError(true);
        setTimeout(() => { setShakeError(false); }, 500);
    }

    const inputChange = (e) => {
        setContact(e.target.value)
        setError('');
    }


    const addContactToUser = async (data) => {
        try {
            const res = await fetch(`http://localhost:5000/api/Chats`, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                'body': JSON.stringify(data)
            })

            //TODO: add user twice.

            if (res.status === 401) {
                navigate('/login')
                return
            }
            else {

                if (res.status === 400) {
                    setError('User does not exists❗');
                    shakeAction();
                    return

                } else {
                    if (res.status === 200) {
                        const responseData = await res.json()
                        Userctx.setUser(user => {
                            let temp = { ...user }
                            if (temp.dialogList)
                                temp.dialogList.push(responseData);
                            else
                                temp.dialogList = [responseData]
                            return temp;
                        })
                        setContact('')
                        setShow(false)
                    }
                }
            }


        }
        catch (err) {
            console.log('err: ', err);

        }
    }


    const handleAddContact = () => {
        console.log('Userctx.user: ', Userctx.user);
        let isPresent = Userctx && Userctx.user && Userctx.user.dialogList && Userctx.user.dialogList.find(element => element.user2 === contact)
        if (contact != Userctx.userName && !isPresent) {
            addContactToUser({ username: contact })
            // let newContact = Userctx.userList.find((user) => user.userName === contact)
            // if (newContact) {
            //     const uniqueId = Date.now().toString();
            //     let newDialog = { dialogId: uniqueId, user1: Userctx.userName, user2: newContact.userName, messages: [] }
            //     newContact.dialogList.push(newDialog)
            //     Userctx.setUser(user => {
            //         let temp = { ...user }
            //         temp.dialogList.push(newDialog);
            //         return temp;
            //     })
            //     setContact('')
            //     setShow(false)
            // } else {

            //     setError('User does not exists❗');
            //     shakeAction();
            // }
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
