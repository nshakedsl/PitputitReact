import React, { useContext, useState } from 'react';
import { UserContext } from "../../ctx/userContext"
import AddContact from './AddContact';
function UserDetails() {
    const Userctx = useContext(UserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="left_topbar">
                <button type="button" className="transparent-btn button4 btn-img-self ">
                    <img src={Userctx && Userctx.user && Userctx.user.profilePic} alt="buttonpng" className="btn-img image-cropper ico" />
                </button>
                <div>{Userctx && Userctx.user && Userctx.user.displayName}</div>
                <div className="add">

                    <button type="button" className="transparent-btn btn-bar-size" onClick={handleShow}><img src="images/add-contact.png" alt="buttonpng" className="btn-img" />
                    </button>
                </div>
            </div>
            <AddContact setShow={setShow} show={show} onHide={handleClose} />
        </>
    );
}

export default UserDetails;