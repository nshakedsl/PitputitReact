import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../ctx/userContext"
import AddContact from './AddContact';
function UserDetails() {
    const Userctx = useContext(UserContext);
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setUser(Userctx.getCurrentUser())
    }, [])
    return (
        <>
            <div className="left_topbar">
                <button type="button" className="transparent-btn button4 btn-img-self ">
                    <img src={user && user.image} alt="buttonpng" className="btn-img image-cropper ico" />
                </button>
                <div>{Userctx.userName}</div>
                <div className="add">

                    <button type="button" className="transparent-btn btn-bar-size" onClick={handleShow}><img src="images/add-contact.png" alt="buttonpng" className="btn-img" />
                    </button>
                </div>
            </div>
            <AddContact show={show} onHide={handleClose} />
        </>
    );
}

export default UserDetails;