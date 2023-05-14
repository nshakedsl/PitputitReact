import React from "react";
import Mesage from './Message';

function MessageContainer({ messages }) {
    return (

        <div className="chats-container">
            {messages.map((item) => (
                <Mesage MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;
