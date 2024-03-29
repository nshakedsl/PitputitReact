import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../ctx/userContext"
import { useNavigate } from 'react-router-dom';

function MessageInput() {
    const inputRef = useRef(null);
    const [value, setValue] = useState('');
    const Userctx = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const sendMessage = async (data) => {
        try {
            const res = await fetch(`http://localhost:8080/api/Chats/${Userctx.currentChatId}/Messages`, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                'body': JSON.stringify(data)
            })

            if (res.status === 401) {
                localStorage.setItem("token", '')
                navigate('/login')
                return
            }
            else {

                if (res.status === 200) {
                    const responseData = await res.json()
                    Userctx.socket.emit('sendMessage',
                        { responseData, username: Userctx.currentChatUser.username, currentChatId: Userctx.currentChatId });

                    Userctx.setCurrentChat((prevCurrentChat) => {
                        let temp = [...prevCurrentChat]
                        if (temp && temp.length != 0) {
                            temp.push(responseData)
                        }
                        else
                            temp = [responseData]
                        return temp;
                    })
                    Userctx.setUser((prevUser) => {
                        let temp = { ...prevUser }
                        let newMessage = { created: responseData.created, content: responseData.content }
                        temp.dialogList.find(item => item.user.username === Userctx.currentChatUser.username).lastMessage = newMessage
                        return temp
                    })
                    setValue('')
                }
            }

        }
        catch (err) {
            console.log('err: ', err);

        }
    }




    const handleMessageSent = async () => {
        if (value.trim() != '') {
            let newMessage = { msg: value }
            setLoading(true)
            await sendMessage(newMessage)
            setLoading(false)
            setValue('')
        }

    };




    const handleKeyDown = (event) => {
        if (event.key === 'Enter')
            handleMessageSent();
    }
    return (
        <footer className="footer">
            <input onKeyDown={handleKeyDown} className="message" value={value} onChange={(e) => setValue(e.target.value)}
                placeholder="Type a message" />
            <div>
                {loading ?
                    <div className="spinner ">
                        <div className="bounce1 gray_spinner"></div>
                        <div className="bounce2 gray_spinner"></div>
                        <div className="bounce3 gray_spinner"></div>
                    </div>
                    :
                    <svg onClick={handleMessageSent} className="send" viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"
                        version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                        <path fill="#54656f"
                            d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                    </svg>
                }
            </div>
        </footer>
    );
}

export default MessageInput;