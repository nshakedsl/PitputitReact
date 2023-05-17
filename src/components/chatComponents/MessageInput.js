import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../ctx/userContext"

function MessageInput() {
    const [value, setValue] = useState('');
    const Userctx = useContext(UserContext);

    const handleMessageSent = () => {

        var currentdate = new Date();
        if (value.trim() != '') {
            let newMessage = {
                id: Date.now().toString(), name: Userctx.userName, messageText: value, time: currentdate.getHours() + ":"
                    + currentdate.getMinutes()
            }
            Userctx.setCurrentChat((prevCurrentChat) => {
                let temp = { ...prevCurrentChat }
                temp.messages.push(newMessage)
                return temp;
            })
            setValue('')
        }

    };
    useEffect(() => {
        return () => {
            if (Userctx.currentChat.messages.length !== 0) {
                Userctx.setUser(prevUser => {
                    let temp = { ...prevUser }
                    let i = temp.dialogList.findIndex(item => item.user2 === Userctx.currentChat.user2)
                    temp.dialogList[i] = Userctx.currentChat
                    return temp
                })

            }
        };
    }, []);



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