import React from "react";
import Mesage from './Message';

function MessageContainer({ id, messages }) {
    return (

        <div className="chats-container">
            {messages.map((item) => (
                <Mesage key={item.messageId} id={id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;



