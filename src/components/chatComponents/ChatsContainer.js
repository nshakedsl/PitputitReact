import React, { useContext } from 'react';
import Mesage from './Message';
import { UserContext } from "../../ctx/userContext"

function MessageContainer({ messages }) {
    const Userctx = useContext(UserContext)
    const curChat = Userctx.getCurrentChat()

    return (

        <div className="chats-container">
            {curChat.map((item, i) => (
                <Mesage key={item.id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;
