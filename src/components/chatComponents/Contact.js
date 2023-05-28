import React, { useContext } from 'react';
import { UserContext } from "../../ctx/userContext"

function UserDetails({ otherName, otherImg, date, lastMsg, chatId, user }) {
    const Userctx = useContext(UserContext);

    return (
        <div className="chat_box" onClick={() => { Userctx.setCurrentChatUser(user); Userctx.setCurrentChatId(chatId) }}>
            <div className="image-cropper">
                <img
                    src={otherImg}
                    alt="contactImage" />
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



