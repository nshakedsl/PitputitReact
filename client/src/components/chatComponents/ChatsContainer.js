import React, { useContext, useEffect } from 'react';
import Mesage from './Message';
import { UserContext } from "../../ctx/userContext"
import { useNavigate } from 'react-router-dom';


function MessageContainer() {
    const Userctx = useContext(UserContext);
    const navigate = useNavigate();


    useEffect(() => {
        Userctx.socket.on('receiveMessage', data => {
            Userctx.setCurrentChatId(prevCurrentChatId => {
            
                if (data.currentChatId === prevCurrentChatId)
                    Userctx.setCurrentChat(prevCurrentChat => [...prevCurrentChat, data.responseData]);
                return prevCurrentChatId
            })
        });
        Userctx.socket.emit('myuser', Userctx.userName)

        return () => {
            Userctx.socket.off('receiveMessage');
        };
    }, []);


    useEffect(() => {
        getChat()
    }
        , [Userctx.currentChatId])
    const getChat = async () => {

        try {
            const res = await fetch(`http://localhost:8080/api/Chats/${Userctx.currentChatId}/Messages`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            })
            if (res.status === 401) {
                localStorage.setItem("token", '')
                navigate('/login')
                return
            }
            else {
                if (res.status === 200) {
                    const responseData = await res.json()
                    Userctx.setCurrentChat(responseData.reverse())
                    return
                }
            }
        } catch (err) {
            console.log('err: ', err);

        }
    }
    return (

        <div className="chats-container" >
            {Userctx && Userctx.currentChat && Userctx.currentChat && Userctx.currentChat.map((item) => {
                return <Mesage key={item.id} MessageInfo={item} />
            })}
        </div>
    );
}

export default MessageContainer;
