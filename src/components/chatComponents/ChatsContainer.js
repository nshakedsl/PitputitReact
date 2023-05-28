import React, { useContext } from 'react';
import Mesage from './Message';
import { UserContext } from "../../ctx/userContext"


function MessageContainer() {
    const Userctx = useContext(UserContext);
    return (

        <div className="chats-container" >
            {Userctx && Userctx.currentChat && Userctx.currentChat && Userctx.currentChat.messages && Userctx.currentChat.messages.map((item) => (
                <Mesage key={item.id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;
