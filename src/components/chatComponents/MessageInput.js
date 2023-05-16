import React, { useContext, useState } from "react";
import { UserContext } from "../../ctx/userContext"

function MessageInput() {
    const [value, setValue] = useState('');
    const Userctx = useContext(UserContext);
    const curChat = Userctx.getCurrentChat()
    console.log("cur msg is",Userctx.getCurrentUser())
    console.log('curChat[0]: ', curChat[0]);
    const handleMessageSent = () => {
        var currentdate = new Date(); 
        if (value.trim()!='') {
            let newMessage = {name : Userctx.userName, messageText:value, time: currentdate.getHours() + ":"  
            + currentdate.getMinutes()}
            curChat[0].messages.push(newMessage)
            setValue('')
        }
        
    };
    return (
        <footer className="footer">
            <input className="message" value={value} onChange={(e) => setValue(e.target.value)}
                placeholder="Type a message" />
            <svg onClick={handleMessageSent} className="send" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
                version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                <path fill="#54656f"
                    d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
            </svg>
        </footer>
    );
}

export default MessageInput;