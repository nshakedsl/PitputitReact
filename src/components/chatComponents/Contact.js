import React, { useContext } from 'react';
import { UserContext } from "../../ctx/userContext"

function UserDetails({ otherName, otherImg, date, lastMsg, dialog }) {
    const Userctx = useContext(UserContext);

    return (
        <div className="chat_box" onClick={() => { Userctx.setCurrentChat(dialog) }}>
            <div className="image-cropper">
                <img
                    src={otherImg} />
            </div>
            <div className="container_contact">
                <div className="text_and_date_container">
                    <div className="text_title">{otherName}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="text_message">{lastMsg}</div>
            </div>
        </div>
    );
}

export default UserDetails;



