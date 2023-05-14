import React from "react";
import Mesage from './Message';

function MessageContainer({ messages }) {
    return (

        <div className="chats-container">
            {messages.map((item, i) => (
                <Mesage key={item.id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;
