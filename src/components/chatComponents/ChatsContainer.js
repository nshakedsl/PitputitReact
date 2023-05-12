import React from "react";
// import './../styles/login.css'
// import './../styles/chats.css'
import Mesage from './Message';

function MessageContainer({ id, messages }) {
    return (

        <div className="chats-container">
            {messages.map((item) => (
                <Mesage id={id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;



