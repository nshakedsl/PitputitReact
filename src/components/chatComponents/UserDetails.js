import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../ctx/userContext"

function UserDetails() {
    const Userctx = useContext(UserContext);
    const [user, setUser] = useState({});


    useEffect(() => {
        console.log('Userctx.getCurrentUser(): ', Userctx.getCurrentUser());
        setUser(Userctx.getCurrentUser())
    }, [])
    return (
        <div className="left_topbar">
            <button type="button" className="transparent-btn button4 btn-img-self ">
                <img src={user && user.image} alt="buttonpng" className="btn-img image-cropper ico" />
            </button>
            {console.log(' user.image: ', user)}
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