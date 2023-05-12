import React from "react";
// import './../styles/login.css'
// import './../styles/chats.css'
function UserDetails({ nameMe, myImg }) {
    return (
        <div className="left_topbar">
            <button type="button" className="transparent-btn button4 btn-img-self ">
                <img src={myImg} alt="buttonpng"
                    className="btn-img image-cropper ico" />
            </button>
            <text> {nameMe}</text>
            <div className="add">

                <button type="button" className="transparent-btn btn-bar-size" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"><img src="images/add-contact.png" alt="buttonpng" className="btn-img" />
                </button>
            </div>
        </div>
    );
}

export default UserDetails;