import React from 'react';
import Mesage from './Message';

function MessageContainer({curChat}) {
    console.log('curChat: ', curChat);
    return (

        <div className="chats-container">
            {curChat.map((item, i) => (
                <Mesage key={item.id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;
