import React from "react";
import './../styles/login.css'
import './../styles/chats.css'
import Mesage from './Message';

function MessageContainer({id}) {
    const Mesage1 = { messageId: 1, messageText:"Hey CSS, you're looking stylish today. 😎 What's new?",time:"13:39",sender:1 };
    const Mesage2 = { messageId: 2, messageText:"Not much, just making the web pages look pretty 💅 , and singing a song to help learnthe principles of advanced programming 1🎶."
    ,time:"13:40",sender:2 };

    return (
        
        <div className="chats-container">
            <Mesage id={id} MessageInfo={Mesage1}/>                      
            <Mesage id={id} MessageInfo={Mesage2}/>                      
        </div>
    );
}

export default MessageContainer;



