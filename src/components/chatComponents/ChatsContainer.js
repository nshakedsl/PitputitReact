import React, { useContext, useEffect } from 'react';
import Mesage from './Message';
import { UserContext } from "../../ctx/userContext"
import { useNavigate } from 'react-router-dom';


function MessageContainer() {
    const Userctx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        getChat()
    }
        , [Userctx.currentChatId])
    const getChat = async () => {

        try {
            const res = await fetch(`http://localhost:5000/api/Chats/${Userctx.currentChatId}/Messages`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            if (res.status === 401) {
                navigate('/login')
                return
            }
            else {
                if (res.status === 200) {
                    const responseData = await res.json()
                    Userctx.setCurrentChat(responseData)
                    console.log('responseData: ', responseData);
                    return
                }
            }
        } catch (err) {
            console.log('err: ', err);

        }
    }
    return (

        <div className="chats-container" >
            {Userctx && Userctx.currentChat && Userctx.currentChat && Userctx.currentChat.map((item) => (
                <Mesage key={item.id} MessageInfo={item} />
            ))}
        </div>
    );
}

export default MessageContainer;
