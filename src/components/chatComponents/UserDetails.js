import React, { useContext } from 'react';
import { UserContext } from "../../ctx/userContext"

function UserDetails({myImg }) {
    const Userctx = useContext(UserContext);
    return (
        <div className="left_topbar">
            <button type="button" className="transparent-btn button4 btn-img-self ">
                <img src={myImg} alt="buttonpng"
                    className="btn-img image-cropper ico" />
            </button>
            <div>{Userctx.userName}</div>
            <div className="add">

                <button type="button" className="transparent-btn btn-bar-size" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"><img src="images/add-contact.png" alt="buttonpng" className="btn-img" />
                </button>
            </div>
        </div>
    );
}

export default UserDetails;