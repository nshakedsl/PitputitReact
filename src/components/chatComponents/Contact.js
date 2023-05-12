import React from "react";
// import './../styles/login.css'
// import './../styles/chats.css'
function UserDetails({ otherName, otherImg, date, lastMsg }) {
    return (
        <div className="chat_box">
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



